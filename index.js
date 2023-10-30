require("./db/db.js");
const express = require('express');
const cors = require('cors');

const { studentRoute } = require('./routers/student.router.js'); 
const { teacherRoute } = require('./routers/teacher.router.js'); 
const app = express();
const PORT = process.env.PORT || 3000;




app.use(cors()); 
app.use(express.json()); 

// Routes
app.use('/students',studentRoute);
app.use('/teachers', teacherRoute);
app.get("/",(req,res)=>{
  res.send("Hello Express App!!")
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

