import React from "react";
import { useNavigate } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

import { Select } from "../../components/Select/Select";
import Banner from "../../components/Banner";

import LogoCarro from "../../assets/img/BMW.png";

import "./style.css";

import {
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "../../components/SearchInput";

import { Card } from "../../components/Card";
import { GridContainer } from "../../components/Grid";
import { Pagination } from "../../components/Pagination";

import { useScreenSize } from "../../hooks/screenSize";
import { useSearchCar } from "../Providers/searchCar";

interface CardGridProps {
  id: number;
  img: string;
  marca: string;
  modelo: string;
  ano: string;
  km: number;
  cambio: string;
  valor: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  child?: React.ReactNode;
}

interface BrandProps {
  id: string;
  marca: string;
  img: string;
}

const SearchCar = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet, isLaptop, isDesktop, is4k } = useScreenSize();
  const {
    carsDataDisplayed,
    carBrands,
    filterYear,
    setFilterYear,
    filterPrice,
    setFilterPrice,
    filterKm,
    setFilterKm,
    handleSetMouse,
    handleSetTouch,
    handleSelectBrand,
    openSideBar,
    setOpenSideBar,
    orderOption,
    currentPage,
    setCurrentPage,
    handleSortCars,
    handleGetCars,
    handleSearchByYear,
    handleSelectCar,
  } = useSearchCar();

  const itemsPerPage = isMobile ? 2 : 8;
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

  React.useEffect(() => {
    handleGetCars({ year: "2021", brand: "tesla" });
  }, []);

  return (
    <body>
      <Banner />
      <div className="main">
        {/* Side bar */}
        {(!isMobile || openSideBar) && (
          <div className="sidebar">
            {/* Icon */}
            <div className="close-side-bar-area-button">
              <button
                className="close-side-bar-button"
                onClick={(e) => setOpenSideBar(false)}
              >
                <RiCloseLine />
              </button>
            </div>

            <h2 className="side-bar-title">Filtre sua Pesquisa</h2>

            {/* Por Marca */}
            <h3 className="filter-categoty-title">Marca</h3>
            <div className="car-brand-area">
              {carBrands.map((item: BrandProps) => (
                <div
                  key={item.marca}
                  className="car-brand-icon-area"
                  onClick={(e) => handleSelectBrand(item.id)}
                >
                  <img
                    className="car-brand-icon"
                    src={item.img}
                    alt="Logo da marca"
                  />
                </div>
              ))}
            </div>

            {/* Por Ano */}
            <h3 className="filter-categoty-title">Ano</h3>
            <div className="input-filter-area">
              <SearchContainer>
                {/* Campo de pesquisa */}
                <SearchInput
                  type="text"
                  placeholder="Ex: 2024"
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                />
                {/* Ícone de pesquisa */}
                <SearchIcon onClick={(e) => handleSearchByYear()} />
              </SearchContainer>
            </div>

            {/* Por Preço */}
            <h3 className="filter-categoty-title">Preço</h3>
            <div>
              <div className="input-filter-area">
                <input
                  className="input-range"
                  type="range"
                  min={0}
                  max={300000}
                  step={1000}
                  value={filterPrice}
                  onChange={(e) => setFilterPrice(Number(e.target.value))}
                  onMouseUp={(e) => handleSetMouse(e)}
                  onTouchEnd={(e) => handleSetTouch(e)}
                />
              </div>
              <p style={{ color: "#fff" }}>
                Até: R${" "}
                {(filterPrice / 1000).toLocaleString("en", {
                  minimumFractionDigits: 3,
                })}
              </p>
            </div>

            {/* Quilometragem */}
            <h3 className="filter-categoty-title">Quilometragem</h3>
            <div>
              <div className="input-filter-area">
                <input
                  className="input-range"
                  type="range"
                  min={0}
                  max={200000}
                  step={1000}
                  value={filterKm}
                  onChange={(e) => setFilterKm(Number(e.target.value))}
                  onMouseUp={(e) => handleSetMouse(e)}
                  onTouchEnd={(e) => handleSetTouch(e)}
                />
              </div>
              <p style={{ color: "#fff" }}>
                Até:{" "}
                {(filterKm / 1000).toLocaleString("en", {
                  minimumFractionDigits: 3,
                })}{" "}
                Km
              </p>
            </div>
          </div>
        )}

        <div className="cars-area">
          <div className="cars-area-buttons">
            {/* Abre apenas em telas pequenas */}
            <button
              className="open-side-bar-button"
              onClick={(e) => setOpenSideBar(true)}
            >
              <FaBars />
            </button>

            <div>
              <Select
                id="mySelect"
                value={orderOption}
                onChange={(e) => handleSortCars(e.target.value)}
              >
                <option value="" disabled hidden>
                  Ordenar..
                </option>

                {/* Outras opções */}
                <option value="price">Valor</option>
                <option value="year">Ano</option>
                <option value="km">Quilômetros</option>
              </Select>
            </div>
          </div>

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
                <div style={{ height: "0px", margin: "0px" }}></div>
                <div style={{ height: "0px", margin: "0px" }}></div>
                <div style={{ height: "0px", margin: "0px" }}></div>
                <div style={{ height: "0px", margin: "0px" }}></div>
                <div style={{ height: "0px", margin: "0px" }}></div>
              </GridContainer>
              <Pagination pageCount={pageCount} onPageChange={onPageChange} />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SearchCar;
