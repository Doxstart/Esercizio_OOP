class Employee extends Person{

    constructor(name, surname, clients){
        super(name, surname);
        this.clients = clients;
    }

    get  clientNames(){
        let clients = this.clients;
        let stringRes = '\n';
        for (let i = 0; i < clients.length; i++) {
            const element = clients[i];
            stringRes += ' - ' + element.name + ' ' + element.surname;    
        }
        return stringRes;
    }
    
    toString(){
        return `Nome: ${this.name} ${this.surname}
Clienti: ${this.clientNames}
Guadagno totale: ${this.totalEarnings()}
Miglior cliente: 
${this.bestClient()}` 
    }


    totalEarnings() {
        let clients = this.clients;
        let result = 0;
        for (let i = 0; i < clients.length; i++) {
            const element = clients[i].totalOrderPrice;
            result += element;
        }
        return result;
    }    

    bestClient() {
        const clients = this.clients;
        let bestClient = clients[0];
        for (let i = 1; i < clients.length; i++) {
            const actualClient = clients[i];
            const bestSpent = bestClient.totalOrderPrice;
            const actualSpent = actualClient.totalOrderPrice;
            if (actualSpent > bestSpent) {
                bestClient = actualClient;
            }
        }
        return bestClient.toString();
    }

    addClient(client) {
        return this.clients.push(client)
    }

    removeClient(client) {
        return this.clients.pop(client)
    }
}