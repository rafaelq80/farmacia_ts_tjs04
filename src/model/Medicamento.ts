import { Produto } from "./Produto";

export class Medicamento extends Produto{
    
    private _generico: string;

	constructor(id: number, nome: string, tipo: number, preco: number, generico: string) {
        super(id, nome, tipo, preco) // Atributos da Classe Produto
		this._generico = generico;
	}


    /**
     * Getter generico
     * @return {string}
     */
	public get generico(): string {
		return this._generico;
	}

    /**
     * Setter generico
     * @param {string} value
     */
	public set generico(value: string) {
		this._generico = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Genérico: ${this._generico}`);
    }
}