-- Table: public.EMAIL_SIGNUP

-- DROP TABLE IF EXISTS public."EMAIL_SIGNUP";

CREATE TABLE IF NOT EXISTS public."EMAIL_SIGNUP"
(
    "ID" bigint NOT NULL DEFAULT nextval('"EMAIL_SIGNUP_ID_seq"'::regclass),
    "EMAIL" character varying COLLATE pg_catalog."default",
    "DATE_ADDED" time without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "EMAIL_SIGNUP_pkey" PRIMARY KEY ("ID")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."EMAIL_SIGNUP"
    OWNER to postgres;