var User = /** @class */ (function () {
    function User(_name, _surname, _charge, _numberCall) {
        this.name = _name;
        this.surname = _surname;
        this.charge = _charge;
        this.numberCall = _numberCall;
    }
    User.prototype.recharge = function (amountRecharge) {
        this.charge += amountRecharge;
    };
    User.prototype.call = function (minutes) {
        this.charge -= minutes * 0.2;
        this.numberCall++;
    };
    User.prototype.number404 = function () {
        return this.charge;
    };
    User.prototype.getNumberCalls = function () {
        return this.numberCall;
    };
    User.prototype.resetCalls = function () {
        this.numberCall = 0;
    };
    return User;
}());
var firstUser = new User("Ale", "Bianchi", 50, 0);
var secondUser = new User("Dan", "Rossi", 20, 2);
var thirdUser = new User("Zak", "Verdi", 40, 5);
console.log("User: ".concat(firstUser.name, " ").concat(firstUser.surname, "\nCarica: ").concat(firstUser.charge, "\u20AC\nNumero Chiamate: ").concat(firstUser.numberCall, "\n"));
console.log("User: ".concat(secondUser.name, " ").concat(secondUser.surname, "\nCarica: ").concat(secondUser.charge, "\u20AC\nNumero Chiamate: ").concat(secondUser.numberCall, "\n"));
console.log("User: ".concat(thirdUser.name, " ").concat(thirdUser.surname, "\nCarica: ").concat(thirdUser.charge, "\u20AC\nNumero Chiamate: ").concat(thirdUser.numberCall, "\n"));
console.log("");
firstUser.recharge(20);
console.log("".concat(firstUser.name, " ").concat(firstUser.surname, " ha ricaricato 20\u20AC"));
firstUser.call(10);
console.log("".concat(firstUser.name, " ").concat(firstUser.surname, " ha fatto una chiamata da 10 minuti"));
console.log("A ".concat(firstUser.name, " ").concat(firstUser.surname, " sono rimasti ").concat(firstUser.number404(), "\u20AC dopo la chiamata e ha fatto ").concat(firstUser.getNumberCalls(), " call"));
console.log("");
secondUser.recharge(20);
console.log("".concat(secondUser.name, " ").concat(secondUser.surname, " ha ricaricato 20\u20AC"));
secondUser.call(20);
console.log("".concat(secondUser.name, " ").concat(secondUser.surname, " ha fatto una chiamata da 20 minuti"));
console.log("A ".concat(secondUser.name, " ").concat(secondUser.surname, " sono rimasti ").concat(secondUser.number404(), "\u20AC dopo la chiamata e ha fatto ").concat(secondUser.getNumberCalls(), " call"));
console.log("");
thirdUser.recharge(20);
console.log("".concat(thirdUser.name, " ").concat(thirdUser.surname, " ha ricaricato 20\u20AC"));
thirdUser.call(8);
console.log("".concat(thirdUser.name, " ").concat(thirdUser.surname, " ha fatto una chiamata da 8 minuti"));
console.log("A ".concat(thirdUser.name, " ").concat(thirdUser.surname, " sono rimasti ").concat(thirdUser.number404(), "\u20AC dopo la chiamata e ha fatto ").concat(thirdUser.getNumberCalls(), " call"));
console.log("");
thirdUser.resetCalls();
console.log("".concat(thirdUser.name, " ").concat(thirdUser.surname, " ha resettato il numero chiamate"));
console.log("");
console.log("User: ".concat(firstUser.name, " ").concat(firstUser.surname, "\nCarica: ").concat(firstUser.charge, "\u20AC\nNumero Chiamate: ").concat(firstUser.numberCall, "\n"));
console.log("User: ".concat(secondUser.name, " ").concat(secondUser.surname, "\nCarica: ").concat(secondUser.charge, "\u20AC\nNumero Chiamate: ").concat(secondUser.numberCall, "\n"));
console.log("User: ".concat(thirdUser.name, " ").concat(thirdUser.surname, "\nCarica: ").concat(thirdUser.charge, "\u20AC\nNumero Chiamate: ").concat(thirdUser.numberCall, "\n"));
