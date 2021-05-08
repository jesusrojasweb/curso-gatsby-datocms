import React from 'react'
import Header from './header'
import Helmet from 'react-helmet'
import {Global, css} from '@emotion/react'

export function Layout({children}) {
    return (
        <div>
            <Global
                styles={css`
                    html{
                        font-size: 62.5%;
                    }
                    body{
                        font-size: 16px;
                        font-size: 1.6rem;
                        line-height: 1.5;
                    }
                    h1,h2,h3{
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1,h2{
                        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    }
                    h3{
                        font-family: 'PT Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    }
                    ul{
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Helmet>
                <title>Gatsby Hotel</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
            </Helmet>

            <Header/>
            <h1>Layout</h1>
            {children}
        </div>
    )
}