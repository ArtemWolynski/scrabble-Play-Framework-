package model;

import javax.persistence.*;

@Entity
@Table(name = "words")
@NamedQueries({
        @NamedQuery(name = EnglishWord.GET_WORD, query = "SELECT w FROM EnglishWord w WHERE LENGTH(word) > 8 AND w.id >:index"),
        @NamedQuery(name = EnglishWord.FIND_WORD, query = "SELECT w FROM EnglishWord w WHERE w.word=:word"),
        @NamedQuery(name = EnglishWord.GET_DB_SIZE, query = "SELECT max(u.id) FROM EnglishWord u")
})
public class EnglishWord extends BaseEntity {
    public static final String GET_WORD = "Get word of certain length from the db";
    public static final String FIND_WORD = "Find out if the word exists in db";
    public static final String GET_DB_SIZE = "Get total size of the db";

    @Column(name = "word")
    private String word;

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public String toString() {
        return this.word;
    }
}
