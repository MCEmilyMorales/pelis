const CarritoCompra = require("../index");
//[{carrito: "Factura A", producto: "xxx", price: 100, quanty: 1, descuento: %}]
describe("La clase CarritoCompra: ", () => {
  let instancia; // Declarar la instancia aquí para que esté disponible en todos los tests

  beforeEach(() => {
    instancia = new CarritoCompra(); // beforeEach es un gancho que me permite ahorrar un trabajo que debo hacer repetidamente antes de cada prueba, en este caso debo crear una nueva instancia antes de cada test.
  });
  test("Debe llamarse 'CarritoCompra' y ser una funcion ", () => {
    expect(instancia.constructor.name).toBe("CarritoCompra");
    expect(typeof CarritoCompra).toBe("function");
  });

  test("Debe tener una propiedad 'carrito' inicializada como un array vacío", () => {
    expect(instancia.carrito).toEqual([]);
  });

  test("Debe tener el metodo 'agregarProducto(producto)' y agregar productos al carrito", () => {
    const producto = { name: "Producto A", price: 100, quanty: 1 };
    instancia.agregarProducto(producto);
    expect(instancia.carrito.length).toBe(1);
    expect(instancia.carrito[0].name).toBe("Producto A");
  });

  test("Debe tener el metodo 'calcularTotal()' y calcular el total de la compra", () => {
    instancia.agregarProducto({ name: "Producto A", price: 100, quanty: 2 });
    instancia.agregarProducto({ name: "Producto A", price: 200, quanty: 1 });
    expect(instancia.calcularTotal()).toBe(400);
  });

  test("Debe tener el metodo 'aplicarDescuento(porcentaje)' y aplicar el descuento", () => {
    //descuento =subtotal-( subtotal * porcentaje% )

    instancia.agregarProducto({ name: "Producto A", price: 100, quanty: 1 });
    instancia.agregarProducto({ name: "Producto B", price: 200, quanty: 1 });

    expect(instancia.aplicarDescuento(10)).toBe(270);
  });
});
