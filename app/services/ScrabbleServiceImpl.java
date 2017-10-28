package services;

import com.google.inject.Inject;
import com.google.inject.Singleton;
import Repository.WordRepository;
import utils.Randomizer;
import utils.StringUtils;

import java.util.*;


@Singleton
public class ScrabbleServiceImpl implements ScrabbleService {
    private WordRepository wordRepository;

    @Inject
    public ScrabbleServiceImpl(WordRepository wordRepository) {
        this.wordRepository = wordRepository;
    }


    @Override
    public String getWord() {
        return Randomizer.randomizeString(wordRepository.getWord());
    }

    public Set<String> getAllPossibleWords(String word){
        Set<String> words = new HashSet<>(this.wordRepository.getWordsFromGivenLetters(word));

        return StringUtils.finalCheck(words, word);
    }

    @Override
    public boolean checkWord(String word) {

        return !this.wordRepository.checkWord(word).isEmpty();
    }
}
