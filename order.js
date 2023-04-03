class Order {

    constructor(product, quantity, uPrice){
        this.product = product;
        this.quantity = quantity;
        this.uPrice = uPrice;
    }


    getTotalPrice(){
         return this.quantity * this.uPrice;
    }

    toString(){
        return `Prodotto: ${this.product}
Quantità: ${this.quantity}
Costo Unitario: ${this.uPrice.toFixed(2)}€
Costo Totale: ${this.getTotalPrice().toFixed(2)}€`
    }

}