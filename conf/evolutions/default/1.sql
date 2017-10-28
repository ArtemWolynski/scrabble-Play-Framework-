
# --- !Ups
DROP TABLE IF EXISTS public.words;

CREATE TABLE public.words (
  id INT NOT NULL,
  word VARCHAR(100) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

# --- !Downs

DROP TABLE public.words;