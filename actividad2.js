class CuentaBancariaPremium {
    #saldo;
    
    constructor(titular, saldoInicial) {
      this.titular = titular;
      if (saldoInicial < 0) {
        throw new Error("no puede tener saldo inicial negativo");
      }
      this.#saldo = saldoInicial;
    }
    
    get saldo() {
      return this.#saldo;
    }
    
    set #saldoPrivado(nuevoSaldo) {
      if (nuevoSaldo < 0) {
        throw new Error("el saldo no puede ser negativo");
      }
      this.#saldo = nuevoSaldo;
    }
    
    depositar(monto) {
      if (monto <= 0) {
        throw new Error("el monto a depositar tiene que ser positivo");
      }
      this.#saldoPrivado = this.saldo + monto;
      return `Depósito exitoso. Nuevo saldo: $${this.saldo}`;
    }
    
    extraer(monto) {
      if (monto <= 0) {
        throw new Error("el monto a extraer tiene que ser positivo");
      }
      if (monto > this.saldo) {
        return "Fondos insuficientes";
      }
      this.#saldoPrivado = this.saldo - monto;
      return `Extracción exitosa. Nuevo saldo: $${this.saldo}`;
    }
    
    consultarSaldo() {
      return `Saldo actual: $${this.saldo}`;
    }
}

const cuentaClase = new CuentaBancariaPremium("Hemilia", 2000);
console.log(cuentaClase.depositar(1000));
console.log(cuentaClase.extraer(500));
cuentaClase.saldo= 1200;
console.log(cuentaClase.consultarSaldo());