package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import play.db.jpa.Transactional;
import play.mvc.Controller;
import play.mvc.Result;
import services.ScrabbleService;



@Singleton
public class ScrabbleController extends Controller {
    private ScrabbleService scrabbleService;


    @Inject
    public ScrabbleController(ScrabbleService scrabbleService) {
        this.scrabbleService = scrabbleService;
    }

    public Result index() {
        return ok(views.html.index.render("Test assignment for Inceptionlabs"));
    }

    @Transactional(readOnly = true)
    public Result getWord(){
        return ok(this.scrabbleService.getWord());
    }

    @Transactional(readOnly = true)
    public Result getAllPossibleWords(String word){
        word = word.replaceAll(",", "");

        ObjectMapper mapper = new ObjectMapper();
        return ok(mapper.convertValue(this.scrabbleService.getAllPossibleWords(word), JsonNode.class));
    }

    @Transactional(readOnly = true)
    public Result checkWord(String word){
        return ok(String.valueOf(this.scrabbleService.checkWord(word)));
    }

}
