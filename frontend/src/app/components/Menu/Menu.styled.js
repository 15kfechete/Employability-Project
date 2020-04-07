// Menu.styled.js
import styled from 'styled-components'

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #8fc99d;
  height: 100vh;
  text-align: right;
  padding: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: 'translateX(-100%)';
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  @media (max-width: 400px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 400px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: gray;
    }
  }
`
