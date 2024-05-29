import pool from "../models/database.js";

// Función para mostrar el formulario de añadir una nueva compra de material
export const showAddForm = (req, res) => {
  res.render("buyMaterials/addBuyMat.hbs");
};

// Función para añadir un compra material a la base de datos
export const addBuyMaterial = async (req, res) => {
  try {
    const { com_id, mat_id, adm_id, com_cantidad, com_fecha } = req.body;
    const newBuyMaterial = { com_id, mat_id, adm_id, com_cantidad, com_fecha };
    await pool.query("INSERT INTO tbl_compramateria SET ?", [newBuyMaterial]);
    res.redirect("/listBuyMat");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para mostrar la lista de compra materiales
export const showBuyMaterialList = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tbl_compramateria");
    res.render("buyMaterials/listBuyMat.hbs", { buyMaterials: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para mostrar el formulario de edición de un compra material
export const showEditForm = async (req, res) => {
  try {
    const { com_id } = req.params;
    const [result] = await pool.query(
      "SELECT * FROM tbl_compramateria WHERE com_id = ?",
      [com_id]
    );
    const buyMaterials = result[0];
    res.render("buyMaterials/editBuyMat.hbs", { buyMaterials });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para actualizar la información de una compra material en la base de datos
export const editBuyMaterial = async (req, res) => {
  try {
    const { com_id } = req.params;
    const { mat_id, adm_id, com_cantidad, com_fecha } = req.body;
    const updatedBuyMaterial = { com_id, mat_id, adm_id, com_cantidad, com_fecha };
    await pool.query("UPDATE tbl_compramateria SET ? WHERE com_id = ?", [
      updatedBuyMaterial,
      com_id,
    ]);
    res.redirect("/listBuyMat");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para eliminar un compra material de la base de datos
export const deleteBuyMaterial = async (req, res) => {
  try {
    const { com_id } = req.params;
    await pool.query("DELETE FROM tbl_compramateria WHERE com_id = ?", [com_id]);
    res.redirect("/listBuyMat");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
