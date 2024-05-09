import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./style.css";

import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

import { useScreenSize } from "../../hooks/screenSize";
import { useSearchCar } from "../Providers/searchCar";

import { ImageWrapper } from "../../components/ImageWrapper";
import { Chip } from "../../components/Chip";
import { Card } from "../../components/Card";
import { GridContainer } from "../../components/Grid";
import { Pagination } from "../../components/Pagination";
import { Button } from "../../components/Button";

import { CardGridProps, ICarImages, IChip } from "../../model/interfaces";

const cars: ICarImages[] = [
  {
    id: "1",
    url: "https://tecmania.com.br/wp-content/uploads/2024/02/Magnifico-Ford-Fusion-2024-sobe-a-regua-dos-sedans-com-inovacao-e-design-830x450.jpg.webp",
  },
  {
    id: "2",
    url: "https://cdn.motor1.com/images/mgl/rv6v6/s1/volkswagen-golf-8-gti-clubsport-2021.jpg",
  },
  {
    id: "3",
    url: "https://cdn.motor1.com/images/mgl/g4JXpN/s3/avaliacao-fiat-argo-trekking-cvt-2023-dianteira.jpg",
  },
  {
    id: "4",
    url: "https://cdn.motor1.com/images/mgl/P3gRkX/s1/jeep-compass-2024---europa.webp",
  },
  {
    id: "5",
    url: "https://quatrorodas.abril.com.br/wp-content/uploads/2024/01/03_COROLLA_2024_1FLP4760.jpg?quality=70&strip=info",
  },
  {
    id: "6",
    url: "https://cdn.motor1.com/images/mgl/rv6v6/s1/volkswagen-golf-8-gti-clubsport-2021.jpg",
  },
];

const equipamentos: IChip[] = [
  { text: "Air Bag" },
  { text: "Alarme" },
  { text: "Ar Condicionado" },
  { text: "Farol de Led" },
  { text: "Farol de Milha" },
  { text: "Freios ABS" },
  { text: "Air Bag" },
  { text: "Alarme" },
  { text: "Ar Condicionado" },
  { text: "Farol de Led" },
  { text: "Farol de Milha" },
  { text: "Freios ABS" },
  { text: "Air Bag" },
  { text: "Alarme" },
  { text: "Ar Condicionado" },
  { text: "Farol de Led" },
  { text: "Farol de Milha" },
  { text: "Freios ABS" },
  { text: "Air Bag" },
  { text: "Alarme" },
  { text: "Ar Condicionado" },
  { text: "Farol de Led" },
  { text: "Farol de Milha" },
  { text: "Freios ABS" },
  { text: "Alarme" },
  { text: "Ar Condicionado" },
  { text: "Farol de Led" },
  { text: "Farol de Milha" },
  { text: "Freios ABS" },
  { text: "Air Bag" },
  { text: "Alarme" },
  { text: "Ar Condicionado" },
  { text: "Farol de Led" },
  { text: "Farol de Milha" },
  { text: "Freios ABS" },
];

