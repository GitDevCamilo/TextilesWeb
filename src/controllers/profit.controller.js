import pool from "../models/database.js";

// Función para mostrar la lista de ganancias mensuales
export const showProfitsList = async (req, res) => {
  try {
    const query = `
      SELECT YEAR(v.ven_fecha) AS Año, 
             DATE_FORMAT(v.ven_fecha, '%M') AS Mes, 
             COUNT(v.ven_id) AS Total_Ventas, 
             p.prod_tipo AS Tipo, 
             SUM(vp.prod_cantidad * p.prod_precioMayor) AS Ganancias 
      FROM tbl_venta v 
      NATURAL JOIN tbl_ventaproducto vp 
      NATURAL JOIN tbl_producto p 
      GROUP BY Año, Mes, p.prod_tipo 
      ORDER BY Año, STR_TO_DATE(Mes, '%M');
    `;
    const [result] = await pool.query(query);
    console.log(result);
    res.render("profits/listProfits.hbs", { profits: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
