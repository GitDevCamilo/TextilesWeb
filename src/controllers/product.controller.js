import pool from "../models/database.js";

// Función para mostrar el formulario de añadir un producto
export const showAddForm = (req, res) => {
  res.render("products/addProd.hbs");
};

// Función para añadir un producto a la base de datos
export const addProduct = async (req, res) => {
  try {
    const { prod_id, prod_precioUni, prod_precioMayor, prod_tipo } = req.body;
    const newProduct = { prod_id, prod_precioUni, prod_precioMayor, prod_tipo };
    await pool.query("INSERT INTO tbl_producto SET ?", [newProduct]);
    res.redirect("/listProd");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para mostrar la lista de productos
export const showProductlList = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tbl_producto");
    res.render("products/listProd.hbs", { products: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para mostrar el formulario de edición de un producto
export const showEditForm = async (req, res) => {
  try {
    const { prod_id } = req.params;
    const [result] = await pool.query(
      "SELECT * FROM tbl_producto WHERE prod_id = ?",
      [prod_id]
    );
    const product = result[0];
    res.render("products/editProd.hbs", { product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para actualizar la información de un producto en la base de datos
export const editProduct = async (req, res) => {
  try {
    const { prod_id } = req.params;
    const { prod_precioUni, prod_precioMayor, prod_tipo } = req.body;
    const updatedProduct = { prod_id, prod_precioUni, prod_precioMayor, prod_tipo };
    await pool.query("UPDATE tbl_producto SET ? WHERE prod_id = ?", [
      updatedProduct,
      prod_id,
    ]);
    res.redirect("/listProd");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para eliminar un producto de la base de datos
export const deleteProduct = async (req, res) => {
  try {
    const { prod_id } = req.params;
    await pool.query("DELETE FROM tbl_producto WHERE prod_id = ?", [prod_id]);
    res.redirect("/listProd");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
