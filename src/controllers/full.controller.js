import pool from "../models/database.js";

// Función para mostrar la lista de ganancias mensuales
export const showFullList = async (req, res) => {
  try {
    const query = `
    SELECT 
        v.ven_id, 
        p.prod_tipo Tipo, 
        v.Ven_estado Estado 
    FROM tbl_venta v 
    NATURAL JOIN tbl_ventaproducto vp 
    NATURAL JOIN tbl_producto p 
    WHERE v.Ven_estado = "Completo";
    `;
    const [result] = await pool.query(query);
    console.log(result);
    res.render("full/listFull.hbs", { full: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
