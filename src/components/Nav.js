import React from 'react'
import {Link} from 'gatsby'
import styled from '@emotion/styled'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;

  @media (min-width: 768px){
      padding-bottom: 0;
  }
`;

const NavLink = styled(Link)`
  color: #FFFFFF;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: 'PT Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;

  &:last-of-type{
      margin-right: 0;
  }

  &.pagina-actual{
      border-bottom: 2px solid white;
      
  }
`;

export default function Navegacion() {
    return (
        <Nav>
            <NavLink
                to={'/'}
                activeClassName='pagina-actual'
            >Inicio</NavLink>
            <NavLink 
                activeClassName='pagina-actual'
                to={'/nosotros'}
            >Nosotros</NavLink>
        </Nav>
    )
}
