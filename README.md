## Full-stack  
**Frontend**
Single page application with React. The application consist of one custom built component. The component then renders a list as a table. Table populated the with the results of the API endpoint described below.

**Backend**
MVC framework/architecture, created a new backend service with two resources: products and their corresponding advertisers.
Using a relational database, the schema includes the following attributes:

- Product name
- Product SKU
- associated advertiser id
- Advertiser name

The ID, name and SKU should be unique for each product.

## Rakuten HW Project
** Single application with React, PostgreSQL, Express.js, Node.js. The application consist of an App Component and a Advertisers Component that with the help of ReactTable https://react-table.js.org/#/story/readme renders
a table of the products from a product.csv file. I set a limit on the the table of only 500 items to be returned.

## Importing CSV file
** Created the Database in the terminal and created a table
`CREATE TABLE product(name character varying(50), sku character varying(50), advertiser character varying(50), id serial);`

** Once the Database has been created in PostgreSQL copy the desired csv file into database
`COPY product(name, sku, advertiser)
FROM '/Users/paulcarrillo/Desktop/file/products.csv' DELIMITER ',' CSV HEADER;`

DATABASE IS SET TO ONLY RETURN 500 ITEMS BUT CAN BE CHANGED.

## Project Instructions

* install all project dependencies with `npm install`
* in the main file run `nodemon` to start and to connect to the database
* in the client folder run `npm start` to start the project to port http://localhost:3000/
