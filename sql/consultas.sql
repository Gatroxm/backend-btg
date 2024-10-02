/*
    1. Obtener los nombres de los clientes que tienen inscrito algún producto disponible solo en las sucursales que visitan.
*/

SELECT DISTINCT c.nombre
FROM Cliente c
JOIN Inscripción i ON c.id = i.idCliente
JOIN Disponibilidad d ON i.idProducto = d.idProducto
JOIN Visitan v ON c.id = v.idCliente AND d.idSucursal = v.idSucursal;

/**
    2. Obtener el total de productos disponibles en cada sucursal.
*/

SELECT s.nombre AS Sucursal, COUNT(d.idProducto) AS TotalProductos
FROM Sucursal s
LEFT JOIN Disponibilidad d ON s.id = d.idSucursal
GROUP BY s.id, s.nombre;

/**
    3. Obtener la lista de clientes y los productos que han inscrito.
*/

SELECT c.nombre AS Cliente, p.nombre AS Producto
FROM Cliente c
JOIN Inscripción i ON c.id = i.idCliente
JOIN Producto p ON i.idProducto = p.id;
