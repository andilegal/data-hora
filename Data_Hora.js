class Data_Hora {
  constructor() {
    this._hora = document.querySelector("#hora");
    this._data = document.querySelector("#data");
    this.tempoMedio;
    this.inicialize();
  }
  inicialize() {
    this.hora = this.tempoMedio.toLocaleTimeString("pt-BR");
    setInterval(() => {
      this.hora = this.tempoMedio.toLocaleTimeString("pt-BR");
      this.data = this.tempoMedio.toLocaleDateString("short");
    }, 1000);
  }

  get data() {
    return this._data.innerHTML;
  }
  set data(valor) {
    return (this._data.innerHTML = valor);
  }

  get hora() {
    return this._hora.innerHTML;
  }
  set hora(valor) {
    return (this._hora.innerHTML = valor);
  }
  get tempoMedio() {
    return new Date();
  }
  set tempoMedio(valor) {
    return (this.tempoMedio = valor);
  }
}
window.data_hora = new Data_Hora();
