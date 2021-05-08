import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const ImageBackground = styled(BackgroundImage)`
    height: 700px;

`

export default function ImagenHotel() {

    const {image} = useStaticQuery(graphql`
        query{
            image: file(relativePath: {eq: "8.jpg"}){
                childImageSharp{
                    fluid(quality: 90, maxWidth: 1920){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    const imageData = image.childImageSharp.fluid

    return (
        <ImageBackground tag="section" fluid={imageData} >

        </ImageBackground>
    )
}