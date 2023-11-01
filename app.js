import express from "express";
import Jwt from "jsonwebtoken";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import ProtectedRoute from "./routes_p/route.protected.js"
import Login from "./routes_p/route.api.js"

const app = express();
const port = 5000;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use(ProtectedRoute)
app.use(Login)

app.use((req,res,next)=>{
    res
    .status(404)
    .sendFile(path.join(__dirname, "./public/404.html"));
})


export default app;