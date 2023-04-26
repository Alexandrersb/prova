export class Imovel {

  constructor(id, locador, endereco, estaLocado, foto, tipo, valorAluguel, valorCondominio, numQuarto, numBanheiro) {
    this.id = id;
    this.locador = locador;
    this.endereco = endereco;
    this.estaLocado = estaLocado;
    this.foto = foto;
    this.tipo = tipo;
    this.valorAluguel = valorAluguel;
    this.valorCondominio = valorCondominio;
    this.numBanheiro = numBanheiro;
    this.numQuarto = numQuarto;
  }

  id;
  locador;
  endereco;
  estaLocado;
  foto;
  tipo;
  valorAluguel;
  valorCondominio;
  numQuarto;
  numBanheiro;

}