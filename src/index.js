import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import materialRoutes from "./routes/material.routes.js";
import clientsRoutes from "./routes/client.routes.js";
import buyMaterialRoutes from "./routes/buyMaterial.routes.js"; 
import productRoutes from "./routes/product.routes.js";
import saleProduct from "./routes/sellProduct.routes.js";
import sell from "./routes/sell.routes.js";
import profit from "./routes/profit.routes.js";
import full from "./routes/full.routes.js";

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
app.use(buyMaterialRoutes);
app.use(productRoutes);
app.use(saleProduct);
app.use(sell);
app.use(profit);
app.use(full);

//Public files
app.use(express.static(join(__dirname, "public")));

//Run server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
