const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');

const pool = new pg.Pool({
  port: 5432,
  database: 'rakutendb',
  host: 'localhost',
  user: 'postgres'
});

pool.connect((err, db, done) => {
  if(err) {
    return console.log(err);
  } else {
    db.query('SELECT * FROM product LIMIT 500', (err, table) => {
      if(err) {
        return console.log(err);
      } else {
        console.log(table.rows);
      }
    })
  }
})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Acess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/product', (request, response, next) => {
  pool.query('SELECT * FROM product LIMIT 500', (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
