package Repository;

import com.google.inject.ImplementedBy;

import java.util.List;
import java.util.Set;

@ImplementedBy(WordRepositoryImpl.class)
public interface WordRepository {

    String getWord();

    List<String> getWordsFromGivenLetters(String firstLetter);

    List checkWord(String word);
}
