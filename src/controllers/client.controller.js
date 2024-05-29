import pool from "../models/database.js";

// Función para mostrar el formulario de añadir un cliente
export const showAddForm = (req, res) => {
  res.render("clientes/addClie.hbs");
};

// Función para añadir un cliente a la base de datos
export const addClient = async (req, res) => {
  try {
    const { clie_id, clie_nombre, clie_apellido, clie_telefono } = req.body;
    const newClient = { clie_id, clie_nombre, clie_apellido, clie_telefono };
    await pool.query("INSERT INTO tbl_cliente SET ?", [newClient]);
    res.redirect("/listClie");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para mostrar la lista de clientes
export const showClientList = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT clie_id, CONCAT(clie_nombre, SPACE(1), clie_apellido) nombre, clie_telefono FROM db_textiles.tbl_cliente;"
    );
    res.render("clientes/listClie.hbs", { clientes: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para mostrar el formulario de edición de un cliente
export const showEditForm = async (req, res) => {
  try {
    const { clie_id } = req.params;
    const [result] = await pool.query(
      "SELECT * FROM tbl_cliente WHERE clie_id = ?",
      [clie_id]
    );
    const cliente = result[0];
    res.render("clientes/editClie.hbs", { cliente });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para actualizar la información de un cliente en la base de datos
export const editClient = async (req, res) => {
  try {
    const { clie_id } = req.params;
    const { clie_nombre, clie_apellido, clie_telefono } = req.body;
    const updatedCliente = {
      clie_id,
      clie_nombre,
      clie_apellido,
      clie_telefono
    };
    await pool.query("UPDATE tbl_cliente SET ? WHERE clie_id = ?", [
      updatedCliente,
      clie_id,
    ]);
    res.redirect("/listClie");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para eliminar un cliente de la base de datos
export const deleteClient = async (req, res) => {
  try {
    const { clie_id } = req.params;
    await pool.query("DELETE FROM tbl_cliente WHERE clie_id = ?", [
      clie_id,
    ]);
    res.redirect("/listClie");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
