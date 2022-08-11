# city-bike-app
React/PHP -app of data presentation

Helsinki City Bike App
----------------------

https://github.com/solita/dev-academy-2022-fall-exercise

This app is a React/NodeJs single page application on the front-end,
and on the back-end a PHP/MySQL -server, -database application.

To run it user needs to install Node -server, create a React -app,
and in the app folder install AXIOS (AJAX) -package.

All the .js -files and the .css -file go into the app folder's subfolder /src, 
and all the -php -files go into PHP -server's root path of the application.

For the database, user needs to create a MySQL -database, with a table called 'bikingroute',
and import all the City Bike -data to that table. The other table used in the application, 
is the actual data of the City Bike stations' address information etc.

To import database tables' data, one can use phpmyadmin -user interface to bring in the data,
raw, and basically take in the .csv -files as they are, with first row selected as column names.
User also needs to create a unique, int, primary key called 'Number' into the 'bikingroute' table,
as this will create individual values to each rows, for the data doesn't have a unique value itself.

The 'bikingroute' data can also be validated, for the creation of this app, Open Office -Calc program 
has an automated validation tool, to be run before importing the data. Also duration values under 
10 seconds, and travelled distances under 10 meters were excluded from the data.
