
create table cathegories (
    id bigserial primary key not null,
    cathegory_name varchar(30) not null,
    unique(cathegory_name),
);

create table user (
    id bigserial primary key not null,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    hashed_password varchar(30) not null,
    username varchar(30) not null,
    unique(hashed_password),
    unique(username)
);

create table post (
    id bigserial primary key not null,
    created timestamp not null,
    post_text varchar(1500) not null
);

create table thread (
    id bigserial primary key not null,
    thread_name varchar(150),
    created timestamp not null,
    unique(thread_name)
);

