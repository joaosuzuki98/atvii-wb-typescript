/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'; // Certifique-se de importar o JS do Materialize
import M from 'materialize-css';

type props = {
    tema: string,
    botoes: string[],
    seletorView: Function
};

export default class BarraNavegacao extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props);
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this);
    }

    componentDidMount() {
        // Inicializa o sidenav após o componente ser montado
        let elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }

    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>;
        } else {
            return this.props.botoes.map(valor => (
                <li key={valor}>
                    <a onClick={(e) => this.props.seletorView(valor, e)}>{valor}</a>
                </li>
            ));
        }
    }

    render() {
        let estilo = `${this.props.tema}`;
        return (
            <>
                <nav className={estilo}>
                    <div className="nav-wrapper teal darken-4">
                        <a href="#" className="brand-logo ms-3">WB</a>
                        <a href="#" data-target="mobile-menu" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            {this.gerarListaBotoes()}
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-menu">
                    {this.gerarListaBotoes()}
                </ul>
            </>
        );
    }
}
