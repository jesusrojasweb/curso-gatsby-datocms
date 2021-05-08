import React from 'react'
import {Link} from 'gatsby'

export default function Navegacion() {
    return (
        <nav>
            <Link to={'/'}>Inicio</Link>
            <Link to={'/nosotros'}>Nosotros</Link>
        </nav>
    )
}
