// const express = require('express')
import express from "express";
import mysql from "mysql";
import cors from "cors";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { Console } from "console";
const app = express();

//auto convert text to json if possible
app.use(express.json());
//alow other origin to access our backend
app.use(cors());

   //mysql package function that we will call to establish or create connection to our database
    //create connection to our mysql database
const connection = mysql.createConnection({
    host: "localhost", // ip or hostname
    port: 3306,        // port if not using default port which is 3306
    user: "Cristian",      //database username 
    password: "password123",      //database password
    database: "first_database" // our database name
      });

//POST   - create a data from the server or database
//GET    - get    a data from the server or database
//PATCH  - update a data from the server or database
//DELETE - delete a data from the server or database
app.get('/user', function(request, response) {
  try {
    const header = request.headers;
    const authorizationHeader = header.authorization;
    if(authorizationHeader !== 'undefined'){
      const token = authorizationHeader.split(' ')[1];
      const decoded = jwt.verify(token, 'token secret key');

      console.log('decoded token: ', decoded)
      response.json({"success": true, ...decoded});
    }
    
  } catch(err) {
    // err
    response.json({"success": true, err});
  }
})


//login api, this is to use the request payload/body
//check if the payload username nad password match a data from the database
app.post('/login', function (request, response) {
    //request is the data from the frontend
    //response is the function or data from the server or backend
    const usernameFromFrontEnd = request.body.username;
    const passwordFromFrontEnd = request.body.password;

    console.log('usernameFromFrontEnd: ', usernameFromFrontEnd);
    console.log('passwordFromFrontEnd: ', passwordFromFrontEnd);


    //mysql query to fetch the username and password from the database using the payload from
    //the front end.
    const myQuery = `SELECT * FROM first_database.users
    where username = "${usernameFromFrontEnd}"`;
    //in short select user from database where username = payload.username and password = payload.password
 connection.query(myQuery, function (err, result) {
        if (err) throw err;
        console.log("id result from database: ", result);
        if(result && result[0] && result[0].id){
          const hashedPassword = result[0].password;
                                          // password          , $2b$10etc......
          console.log('password from frontend: ', passwordFromFrontEnd);
          console.log('hashedPassword: ', hashedPassword);
          const check = bcrypt.compareSync(passwordFromFrontEnd, hashedPassword);

          if(check){
            delete result[0].password;
            const token = jwt.sign({ id: result[0].id, data: result[0] }, 'token secret key', { expiresIn: '1h' });
            console.log('token: ', token)
            response.send({"success": true, token: token})
          }else{
            response.send({"success": false, error: "invalid credentials"})
          }

          console.log('check password: ', check);
        }else{
          response.send({"success": false, "error": "invalid credentials"})
        }
      });
  
})

app.post('/register', function (request, response) {
  const usernameFromFrontEnd = request.body.username;
  const passwordFromFrontEnd = request.body.password;
  const firstnameFromFrontEnd = request.body.firstname;
  const lastnameFromFrontEnd = request.body.lastname;
  const emailFromFrontEnd = request.body.email;
  const phonenumberFromFrontEnd = request.body.phonenumber;
  const genderFromFrontEnd = request.body.gender;
  const subscriptionFromFrontEnd = request.body.subscription;
  const programFromFrontEnd = request.body.program;
  const ageFromFrontEnd = request.body.age;
  const bmiFromFrontEnd = request.body.bmi;

  console.log('usernameFromFrontEnd: ', usernameFromFrontEnd);
  console.log('passwordFromFrontEnd: ', passwordFromFrontEnd);
  console.log('firstnameFromFrontEnd: ', firstnameFromFrontEnd);
  console.log('lastnameFromFrontEnd: ', lastnameFromFrontEnd);
  console.log('emailFromFrontEnd: ', emailFromFrontEnd);
  console.log('phonenumberFromFrontEnd: ', phonenumberFromFrontEnd);
  console.log('genderFromFrontEnd: ', genderFromFrontEnd);
  console.log('subscriptionFromFrontEnd: ', subscriptionFromFrontEnd);
  console.log('programFromFrontEnd: ', programFromFrontEnd);
  console.log('ageFromFrontEnd: ', ageFromFrontEnd);
  console.log('bmiFromFrontEnd: ', bmiFromFrontEnd);


  // Check if username already exists
  const UsernameQuery = `SELECT * FROM first_database.users WHERE username = "${usernameFromFrontEnd}"`;
 
  connection.query(UsernameQuery, function (err, result) {
    if (err) throw err;
    console.log("id result from database: ", result);
    if(result && result[0] && result[0].id){
      console.log('Username is already in used', result)
      response.send({ "success": false, message: 'Sorry! Username already in used.' });
      } else {
          // Username is available, proceed with registration
          bcrypt.hash(passwordFromFrontEnd, 10, function(error, hashedPassword){
              if (error) throw error;
              console.log('result: ', hashedPassword);

              const myQuery = `INSERT INTO first_database.users (username, password, email, firstname, lastname, phonenumber, gender, subscription, program, age, bmi) VALUES ("${usernameFromFrontEnd}", "${hashedPassword}", "${emailFromFrontEnd}", "${firstnameFromFrontEnd}", "${lastnameFromFrontEnd}", "${phonenumberFromFrontEnd}", "${genderFromFrontEnd}", "${subscriptionFromFrontEnd}", "${programFromFrontEnd}","${ageFromFrontEnd}","${bmiFromFrontEnd}")`;

              console.log('myQuery" ', myQuery);
              connection.query(myQuery, function (err, result) {
                  if (err) throw err;
                  console.log("id result from database: ", result);

                  response.send({ "success": true });
              });
          });
      }
  });
});
console.log('STARTING EXPRESS SERVER')
connection.connect(function (error) {
  if (error) throw error; // nagka error, mag crash yung server
  //once successfully connected to the database, run express server
  console.log('MYSQL DB CONNECTION SUCCESS!')
  app.listen(3000)
  console.log('App is now running on port: ', 3000 )
});