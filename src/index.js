import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import materialRoutes from "./routes/material.routes.js";
import clientsRoutes from "./routes/client.routes.js";

//Initialion
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//Setting
app.set("port", process.env.PORT || 3000);
app.set("views", join(__dirname, "views"));
app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    layoutsDir: join(app.get("views"), "layouts"),
    partialsDir: join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.render("index.hbs");
});
app.use(materialRoutes);
app.use(clientsRoutes);

//Public files
app.use(express.static(join(__dirname, "public")));

//Run server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
