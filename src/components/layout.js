import React from 'react'
import Header from './header'

export function Layout({children}) {
    return (
        <div>
            <Header/>
            <h1>Layout</h1>
            {children}
        </div>
    )
}