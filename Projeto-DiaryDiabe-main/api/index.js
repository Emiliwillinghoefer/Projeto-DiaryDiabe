const express = require('express');
const app = express();
const port = 8000;

const BloodGlucose = require('./controller/glucoseMeasurementController');
const Meal = require('./controller/mealController')

//test
app.get('/', () => {
    console.log("lol");
});

app.post('/create', DietDiary.);

// profile 
    // /login
    // /signup
    // /recover


// meal
app.get('/meal', Meal.get)
// glucose
app.get('/bloodGlucose', BloodGlucose.get)




const listener = app.listen(port);