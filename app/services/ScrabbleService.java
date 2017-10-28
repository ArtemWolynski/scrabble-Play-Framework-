package services;

import com.google.inject.ImplementedBy;


import java.util.Set;

@ImplementedBy(ScrabbleServiceImpl.class)
public interface ScrabbleService {
    String getWord();

    Set<String> getAllPossibleWords(String word);

    boolean checkWord(String string);
}
