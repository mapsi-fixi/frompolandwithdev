import React from 'react';
import { Route } from "react-router-dom";
import MainMenu from './MainMenu';
import PostMenu from './PostMenu';
import styled from 'styled-components';

const NavStyled = styled.div`
    padding: 10px 0;
    display: flex;
    align-items: center;
    z-index: 10;
    width: 100%;
    background: white;

`;

const Logo = styled.div`
    
    font-family: 'UnifrakturMaguntia', cursive;
    font-size: 2em;

`;

const Menu = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 15px;
    font-size: 19px;
    text-align: center;
    line-height: 40px;
`;

export default class Navigation extends React.Component {

    render (){

        return (
            <NavStyled>
                <Menu>
                    <Route path="/post/:id" component={PostMenu} />
                    <Route path="/" exact component={MainMenu} />
                </Menu>
                <Logo>
                    The company
                </Logo>
            </NavStyled>
        );

    }

}