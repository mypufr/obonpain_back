### projet-11-obon-pain-back

npm install

Create .env file from the .env-example file template

## Create the database: 
sudo -i -u postgres psql

CREATE ROLE "obonpain" WITH LOGIN PASSWORD 'obonpain';

CREATE DATABASE "obonpain" WITH owner "obonpain";

Exit

## Excecute the create_v1.sql file and the seeding_v1.sql file:
psql -U obonpain -d obonpain -f data/create_v1.sql

or 

db:create (script npm)

psql -U obonpain -d obonpain -f data/seeding_v1.sql

or

db:seed (script npm)

To reinitialize and recreate the database

npm run db:create && npm run db:seed

or

db:reset

For information, the database was created with sqitch (migration folder) to make versioning.

https://sqitch.org/

## At each stage of development and post on the dev branch :
git checkout dev

git pull origin dev

# At each stage of development install the last dependencies of the project:
npm install 


## Server startup (npm script as shortcut)
node . or script start













#   o b o n p a i n _ b a c k  
 #   o b o n p a i n _ b a c k  
 