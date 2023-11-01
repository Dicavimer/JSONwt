import { json } from "express";
import { pool } from "../db.js"
import Jwt  from "jsonwebtoken";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


export const Initial = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  };

  export const Login = async (req, res) => {
    const datos = req.body;
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE CC=? AND Password=?",[datos.cc, datos.password])
    console.log(rows.length)
    if (rows.length>0) {
      Jwt.sign({ rows }, "secretkey", { expiresIn: "120s" }, (error, token) => {
        if (error) {
          res.status(500).json('No se creo el token')
        }else{
          res
          .cookie("token", token,{maxAge:120000})
          .redirect("/api/protected")
        }
      });
      } else {
      res.status(403).json("Datos Erroneos");
    }
  };

  export const CreateUser = async(req,res)=>{
    const data= req.body
    console.log(data)
    try {
      const [row] = await pool.query("INSERT INTO usuarios (CC, Password, Email, Cellphone) VALUES (?,?,?,?)",[data.cc, data.password, data.email, data.phone]) 
      res.redirect("/api")    
    } catch (error) {
      res
      .status(500).json(error.message)
    }
  }