const CarDetail: React.FC = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet, isLaptop, isDesktop, is4k } = useScreenSize();
  const { carsDataDisplayed, currentPage, setCurrentPage } = useSearchCar();

  const itemsPerPage = isMobile ? 1 : 4;
  const pageCount =
    carsDataDisplayed !== undefined
      ? Math.ceil(carsDataDisplayed?.length / itemsPerPage)
      : 1;

  const onPageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleData = carsDataDisplayed?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const mapStyles = {
    height: "15em",
    width: "90%",
  };

  const defaultCenter = {
    lat: -10.969151,
    lng: -37.054983,
  };

  return (
    <body>
      <ImageWrapper images={cars} />
      <div className="main-car-details">
        {/* Left */}
        <div className="left-details">
          <p className="car-title">
            <span className="car-brand">Ford</span>{" "}
            <span className="car-model">Fusion</span>
          </p>
          <p className="car-version">Fusion SEL 2.5 16v A/T</p>

          {/* Informações principais */}
          <div className="car-informations">
            <div className="car-informations-columns">
              <div>
                <p className="informationTitle">Ano</p>
                <p className="information">2021/2022</p>
              </div>
              <div>
                <p className="informationTitle">Combustível</p>
                <p className="information">Gasolina</p>
              </div>
            </div>
            <div className="car-informations-columns">
              <div>
                <p className="informationTitle">Km</p>
                <p className="information">132.000 Km</p>
              </div>
              <div>
                <p className="informationTitle">Placa</p>
                <p className="information">***3</p>
              </div>
            </div>
            <div className="car-informations-columns">
              <div>
                <p className="informationTitle">Câmbio</p>
                <p className="information">Automático</p>
              </div>
              <div>
                <p className="informationTitle">Cor</p>
                <p className="information">Prata</p>
              </div>
            </div>
          </div>

          <hr />

          {/* Equipamentos */}
          <div>
            <p className="details-area-title">Equipamentos</p>
            <div>
              {equipamentos?.map((item) => (
                <Chip text={item.text} />
              ))}
            </div>
          </div>

          <hr />

          {/* Mais informações do veículo */}
          <div>
            <p className="details-area-title">Mais informações do veículo</p>
            <p className="car-more-information">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab qui,
              eum recusandae odit molestiae ipsa quisquam nesciunt earum,
              dignissimos numquam harum? Dolorum aspernatur pariatur ratione
              molestiae ea incidunt ipsa asperiores.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="right-details">
          <p className="car-price">R$ 45.000,00</p>
          <p className="talk-to-saller">Fale com nossos vendedores</p>
          <div className="button-area">
            <Button>WhatsApp</Button>
          </div>
          <p className="call-us">Ligar para nós</p>
          <div className="button-area">
            <Button black>Ligar</Button>
          </div>
          <p className="share-car">Compartilhar veículo</p>
          <div className="social-midia-icon-area">
            <FaSquareWhatsapp color="#075E54" size={40} />
            <FaSquareInstagram color="#E4405F" size={40} />
            <FaSquareFacebook color="#1877F2" size={40} />
          </div>

          <div className="map-area">
            <div>
              <p className="location-title">Localização</p>
            </div>
            <div className="map">
              <LoadScript googleMapsApiKey="api-key">
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={13}
                  center={defaultCenter}
                />
              </LoadScript>
            </div>
            <div>
              <p className="location-address">
                Endereço: Rua da loja, Nº 2100. Aracaju, SE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Similar cars */}
      <div className="similar-cars-area">
        <p className="similar-cars-area-title">
          Você também pode se interessar
        </p>
        <div>
          <div className="cars-grid">
            <GridContainer>
              {visibleData?.map((item: CardGridProps) => (
                <Card
                  key={item.id}
                  onClick={(e: void) => {
                    navigate("/detalhes");
                  }}
                >
                  <div className="img-container">
                    <img
                      className="card-image"
                      src={item.img}
                      alt="Card de exibição de carro"
                    />
                  </div>
                  <div className="body">
                    <p>
                      <span className="car-brand">{item.marca}</span>{" "}
                      <span className="car-model">{item.modelo}</span>
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "-20px 0px",
                      }}
                    >
                      <div>
                        <p className="informationTitle">Ano</p>
                        <p className="information">{item.ano}</p>
                      </div>

                      <div>
                        <p className="informationTitle">KM</p>
                        <p className="information">
                          {(item.km / 1000).toLocaleString("en", {
                            minimumFractionDigits: 3,
                          })}
                        </p>
                      </div>

                      <div>
                        <p className="informationTitle">Câmbio</p>
                        <p className="information">{item.cambio}</p>
                      </div>
                    </div>
                    <h2 className="price">
                      R${" "}
                      {(item.valor / 1000).toLocaleString("en", {
                        minimumFractionDigits: 3,
                      })}
                    </h2>
                  </div>
                </Card>
              ))}
            </GridContainer>
            <Pagination pageCount={pageCount} onPageChange={onPageChange} />
          </div>
        </div>
      </div>
    </body>
  );
};

export default CarDetail;
