import React, { Component } from "react";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      termino: 'Test'
    }
  } */

  // The code above is the same as:

  state = {
    termino: "",
    imagenes: [],
    pagina: ""
  };
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smooth", "start");
  };

  paginaAnterior = () => {
    // Leer el state de la pagina actual
    let pagina = this.state.pagina;

    // Leer si la pagina es 1, ya no ir hacia atras
    if (pagina === 1) {
      return null;
    }

    // Restar uno a la pagina actual
    pagina -= 1;

    // Agregar el combio al state

    this.setState(
      {
        pagina
      },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );

    // console.log(pagina);
  };

  paginaSiguiente = () => {
    // Leer el state de la pagina actual
    let pagina = this.state.pagina;

    // Sumar uno a la pagina actual
    pagina += 1;

    // Agregar el combio al state

    this.setState(
      {
        pagina
      },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );

    // console.log(pagina);
  };

  // This is the API information under https://pixabay.com/api/docs/
  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=13855968-283c1d69eabb43706ca5bba7a&q=${termino}&per_page=30&page=${pagina}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));

    console.log(url);

    // Puerdo hacer console.log(url); para ver en la consola como se
    // modifica el URL de busqueda

    // Utilizo "fetch" cusando tengo que obtener datos json.
    // En este caso, json es una funcion. (i.e. json())
  };

  // Set the state and callback consultarApi
  datosBusqueda = termino => {
    this.setState(
      {
        termino: termino,
        pagina: 1
      },
      () => {
        this.consultarApi(); //This is the callback
      }
    );
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Image Finder</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}
export default App;
