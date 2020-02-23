import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion'

class Resultado extends Component {

    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;
        
        if (imagenes.length === 0){
            return null;
        }

        return (
            // Este div me permite llamar a <Image> tantas 
            // veces obtenga resultado
            <React.Fragment>
                <div className="col-12 p5 row">
                    {imagenes.map(imagen => (
                        <Imagen
                            key={imagen.id}
                            imagen={imagen}/>
                    ))}

                </div>
                <Paginacion 
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}/>
            </React.Fragment>
        )
    }

    render() {
        return (
            // React.Fragment evita que tenga que crear un <div>
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
        );
    }
}
export default Resultado;





