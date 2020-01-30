const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connection');

dotEnv.config();

const app = express();
// db connectivity 
dbConnection();
// cors
app.use(cors());
/*  const myMiddleware = (req, res, next) => {
  console.log('Hey watsup');
  next();
} */ 
// request payload middleware
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.use('/api/v1/product', require('./routes/productRoutes'));

app.get('/', (req, res, next) => { res.send('Hello from node API server')})
const PORT = process.env.PORT || 3000; // si tu ne trouve pas de port utilise port 3000 par defaut 

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}` );
}) // on ecoute le port

// error handler middleware 
app.use(function(err, req, res, next){console.log(err.stack)
res.status(500).send({
  status:500,
  message:err.message,
  body: {}
});
})