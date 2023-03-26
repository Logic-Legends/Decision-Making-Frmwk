-- Table: public.reviews

-- DROP TABLE IF EXISTS public.reviews;

CREATE TABLE IF NOT EXISTS public.reviews
(
    id numeric NOT NULL,
    user_review text COLLATE pg_catalog."default" NOT NULL,
    date_time timestamp without time zone NOT NULL,
    "user" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT reviews_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.reviews
    OWNER to postgres;