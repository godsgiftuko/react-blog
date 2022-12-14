import { Icon } from '@iconify/react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { typography, colorPalette } from '../../theme';

const { size, weight } = typography;
const footer = 'footer';

export const Nav = styled.nav`
  background: ${ prop => prop.noBackground ? 'transparent' : '#000' };
  height: 100px;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  ${
    prop => prop.position == footer
    ? `
      padding: 0.5rem 0;
    `
    : `padding: 0.5rem 25px;`
  }

  // @media screen and (max-width: 425px) {
  //   padding: 0.5rem 25px;
  // }
`;

export const NavLink = styled(Link)`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  flex-direction: ${prop => prop.direction || null};
   transition: width 600ms ease;

  &.active {
    color: #FF00F7;
  }

  ${
    prop =>prop.hasbackground 
    ? `
      background: var(--blue);
      border-radius: 51px;
      padding: 10px 22px;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
    `
    : null
  };

   ${

    prop => prop.position == footer
    ? `
      padding: 15px 10px;
      
      @media screen and (max-width: 425px) {
        padding: 15px 20px;
        
      }
    `
    : null
  }

  @media screen and (min-width: 768px) {
    ${
      prop => prop.click
      ? `
        padding: 30px;

      ` 
      : null
    }
  }
`;

export const NavIcon = styled(Icon)`
  display: block;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  opacity: 70%;
    &:hover {
      opacity: 100%;
    }

`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 0 24px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    margin: 0;
     padding: ${prop => prop.footer == footer ? '15px 0' : '15px'};
     font-size: 20px;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
    ${
      prop => prop.click
      ?
        `
          position: fixed;
          z-index: 1000;
          display: flex; 
          flex-direction: column;
          height: calc(100% - 100px);
          width: 100%;
          left: 0;
          bottom: 0;
          background: black;
          padding: 50px 0;
        ` 
      : null
    }
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 51px;
  background: #271AC1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  text-decoration: none;

  /* Second Nav */
   @media screen and (min-width: 768px) {
      // margin-left: 24px;
   }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #1C0C28;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  text-decoration: none;
  column-gap: 75px;
  padding: 0 0 15px;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const FooterListItem = styled(Link)`
  display: flex;
  color: #ffff;
  margin: 5px 0;
  opacity: 70%;
  font-size: size.small18;
  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 100%;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;