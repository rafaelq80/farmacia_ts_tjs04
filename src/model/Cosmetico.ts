import { Produto } from "./Produto";

export class Cosmetico extends Produto{
    
    private _fragancia: string;

	constructor(id: number, nome: string, tipo: number, preco: number, fragancia: string) {
        super(id, nome, tipo, preco) // Atributos da Classe Produto
		this._fragancia = fragancia;
	}


    /**
     * Getter fragancia
     * @return {string}
     */
	public get fragancia(): string {
		return this._fragancia;
	}

    /**
     * Setter fragancia
     * @param {string} value
     */
	public set fragancia(value: string) {
		this._fragancia = value;
	}


    public visualizar(): void {
        super.visualizar();
        console.log(`Fragância: ${this._fragancia}`);
    }
}