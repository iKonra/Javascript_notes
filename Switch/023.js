const metodoPago = "Bitcoin";

switch(metodoPago) {
    case "Tarjeta":
        console.log("Pagaste con tarjeta");
        break;
    case "Bitcoin":
        console.log("Pagaste con BTC");
        break;
    default:
        console.log("Paga raton");
        break;
}
