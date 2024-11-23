import React, { Component } from 'react'

type comparativoProps = {
    tipo: string
}

export default class Comparativo extends Component<comparativoProps> {
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
        const { tipo } = this.props
        return (
            <div className='bg-slate-200 p-4 rounded-s-3xl min-h-[370px] border-l-8 border-green-500'>
                <div className='flex sm:flex-row flex-col justify-between sm:items-center'>
                    <div>
                        <h3 className="mb-2 text-xl capitalize">
                            {tipo}
                        </h3>
                        <h3 className='text-3xl font-bold mb-1'>Mês atual</h3>
                        <div className='flex items-baseline'>
                            <p className='text-5xl'>235 {tipo}</p>
                            <p className='text-xl text-green-600 font-bold ms-4'>+74%</p>
                        </div>
                        <p>Mês anterior: 135 {tipo}</p>
                    </div>
                    <div>
                        <p className='sm:mt-0 mt-3'>Valor arrecadado</p>
                        <h3 className='text-4xl font-extrabold text-green-600'>R$12.102,20</h3>
                    </div>
                </div>

                <select
                    className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                >
                    <option value="" disabled selected>
                        Escolha o gênero
                    </option>
                    <option value="opcao1">Masculino</option>
                    <option value="opcao2">Feminino</option>
                    <option value="opcao3">Outro</option>
                    <option value="opcao3">Qualquer um</option>
                </select>
                <div className='flex justify-between mt-6 clientes-container'>
                    <div className='flex flex-col items-center  p-4 rounded-xl bg-green-400'>
                        <p className='text-xl'>1º em {tipo}</p>
                        <p className='text-lg'>Serviço 1</p>
                        <p className='mt-1'>101 {tipo}</p>
                    </div>
                    <div className='flex flex-col items-center  p-4 rounded-xl bg-green-400'>
                        <p className='text-xl'>2º em {tipo}</p>
                        <p className='text-lg'>Produto 3</p>
                        <p className='mt-1'>42 {tipo}</p>
                    </div>
                    <div className='flex flex-col items-center p-4 rounded-xl bg-green-400'>
                        <p className='text-xl'>3º em {tipo}</p>
                        <p className='text-lg'>Produto 33</p>
                        <p className='mt-1'>12 {tipo}</p>
                    </div>
                </div>
            </div>
        )
    }
}
