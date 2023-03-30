CREATE TABLE user_reviews (
    review_id bigserial primary key,
    review_text text NOT NULL,
    user_name varchar(255),
    date_added timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
