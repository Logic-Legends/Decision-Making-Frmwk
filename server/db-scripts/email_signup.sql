CREATE TABLE email_signup (
    id bigserial primary key,
    email varchar(255) NOT NULL,
    date_added timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
