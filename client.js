class Client extends Person{

    constructor(name, surname, address, orders = []){
        super(name, surname);
        this.address = address;
        this.orders = orders;
    }
    
    addOrder(newOrder){
       return this.orders.push(newOrder);
    }

    totalOrderPrice(){
        let totalPrice = 0;
        for (let i = 0; i < this.orders.length; i++) {
            const element = this.orders[i];
            totalPrice += element.getTotalPrice();
        }
        return totalPrice;
    }

    //totalOrderPrice2(){
    //return this.orders.reduce((previous, current)=> {
    //previous + = current.totalOrderPrice();
    //return previous;
    //}, 0);    
    //}

    get multipleOrdersInString(){
        let stringRes = '';
        for (let i = 0; i < this.orders.length; i++) {
            const element = this.orders[i].toString();
            stringRes += element + '\n' + '-----------------------------------' + '\n' ;
            
        }
        return stringRes;
    }

    toString(){
        return `${super.toString()}
Indirizzo: ${this.address}
Numero Ordini: ${this.orders.length}
Spesa Totale: ${this.totalOrderPrice().toFixed(2)}€ 
Lista Ordini: 
--------------------------------------------------------------------------
${this.orders.join('\n')}\n` + 
`-------------------------------------------------------------------------`
    }

} 