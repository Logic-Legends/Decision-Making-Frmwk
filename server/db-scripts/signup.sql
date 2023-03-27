-- Table: public.signUp

-- DROP TABLE IF EXISTS public."signUp";

CREATE TABLE IF NOT EXISTS public."signUp"
(
    id integer NOT NULL DEFAULT nextval('"signUp_id_seq"'::regclass),
    email character varying(255) COLLATE pg_catalog."default",
    date_time time without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "signUp_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."signUp"
    OWNER to postgres;