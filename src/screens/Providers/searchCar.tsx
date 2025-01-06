import React from "react";
import axios from "axios";

import LogoCarro from "../../assets/img/BMW.png";

import { CarProps, BrandProps, GetCarsProps } from "../../model/interfaces";

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
  handleSelectBrand: (param: string) => Promise<void>;
  openSideBar: boolean;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  orderOption: string;
  setOrderOption: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  handleSortCars: (param: string) => Promise<void>;
  handleGetCars: (param: GetCarsProps) => Promise<void>;
  handleSearchByYear: () => Promise<void>;
  handleSelectCar: (param: CarProps) => Promise<void>;
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

  const carros: CarProps[] = [
    {
      id: 1,
      img: "https://cdn.motor1.com/images/mgl/g4JXpN/s3/avaliacao-fiat-argo-trekking-cvt-2023-dianteira.jpg",
      marca: "Fiat",
      modelo: "Argo",
      ano: "2020/2021",
      km: 30807,
      cambio: "Manual",
      valor: 63290,
    },
    {
      id: 2,
      img: "https://quatrorodas.abril.com.br/wp-content/uploads/2018/03/19fordfusion_09_hr-e1596724047822.jpg?quality=70&strip=info&w=720&crop=1",
      marca: "Ford",
      modelo: "Fusion",
      ano: "2023/2024",
      km: 1600,
      cambio: "Automático",
      valor: 124290,
    },
    {
      id: 3,
      img: "https://cdn.motor1.com/images/mgl/rv6v6/s1/volkswagen-golf-8-gti-clubsport-2021.jpg",
      marca: "Wolksvagen",
      modelo: "Golf",
      ano: "2020",
      km: 22000,
      cambio: "Manual",
      valor: 74290,
    },
    {
      id: 4,
      img: "https://quatrorodas.abril.com.br/wp-content/uploads/2024/01/03_COROLLA_2024_1FLP4760.jpg?quality=70&strip=info",
      marca: "Toyota",
      modelo: "Corolla",
      ano: "2023/2024",
      km: 8000,
      cambio: "Automático",
      valor: 150290,
    },
    {
      id: 5,
      img: "https://cdn.motor1.com/images/mgl/P3gRkX/s1/jeep-compass-2024---europa.webp",
      marca: "Geep",
      modelo: "Compass",
      ano: "2018/2019",
      km: 8000,
      cambio: "Automático",
      valor: 84290,
    },
    {
      id: 6,
      img: "https://cdn.motor1.com/images/mgl/g4JXpN/s3/avaliacao-fiat-argo-trekking-cvt-2023-dianteira.jpg",
      marca: "Fiat",
      modelo: "Argo",
      ano: "2017",
      km: 45807,
      cambio: "Manual",
      valor: 63290,
    },
    {
      id: 7,
      img: "https://quatrorodas.abril.com.br/wp-content/uploads/2018/03/19fordfusion_09_hr-e1596724047822.jpg?quality=70&strip=info&w=720&crop=1",
      marca: "Ford",
      modelo: "Fusion",
      ano: "2023/2024",
      km: 82000,
      cambio: "Automático",
      valor: 105290,
    },
    {
      id: 8,
      img: "https://cdn.motor1.com/images/mgl/rv6v6/s1/volkswagen-golf-8-gti-clubsport-2021.jpg",
      marca: "Wolksvagen",
      modelo: "Golf",
      ano: "2021",
      km: 54000,
      cambio: "Manual",
      valor: 63290,
    },
    {
      id: 9,
      img: "https://quatrorodas.abril.com.br/wp-content/uploads/2024/01/03_COROLLA_2024_1FLP4760.jpg?quality=70&strip=info",
      marca: "Toyota",
      modelo: "Corolla",
      ano: "2023/2024",
      km: 12000,
      cambio: "Automático",
      valor: 124290,
    },
    {
      id: 10,
      img: "https://cdn.motor1.com/images/mgl/P3gRkX/s1/jeep-compass-2024---europa.webp",
      marca: "Geep",
      modelo: "Compass",
      ano: "2023/2024",
      km: 15000,
      cambio: "Automático",
      valor: 90290,
    },
  ];

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
    setCarsData(carros);
    setCarsDataDisplayed(carros);
    // try {
    //   await axios
    //     .get("http://localhost:9010/cars/query")
    //     // .get("http://cjgvz25p-9010.brs.devtunnels.ms/cars/query")
    //     .then((res) => {
    //       setCarsData(res.data);
    //       setCarsDataDisplayed(res.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // catch (error) {
    //   // Lidar com erros, se houver
    //   console.error("Erro ao ler o arquivo JSON:", error);
    // }
  };

  const handleSearchByYear = async (): Promise<void> => {
    handleGetCars({ year: filterYear, brand: "null" });
    setOrderOption("");
    setFilterPrice(300000);
    setFilterKm(200000);
  };

  const handleSelectCar = async (car: CarProps): Promise<void> => {
    console.log(car);
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
        handleSelectCar,
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
