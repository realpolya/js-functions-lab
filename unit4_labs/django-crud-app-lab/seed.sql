CREATE DATABASE marines;

CREATE USER marines_admin WITH PASSWORD 'SuperUser';

GRANT ALL PRIVILEGES ON DATABASE marines TO marines_admin;