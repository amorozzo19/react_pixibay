import React, { Component } from "react";

class Buscador extends Component {
  busquedaRef = React.createRef();

  obtenerDatos = e => {
    e.preventDefault();

    // Tomamos el valor del input
    const inputValue = this.busquedaRef.current.value;

    // Lo enviamos al componente principal (App)
    this.props.datosBusqueda(inputValue);
  };

  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Find Image. Example: Football"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger 
                        btn-block"
              value="Search..."
            />
          </div>
        </div>
      </form>
    );
  }
}
export default Buscador;
