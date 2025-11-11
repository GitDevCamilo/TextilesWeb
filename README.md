...existing code...
# TextilesWeb — Aplicación CRUD para una microempresa textil

Descripción
- Aplicación web Node.js + Express que gestiona materiales, compras, productos, clientes y ventas.
- Plantillas con Handlebars en src/views.

Tecnologías
- Node.js, Express, express-handlebars, mysql2, morgan.
- Conexión a MySQL definida en [`pool`](src/models/database.js) ([src/models/database.js](src/models/database.js)).
- Servidor y configuración principal: [`app.listen`](src/index.js) ([src/index.js](src/index.js)).

Instalación
1. Clonar el repositorio.
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Configurar la base de datos MySQL y credenciales en [src/models/database.js](src/models/database.js).

Ejecución (modo desarrollo)
```sh
npm run dev
```

Rutas principales
- Materiales: [src/routes/material.routes.js](src/routes/material.routes.js)
- Compras de materiales: [src/routes/buyMaterial.routes.js](src/routes/buyMaterial.routes.js)
- Clientes: [src/routes/client.routes.js](src/routes/client.routes.js)
- Productos: [src/routes/product.routes.js](src/routes/product.routes.js)
- Ventas: [src/routes/sell.routes.js](src/routes/sell.routes.js)
- Ventas de producto: [src/routes/sellProduct.routes.js](src/routes/sellProduct.routes.js)
- Ganancias: [src/routes/profit.routes.js](src/routes/profit.routes.js)
- Ventas completadas: [src/routes/full.routes.js](src/routes/full.routes.js)

Controladores (ubicación)
- [src/controllers/material.controller.js](src/controllers/material.controller.js)
- [src/controllers/buyMaterial.controller.js](src/controllers/buyMaterial.controller.js)
- [src/controllers/client.controller.js](src/controllers/client.controller.js)
- [src/controllers/product.controller.js](src/controllers/product.controller.js)
- [src/controllers/sell.controller.js](src/controllers/sell.controller.js)
- [src/controllers/sellProduct.controller.js](src/controllers/sellProduct.controller.js)
- [src/controllers/profit.controller.js](src/controllers/profit.controller.js)
- [src/controllers/full.controller.js](src/controllers/full.controller.js)

Vistas (Handlebars)
- Layout principal: [src/views/layouts/main.hbs](src/views/layouts/main.hbs)
- Parciales: [src/views/partials/navigation.hbs](src/views/partials/navigation.hbs), [src/views/partials/verticalNavigation.hbs](src/views/partials/verticalNavigation.hbs), [src/views/partials/modal.hbs](src/views/partials/modal.hbs)
- Páginas principales: [src/views/index.hbs](src/views/index.hbs)
- Materiales: [src/views/materiales/listMat.hbs](src/views/materiales/listMat.hbs), [src/views/materiales/addMat.hbs](src/views/materiales/addMat.hbs), [src/views/materiales/editMat.hbs](src/views/materiales/editMat.hbs)
- Compras: [src/views/buyMaterials/listBuyMat.hbs](src/views/buyMaterials/listBuyMat.hbs), [src/views/buyMaterials/addBuyMat.hbs](src/views/buyMaterials/addBuyMat.hbs), [src/views/buyMaterials/editBuyMat.hbs](src/views/buyMaterials/editBuyMat.hbs)
- Clientes: [src/views/clientes/listClie.hbs](src/views/clientes/listClie.hbs), [src/views/clientes/addClie.hbs](src/views/clientes/addClie.hbs), [src/views/clientes/editClie.hbs](src/views/clientes/editClie.hbs)
- Productos: [src/views/products/listProd.hbs](src/views/products/listProd.hbs), [src/views/products/addProd.hbs](src/views/products/addProd.hbs), [src/views/products/editProd.hbs](src/views/products/editProd.hbs)
- Ventas: [src/views/sell/listSell.hbs](src/views/sell/listSell.hbs), [src/views/sell/addSell.hbs](src/views/sell/addSell.hbs), [src/views/sell/editSell.hbs](src/views/sell/editSell.hbs)
- Ventas de producto: [src/views/sellProducts/listSellProd.hbs](src/views/sellProducts/listSellProd.hbs), [src/views/sellProducts/addSellProd.hbs](src/views/sellProducts/addSellProd.hbs), [src/views/sellProducts/editSellProd.hbs](src/views/sellProducts/editSellProd.hbs)
- Ganancias: [src/views/profits/listProfits.hbs](src/views/profits/listProfits.hbs)
- Ventas completadas: [src/views/full/listFull.hbs](src/views/full/listFull.hbs)

Archivos importantes
- [package.json](package.json)
- [src/index.js](src/index.js)
- [src/models/database.js](src/models/database.js)
- Rutas: [src/routes/material.routes.js](src/routes/material.routes.js), [src/routes/buyMaterial.routes.js](src/routes/buyMaterial.routes.js), [src/routes/client.routes.js](src/routes/client.routes.js), [src/routes/product.routes.js](src/routes/product.routes.js), [src/routes/sell.routes.js](src/routes/sell.routes.js), [src/routes/sellProduct.routes.js](src/routes/sellProduct.routes.js), [src/routes/profit.routes.js](src/routes/profit.routes.js), [src/routes/full.routes.js](src/routes/full.routes.js)
- Controladores: ver sección Controladores arriba
- Vistas: ver sección Vistas arriba
- Carpeta pública: [public/](public/)

Contribuciones
- Abrir un issue o enviar un pull request. Seguir convenciones de código existentes y agregar pruebas si aplica.

Licencia
- Licencia ISC (ver [package.json](package.json)).

Colaboradores
- Añade aquí los nombres de los colaboradores. Ejemplo:
  - Juan Manuel (autor)
  - Colaborador 1 <email@example.com>
  - Colaborador 2 <email@example.com>

...existing code...
