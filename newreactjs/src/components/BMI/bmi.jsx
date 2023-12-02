import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import logo from '../../logo.png'
import waistpic from '../../waist.jpg'

function BMI() {
    const computeClick = (e)=>{
        e.preventDefault();
           const weight = parseFloat(document.getElementById('weight').value);
           const height = parseFloat(document.getElementById('height').value) / 100;
           const bmi = weight / (height * height);
           document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
     }
     const newlogo = <img src={logo} class="img-thumbnail logo1" ></img>
     const wmpic = <img src={waistpic} className="img-fluid" alt='waist'></img>
    return (
        <div className="container2" >
        <div className="row">
            <div className="col-lg-6">
            {[wmpic]}
            </div>
            <div className="col-lg-6">
              <div className="calculator">
                <h1 className="font3">BMI Calculator</h1>
                <form id="bmiForm">
                  <label for="weight" className='font3' required>Weight (kg):</label>
                  <input type="number" id="weight" name="weight" required/>
                  <br/>
                  <label for="height" className='font3' required>Height (cm):</label>
                  <input type="number" id="height" name="height" required/>
                  <br/>
                  <br/>
                  <input type="submit" value="Calculate" onClick={computeClick}/>
                </form>
                <br/>
                <p id="result" class="font3"></p>
              </div>
            </div>
            </div>
          <div className="section-title chart-title chart">
              <h2 className="font3">BMI CALCULATOR CHART</h2>  
           <div className="chart-table">
              <table className="table table-dark table-striped-columns">
                  <thead>
                      <tr>
                          <th>BMI</th>
                          <th>WEIGHT STATUS</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td class="point">Below 18.5</td>
                          <td>Underweight</td>
                      </tr>
                      <tr>
                          <td class="point">18.5 - 24.9</td>
                          <td>Healthy</td>
                      </tr>
                      <tr>
                          <td class="point">25.0 - 29.9</td>
                          <td>Overweight</td>
                      </tr>
                      <tr>
                          <td class="point">30.0 - and Above</td>
                          <td>Obese</td>
                      </tr>
                  </tbody>
              </table>
            </div>
         </div>
         <Link to="/registration"><input type="submit" value="BACK TO REGISTRATION"/></Link>
    </div>
      )
    }
export default BMI;