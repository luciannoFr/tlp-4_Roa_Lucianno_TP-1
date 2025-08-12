function CuentaBancaria(titular, saldoInicial) {
  this.titular = titular;
  this.saldo = saldoInicial;
}

const cuentaBancariaPrototype = {
  depositar(monto) {
    this.saldo += monto;
    return `Depósito exitoso. Nuevo saldo: $${this.saldo}`;
  },
  
  extraer(monto) {
    if (monto > this.saldo) {
      return "Fondos insuficientes";
    }
    this.saldo -= monto;
    return `Extracción exitosa. Nuevo saldo: $${this.saldo}`;
  },
  
  consultarSaldo() {
    return `Saldo actual: $${this.saldo}`;
  }
};

Object.assign(CuentaBancaria.prototype, cuentaBancariaPrototype);

const cuenta = new CuentaBancaria("Marchelo", 1000);
console.log(cuenta.depositar(500));
console.log(cuenta.extraer(200));
console.log(cuenta.consultarSaldo());