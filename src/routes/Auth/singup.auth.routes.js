import express from "express";

const signUp = express.Router();


signUp.post("/techerRegister", async (req, res) => {

  res.send("Sign Up Teacher Route");
});


signUp.post("/studentRegister", async (req, res) => {

  res.send("Sign Up Teacher Route");
});


export default signUp;

