/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

type props = {
    children: React.ReactNode
    title: string
}

export default class MainContainer extends Component<props> {
    constructor(props: props) {
        super(props)
    }
    render() {
        const { children, title } = this.props
        return (
            <div className="w-[95%] mx-auto mt-6">
                <h2 className="text-5xl font-bold mb-4">{title}</h2>
                {children}
            </div>
        )
    }
}