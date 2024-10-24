

CREATE TABLE economic_news_data (
    id_ec_data SERIAL,
    numb INT,
    publication_date DATE NOT NULL,
    publication_time TIME NOT NULL,
    actual_value DECIMAL(10,4),
    expected_value DECIMAL(10,4),
    previous_value DECIMAL(10,4),
    acronimus VARCHAR(100),
    id_new_name INT NOT NULL,
    import_value VARCHAR(30),
    frequency VARCHAR(20) CHECK (frequency IN ('diaria', 'semanal', 'quincenal', 'mensual', 'trimestral', 'otro')),
    PRIMARY KEY (id_ec_data),
    FOREIGN KEY (id_new_name) REFERENCES news_name(id_new_name)

);



CREATE TABLE economic_calendar(
    id_new_cal INT not null auto_increment,
    date_new_cal DATE NOT NULL,
    name_new_cal VARCHAR(200) NOT NULL,
    value_new_cal VARCHAR(40) DEFAULT NULL,
    ac_new_cal VARCHAR(40) DEFAULT NULL,
    id_new_name INT not null,
    PRIMARY KEY (id_new_cal),
    FOREIGN KEY (id_new_name)
)

CREATE TABLE news_name (
    id_new_name SERIAL;
    new_name VARCHAR(200) NOT NULL,
    new_ac VARCHAR(50) DEFAULT NULL,
    new_value VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY (id_new_name)
);