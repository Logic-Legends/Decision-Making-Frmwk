-- Table: public.USER_REVIEWS

-- DROP TABLE IF EXISTS public."USER_REVIEWS";

CREATE TABLE IF NOT EXISTS public."USER_REVIEWS"
(
    "REVIEW_ID" bigint NOT NULL DEFAULT nextval('"USER_REVIEWS_REVIEW_ID_seq"'::regclass),
    "REVIEW_TEXT" character varying(255) COLLATE pg_catalog."default",
    "USER_NAME" character varying(255) COLLATE pg_catalog."default",
    "DATE_ADDED" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "USER_REVIEWS_pkey" PRIMARY KEY ("REVIEW_ID")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."USER_REVIEWS"
    OWNER to postgres;