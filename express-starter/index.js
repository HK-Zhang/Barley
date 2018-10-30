const express = require('express');
const courses = require('./courses');


const app = express();
app.use(express.json());

courses.coursesController(app);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listerning on Port ${port}`));

