import React from "react";
import styled from "styled-components";

import "./style.css";

import { Button } from "../../components/Button";

const Header = () => {
  // Create a styled app bar
  const AppBar = styled.div`
    background-color: #000;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3em;
  `;

  return (
    <AppBar>
      <div>
        {/* Ícone do site à esquerda */}
        <p className="logo"
        // style={{fontFamily: 'jaini Purva', fontSize: '50px', paddingLeft: '10px'}}
        >
          Matheus Car
        </p>
      </div>

      <div>
        <Button onClick={(e) => alert("AQUI")}>Falar com Vendedor</Button>
      </div>
    </AppBar>
  );
};

export default Header;
