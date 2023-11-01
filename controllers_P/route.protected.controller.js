import { pool } from "../db.js"
import Jwt  from "jsonwebtoken";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));


export const Acceso = (req, res) => {
    Jwt.verify(req.token, "secretkey", (error, authData) => {
      if (error) {
        res
        .status(403)
        .sendFile(path.join(__dirname, "../public/404.html"));
      } else {
        res.sendFile(path.join(__dirname, "../public/bienvenido.html"));
      }
    });
}
  
 export const verifyToken = (req, res, next) => {
      const token = req.cookies.token;
      console.log(token)
  
      if (typeof token !==  'undifined') {
          req.token = token;
          next() 
      }else{
         res
        .status(403)
        .redirect("/api")
      }
  
  }



