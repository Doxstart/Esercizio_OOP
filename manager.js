class Manager extends Person{

    constructor(name, surname, employees){
        super(name, surname) 
        this.employees = employees
    }

    totalClients() {
        let clientsTot = 0;
        let employees = this.employees;
        for (let i = 0; i < employees.length; i++) {
            const element = employees[i].clients.length;
            clientsTot += element;
        }
        return clientsTot;
    }

    earnings() {
        let totEarnings = 0;
        let employees = this.employees;
        for (let i = 0; i < employees.length; i++) {
            const element = employees[i].totalEarnings();
            totEarnings += element;
        }
        return totEarnings
    }

    hire(employee) {
        this.employees.push(employee)
    }

    fire(employee) {
        this.employees.pop(employee)
    }

    toString() {
        return `${super.toString()}
Impiegati: ${this.employees.length}
Clienti: ${this.totalClients()}
Guadagni totali: ${this.earnings().toFixed(2)} €`
    }

}