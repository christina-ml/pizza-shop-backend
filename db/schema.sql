DROP DATABASE IF EXISTS pizza_shop;
CREATE DATABASE pizza_shop;

\c pizza_shop;

DROP TABLE IF EXISTS pizza_menu;

CREATE TABLE pizza_menu (
    id SERIAL PRIMARY KEY,
    name TEXT,
    price SMALLINT,
    image TEXT,
    default_order SMALLINT,
    short_description TEXT,
    long_description TEXT
);