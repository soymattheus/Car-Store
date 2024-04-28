import React from "react";
import styled from "styled-components";

// import "./header.css";
import carIcon from "../../assets/img/logo.png";

import { Button } from "../../components/Button";
import { IconButton } from "../../components/IconButton";

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
        <IconButton>
          <img
            src={carIcon}
            alt="Site Icon"
            style={{ width: 100, height: 50, backgroundColor: "#000" }}
          />
        </IconButton>
      </div>

      <div>
        <Button onClick={(e) => alert("AQUI")}>Falar com Vendedor</Button>
      </div>
    </AppBar>
  );
};

export default Header;
