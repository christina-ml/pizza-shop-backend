DROP DATABASE IF EXISTS pizza_shop;
CREATE DATABASE pizza_shop;

\c pizza_shop;

DROP TABLE IF EXISTS pizza_menu;

CREATE TABLE pizza_menu (
    id SERIAL PRIMARY KEY,
    uuid TEXT UNIQUE NOT NULL,
    name TEXT,
    price SMALLINT,
    image TEXT,
    toppings TEXT [],
    tags TEXT [],
    default_order SMALLINT,
    short_description TEXT,
    long_description TEXT
);

DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
    cid SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    email TEXT,
    phone TEXT,
    pizza_id INTEGER REFERENCES pizza_menu(id) ON DELETE CASCADE
);
