import React from "react";
import axios from "axios";

import LogoCarro from "../../assets/img/BMW.png";

interface CarProps {
  id: number;
  img: string;
  marca: string;
  modelo: string;
  ano: string;
  km: number;
  cambio: string;
  valor: number;
}

interface BrandProps {
  id: string;
  marca: string;
  img: string;
}

interface GetCarsProps {
  year: string | undefined;
  brand: string | undefined;
}

interface SearchCarContextType {
  carsData: CarProps[] | undefined;
  carsDataDisplayed: CarProps[] | undefined;
  carBrands: BrandProps[];
  filterYear: string | undefined;
  setFilterYear: React.Dispatch<React.SetStateAction<string | undefined>>;
  filterPrice: number;
  setFilterPrice: React.Dispatch<React.SetStateAction<number>>;
  filterKm: number;
  setFilterKm: React.Dispatch<React.SetStateAction<number>>;
  handleSetMouse: React.MouseEventHandler<HTMLInputElement>;
  handleSetTouch: React.TouchEventHandler<HTMLInputElement>;
  handleSelectBrand: (param: string) => void;
  openSideBar: boolean;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  orderOption: string;
  setOrderOption: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  handleSortCars: (param: string) => void;
  handleGetCars: (param: GetCarsProps) => Promise<void>;
  handleSearchByYear: () => void;
}

const SearchCarContext = React.createContext<SearchCarContextType | undefined>(
  undefined
);
SearchCarContext.displayName = "Contexto da tela de busca.";

interface SearchCarProviderType {
  children: React.ReactNode;
}

export function SearchCarProvider({ children }: SearchCarProviderType) {
  const [filterYear, setFilterYear] = React.useState<string | undefined>();
  const [filterPrice, setFilterPrice] = React.useState<number>(300000);
  const [filterKm, setFilterKm] = React.useState<number>(200000);
  const [openSideBar, setOpenSideBar] = React.useState<boolean>(false);
  const [orderOption, setOrderOption] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [carsData, setCarsData] = React.useState<CarProps[] | undefined>([]);
  const [carsDataDisplayed, setCarsDataDisplayed] = React.useState<
    CarProps[] | undefined
  >([]);

  const carBrands: BrandProps[] = [
    { id: "1", marca: "Mercedes1", img: LogoCarro },
    { id: "2", marca: "Mercedes2", img: LogoCarro },
    { id: "3", marca: "Mercedes3", img: LogoCarro },
    { id: "4", marca: "Mercedes4", img: LogoCarro },
    { id: "5", marca: "Mercedes5", img: LogoCarro },
    { id: "6", marca: "Mercedes6", img: LogoCarro },
  ];

  const handleSetMouse = (): void => {
    const carrosFiltrados = carsData?.filter(
      (carro) => carro.valor <= filterPrice && carro.km <= filterKm
    );
    setCarsDataDisplayed(carrosFiltrados);
    setOrderOption("");
  };

  const handleSetTouch = (): void => {
    const carrosFiltrados = carsData?.filter(
      (carro) => carro.valor <= filterPrice && carro.km <= filterKm
    );
    setCarsDataDisplayed(carrosFiltrados);
    setOrderOption("");
  };

  const handleSelectBrand = async (param: string): Promise<void> => {
    alert(`ID: ${param}`);
    handleGetCars({ year: filterYear, brand: param });
    setOrderOption("");
  };

  const handleSortCars = async (param: string): Promise<void> => {
    setOrderOption(param);
    let sortedCarsData;
    switch (param) {
      case "price":
        sortedCarsData = carsDataDisplayed?.sort((a, b) => a.valor - b.valor);
        setCarsDataDisplayed(sortedCarsData);
        break;
      case "year":
        sortedCarsData = carsDataDisplayed?.sort((a, b) =>
          a.ano.localeCompare(b.ano)
        );
        setCarsDataDisplayed(sortedCarsData);
        break;
      case "km":
        sortedCarsData = carsDataDisplayed?.sort((a, b) => a.km - b.km);
        setCarsDataDisplayed(sortedCarsData);
        break;
    }
  };

  const handleGetCars = async ({
    year,
    brand,
  }: GetCarsProps): Promise<void> => {
    try {
      await axios
        .get("http://localhost:9010/cars/query")
        // .get("http://cjgvz25p-9010.brs.devtunnels.ms/cars/query")
        .then((res) => {
          setCarsData(res.data);
          setCarsDataDisplayed(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      // Lidar com erros, se houver
      console.error("Erro ao ler o arquivo JSON:", error);
    }
  };

  const handleSearchByYear = async (): Promise<void> => {
    handleGetCars({ year: filterYear, brand: "null" });
    setOrderOption("");
    setFilterPrice(300000);
    setFilterKm(200000);
  };

  return (
    <SearchCarContext.Provider
      value={{
        carsData,
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
        setOrderOption,
        currentPage,
        setCurrentPage,
        handleSortCars,
        handleGetCars,
        handleSearchByYear,
      }}
    >
      {children}
    </SearchCarContext.Provider>
  );
}

export function useSearchCar(): SearchCarContextType {
  const context = React.useContext(SearchCarContext);

  if (!context)
    throw new Error("useSearchCar must be used within an AuthProvider");

  return context;
}
