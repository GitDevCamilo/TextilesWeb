import pool from "../models/database.js";

// Función para mostrar el formulario de añadir una venta de producto
export const showAddForm = (req, res) => {
  res.render("sellProducts/addSellProd.hbs");
};

// Función para añadir una venta de producto a la base de datos
export const addSellProduct = async (req, res) => {
  try {
    const { ven_id, prod_id, prod_cantidad } = req.body;
    const newSellProd = { ven_id, prod_id, prod_cantidad };
    await pool.query("INSERT INTO tbl_ventaproducto SET ?", [newSellProd]);
    res.redirect("/listSellProd");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para mostrar la lista de ventas de productos
export const showSellProductlList = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tbl_ventaproducto");
    res.render("sellProducts/listSellProd.hbs", { sellProducts: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para mostrar el formulario de edición de una venta de producto
export const showEditForm = async (req, res) => {
  try {
    const { ven_id } = req.params;
    const [result] = await pool.query(
      "SELECT * FROM tbl_ventaproducto WHERE ven_id = ?",
      [ven_id]
    );
    const sellProduct = result[0];
    res.render("sellProducts/editSellProd.hbs", { sellProduct });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para actualizar la información de una venta de producto en la base de datos
export const editSellProduct = async (req, res) => {
  try {
    const { ven_id } = req.params;
    const { prod_id, prod_cantidad } = req.body;
    const updatedSellProduct = { ven_id, prod_id, prod_cantidad };
    await pool.query("UPDATE tbl_ventaproducto SET ? WHERE ven_id = ?", [
      updatedSellProduct,
      ven_id,
    ]);
    res.redirect("/listSellProd");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para eliminar una venta de producto de la base de datos
export const deleteSellProduct = async (req, res) => {
  try {
    const { ven_id } = req.params;
    await pool.query("DELETE FROM tbl_ventaproducto WHERE ven_id = ?", [ven_id]);
    res.redirect("/listSellProd");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
