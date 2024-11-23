/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react"
import 'materialize-css/dist/css/materialize.min.css'

type Props = {
    tema: string
    titulo?: string
    itens: string[]
}

export default class ListaGenerica extends Component<Props> {
    componentDidMount() {
        M.FormSelect.init(document.querySelectorAll('select'))
    }

    componentWillUnmount() {
        const selects = document.querySelectorAll('select')
        selects.forEach(select => {
            const instance = M.FormSelect.getInstance(select)
            if (instance) instance.destroy()
        })
    }

    render() {
        let estilo = `collection-item active ${this.props.tema}`
        const { itens, titulo } = this.props

        return (
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-2xl">{titulo}</h2>
                    <div className="flex gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <select
                                className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" disabled selected>
                                    Filtrar por
                                </option>
                                <option value="opcao1">Opção 1</option>
                                <option value="opcao2">Opção 2</option>
                                <option value="opcao3">Opção 3</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="collection max-h-[350px] overflow-y-auto">
                    {itens.map((item, index) => (
                        <div
                            key={index}
                            className={`hover:bg-slate-300 collection-item flex justify-between items-center ${
                                item === itens[1] ? estilo : ""
                            }`}
                        >
                            <span>{item}</span>
                            <div className="flex gap-2">
                                <i className="fas fa-pencil-alt text-blue-500 cursor-pointer"></i>
                                <i className="fas fa-trash text-red-500 cursor-pointer"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
