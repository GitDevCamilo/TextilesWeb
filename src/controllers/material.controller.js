import pool from "../models/database.js";

// Función para mostrar el formulario de añadir un material
export const showAddForm = (req, res) => {
  res.render("materiales/addMat.hbs");
};

// Función para añadir un material a la base de datos
export const addMaterial = async (req, res) => {
  try {
    const { mat_id, mat_nombre, mat_descripcion, mat_precio } = req.body;
    const newMaterial = { mat_id, mat_nombre, mat_descripcion, mat_precio };
    await pool.query("INSERT INTO tbl_materiaprima SET ?", [newMaterial]);
    res.redirect("/listMat");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para mostrar la lista de materials
export const showMaterialList = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tbl_materiaprima");
    res.render("materiales/listMat.hbs", { materiales: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para mostrar el formulario de edición de un material
export const showEditForm = async (req, res) => {
  try {
    const { mat_id } = req.params;
    const [result] = await pool.query(
      "SELECT * FROM tbl_materiaprima WHERE mat_id = ?",
      [mat_id]
    );
    const material = result[0];
    res.render("materiales/editMat.hbs", { material });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para actualizar la información de un material en la base de datos
export const editMaterial = async (req, res) => {
  try {
    const { mat_id } = req.params;
    const { mat_nombre, mat_descripcion, mat_precio } = req.body;
    const updatedMaterial = { mat_id, mat_nombre, mat_descripcion, mat_precio };
    await pool.query("UPDATE tbl_materiaprima SET ? WHERE mat_id = ?", [
      updatedMaterial,
      mat_id,
    ]);
    res.redirect("/listMat");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para eliminar un material de la base de datos
export const deleteMaterial = async (req, res) => {
  try {
    const { mat_id } = req.params;
    await pool.query("DELETE FROM tbl_materiaprima WHERE mat_id = ?", [mat_id]);
    res.redirect("/listMat");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
