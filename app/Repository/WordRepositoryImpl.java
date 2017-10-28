package Repository;


import com.google.inject.Singleton;
import model.EnglishWord;
import org.hibernate.Session;
import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;
import java.util.Random;

@Singleton
public class WordRepositoryImpl implements WordRepository {
    private int maxId;
    private static Random random = new Random();

    private JPAApi jpaApi;

    @Inject
    public WordRepositoryImpl(JPAApi jpaApi) {
        this.jpaApi = jpaApi;
    }

    @Override
    public String getWord() {
        int index = random.nextInt(getMaxId(jpaApi.em()));
        return ((EnglishWord)jpaApi.em().createNamedQuery(EnglishWord.GET_WORD).setParameter("index", index).setMaxResults(1).getSingleResult()).getWord();
    }

    public List<String> getWordsFromGivenLetters(String letters){
        Session session = jpaApi.em().unwrap(Session.class);
        return session.createNativeQuery("SELECT word FROM words WHERE word ~ '^[" + letters + "]+$'").getResultList();

    }

    @Override
    public List checkWord(String word) {
        return jpaApi.em().createNamedQuery(EnglishWord.FIND_WORD).setParameter("word", word).getResultList();
    }


    private int getMaxId(EntityManager em){
        if (maxId == 0){
            maxId = (int) em.createNamedQuery(EnglishWord.GET_DB_SIZE).getSingleResult();
            return maxId;
        } else {
            return maxId;
        }
    }
}
