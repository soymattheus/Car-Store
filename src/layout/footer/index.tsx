import React from "react";
import styled from "styled-components";

import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaRegMap } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import carIcon from "../../assets/img/logo.png";

import "./style.css";

const Footer = () => {
  // Create a styled app bar
  const AppBar = styled.div`
    background-color: #3b3939;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3em;
  `;

  return (
    <footer>
      <div className="footer-body">
        {/* Column 1 */}
        <div className="column-1">
          <img
            src={carIcon}
            alt="Site Icon"
            style={{ width: 200, height: "auto", backgroundColor: "#000" }}
          />
          <p>
            A revenderora de seminovos ideal para você comprar o seu veículo de
            qualidade.
          </p>
        </div>
        {/* Column 2 */}
        <div className="column-2">
          <p className="title">Atendimento</p>
          <div className="link-area">
            <a className="link" style={{ marginLeft: "0px" }} href="#">
              Seg. a Sex. das 8h às 18h
            </a>
          </div>

          <div className="link-area">
            <FaWhatsapp color="#ff6600" />
            <a className="link" href="#">
              +55 79 98877-6655
            </a>
          </div>

          <div className="link-area">
            <MdOutlineMail color="#ff6600" />
            <a className="link" href="#">
              matheusveiculos@email.com
            </a>
          </div>

          <div className="link-area">
            <FaRegMap color="#ff6600" />
            <a className="link" href="#">
              Rua da Empresa, Nº 123, Bairro, Cidade
            </a>
          </div>
        </div>

        {/* Column 3 */}
        <div className="column-3">
          <p className="title">Links Sociais</p>
          <div className="link-area">
            <FaInstagram color="#ff6600" />
            <a className="link" href="#">
              Instagram
            </a>
          </div>

          <div className="link-area">
            <FaFacebook color="#ff6600" />
            <a className="link" href="#">
              Facebook
            </a>
          </div>

          <div className="link-area">
            <FaYoutube color="#ff6600" />
            <a className="link" href="#">
              Youtube
            </a>
          </div>

          <div className="link-area">
            <FaLinkedinIn color="#ff6600" />
            <a className="link" href="#">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="develop-info">
        <div>
          <p className="develop-info-text">
            Matheus Veículos 2024 &copy; Todos os direitos reservados
          </p>
        </div>

        <div>
          <p className="develop-info-text">Criado por: Matheus Tavares</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
