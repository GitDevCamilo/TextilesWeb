import pool from "../models/database.js";

// Función para mostrar el formulario de añadir una venta
export const showAddForm = (req, res) => {
  res.render("sell/addSell.hbs");
};

// Función para añadir una venta a la base de datos
export const addSell = async (req, res) => {
  try {
    const { ven_id, ven_fecha, clie_id, adm_id, ven_estado } = req.body;
    const newSell = { ven_id, ven_fecha, clie_id, adm_id, ven_estado };
    await pool.query("INSERT INTO tbl_venta SET ?", [newSell]);
    res.redirect("/listSell");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para mostrar la lista de ventas
export const showSellList = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tbl_venta");
    res.render("sell/listSell.hbs", { sell: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para mostrar el formulario de edición de una venta
export const showEditForm = async (req, res) => {
  try {
    const { ven_id } = req.params;
    const [result] = await pool.query(
      "SELECT * FROM tbl_venta WHERE ven_id = ?",
      [ven_id]
    );
    const sell = result[0];
    res.render("sell/editSell.hbs", { sell });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para actualizar la información de una venta en la base de datos
export const editSell = async (req, res) => {
  try {
    const { ven_id } = req.params;
    const { ven_fecha, clie_id, adm_id, ven_estado } = req.body;
    const updatedSell = { ven_id, ven_fecha, clie_id, adm_id, ven_estado };
    await pool.query("UPDATE tbl_venta SET ? WHERE ven_id = ?", [
      updatedSell,
      ven_id,
    ]);
    res.redirect("/listSell");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para eliminar una venta de la base de datos
export const deleteSell = async (req, res) => {
  try {
    const { ven_id } = req.params;
    await pool.query("DELETE FROM tbl_venta WHERE ven_id = ?", [ven_id]);
    res.redirect("/listSell");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
