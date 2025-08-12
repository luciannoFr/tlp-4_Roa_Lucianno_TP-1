const originalToUpperCase = String.prototype.toUpperCase;
String.prototype.toUpperCase = function() {
    return "ESTO ESTA PROHIBIDO";
};

const restaurarToUpperCase = function() {
    String.prototype.toUpperCase = originalToUpperCase;
};

restaurarToUpperCase();
console.log("hola".toUpperCase());