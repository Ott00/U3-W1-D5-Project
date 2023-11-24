interface Smartphone {
  charge: number;
  numberCall: number;
}

class User implements Smartphone {
  name: string;
  surname: string;
  charge: number;
  numberCall: number;

  constructor(
    _name: string,
    _surname: string,
    _charge: number,
    _numberCall: number
  ) {
    this.name = _name;
    this.surname = _surname;
    this.charge = _charge;
    this.numberCall = _numberCall;
  }

  public recharge(amountRecharge: number): void {
    this.charge += amountRecharge;
  }

  public call(minutes: number): void {
    this.charge -= minutes * 0.2;
    this.numberCall++;
  }

  public number404(): number {
    return this.charge;
  }

  public getNumberCalls(): number {
    return this.numberCall;
  }

  public resetCalls(): void {
    this.numberCall = 0;
  }
}

const firstUser = new User("Ale", "Bianchi", 50, 0);
const secondUser = new User("Dan", "Rossi", 20, 2);
const thirdUser = new User("Zak", "Verdi", 40, 5);

console.log(`User: ${firstUser.name} ${firstUser.surname}
Carica: ${firstUser.charge}€
Numero Chiamate: ${firstUser.numberCall}
`);

console.log(`User: ${secondUser.name} ${secondUser.surname}
Carica: ${secondUser.charge}€
Numero Chiamate: ${secondUser.numberCall}
`);

console.log(`User: ${thirdUser.name} ${thirdUser.surname}
Carica: ${thirdUser.charge}€
Numero Chiamate: ${thirdUser.numberCall}
`);

console.log("");

firstUser.recharge(20);
console.log(`${firstUser.name} ${firstUser.surname} ha ricaricato 20€`);

firstUser.call(10);
console.log(
  `${firstUser.name} ${firstUser.surname} ha fatto una chiamata da 10 minuti`
);

console.log(
  `A ${firstUser.name} ${
    firstUser.surname
  } sono rimasti ${firstUser.number404()}€ dopo la chiamata e ha fatto ${firstUser.getNumberCalls()} call`
);

console.log("");

secondUser.recharge(20);
console.log(`${secondUser.name} ${secondUser.surname} ha ricaricato 20€`);

secondUser.call(20);
console.log(
  `${secondUser.name} ${secondUser.surname} ha fatto una chiamata da 20 minuti`
);

console.log(
  `A ${secondUser.name} ${
    secondUser.surname
  } sono rimasti ${secondUser.number404()}€ dopo la chiamata e ha fatto ${secondUser.getNumberCalls()} call`
);

console.log("");

thirdUser.recharge(20);
console.log(`${thirdUser.name} ${thirdUser.surname} ha ricaricato 20€`);

thirdUser.call(8);
console.log(
  `${thirdUser.name} ${thirdUser.surname} ha fatto una chiamata da 8 minuti`
);

console.log(
  `A ${thirdUser.name} ${
    thirdUser.surname
  } sono rimasti ${thirdUser.number404()}€ dopo la chiamata e ha fatto ${thirdUser.getNumberCalls()} call`
);

console.log("");

thirdUser.resetCalls();
console.log(
  `${thirdUser.name} ${thirdUser.surname} ha resettato il numero chiamate`
);

console.log("");

console.log(`User: ${firstUser.name} ${firstUser.surname}
Carica: ${firstUser.charge}€
Numero Chiamate: ${firstUser.numberCall}
`);

console.log(`User: ${secondUser.name} ${secondUser.surname}
Carica: ${secondUser.charge}€
Numero Chiamate: ${secondUser.numberCall}
`);

console.log(`User: ${thirdUser.name} ${thirdUser.surname}
Carica: ${thirdUser.charge}€
Numero Chiamate: ${thirdUser.numberCall}
`);
