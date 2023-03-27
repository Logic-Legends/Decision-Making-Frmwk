-- Table: public.reviews

-- DROP TABLE IF EXISTS public.reviews;

CREATE TABLE IF NOT EXISTS public.reviews
(
    id integer NOT NULL DEFAULT nextval('reviews_id_seq'::regclass),
    user_review text COLLATE pg_catalog."default",
    date_time time without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user" character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT reviews_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.reviews
    OWNER to postgres;