import Vendavel from "./vendavel";

export default class Livro implements Vendavel {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number) { }
    
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
     }
}