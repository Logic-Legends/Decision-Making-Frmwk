-- Table: public.sign-up

-- DROP TABLE IF EXISTS public."sign-up";

CREATE TABLE IF NOT EXISTS public."sign-up"
(
    id numeric NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "date-time" time without time zone NOT NULL,
    CONSTRAINT "sign-up_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."sign-up"
    OWNER to postgres;