## Análisis final (teórico)
### Responder lo siguiente:

¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?
¿Cuáles son las ventajas de usar getters y setters?
¿Qué problemas pueden surgir al modificar prototipos nativos como String?
Teniendo en cuenta un objeto personPrototype que contiene un método greet, ¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar Object.assign?

---

### Dif. entre funciones constructoras y clases

las funciones constructoras son la forma vieja de crear objetos en JS donde se usa `function` + `prototype`, en cambio, las clases (`class`) son la forma moderna, más parecida a otros lenguajes.

**ventajas constructoras:** flexibles, ahorran memoria, sirven para codigo de antes.
**desventajas:** se ven desordenadas, no hay privados sin trucos.

**ventajas clases:** mas claras, soportan privados (`#`), mas ordenado, facil de escalar.
**desventajas:** pueden confundir si venis de otros lenguajes, no sirven en codigo muy antiguo.

---

### getters y setters

sirven para controlar como se accede o cambia una propiedad, en nuestro caso, usamos `get saldo` para mostrar el saldo, pero **no dejamos cambiarlo directamente** (sin `set` publico), sirve para validar cosas (ej: que no haya saldo negativo) y evitar que lo cambien desde afuera.

---

### modificar prototipos nativos

no es buena idea tocar cosas como `String.prototype.toUpperCase` porque podes romper todo sin darte cuenta, puede causar errores raros o que otras cosas dejen de andar, agregar cosas como `concatenarPalabra` también puede traer problemas si justo otro código usa el mismo nombre.

---

### Diferencia entre asignar métodos directo vs. Object.assign

podes hacer `CuentaBancaria.prototype.metodo = ...` o usar `Object.assign(...)` y pasarle varios de una, asignar directo es más claro si es 1 o 2 metodos y `Object.assign` es más cómodo si tenés muchos, este ahorra líneas y queda ordenado.


