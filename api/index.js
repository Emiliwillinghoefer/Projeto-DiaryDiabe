const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;
const dotenv = require('dotenv');
dotenv.config();

const authMiddleware = require('./src//middlewares/auth');
const authRoute = require('./src/routes/auth');
const mealRoute = require('./src/routes/meal');
// const BloodGlucose = require('./src/controllers/glucoseMeasurementController');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoute);

app.use(authMiddleware);
app.use('/meal', mealRoute)

// glucose
// app.get('/bloodGlucose', BloodGlucose.get)

app.listen(port, () => {
	console.log("Listening port :%s", port);
});
