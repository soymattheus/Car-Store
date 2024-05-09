export interface CardGridProps {
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

export interface ICarImages {
  id: string;
  url: string;
}

export interface IChip {
  text: string;
}

export interface BrandProps {
  id: string;
  marca: string;
  img: string;
}

export interface CarProps {
  id: number;
  img: string;
  marca: string;
  modelo: string;
  ano: string;
  km: number;
  cambio: string;
  valor: number;
}

export interface GetCarsProps {
  year: string | undefined;
  brand: string | undefined;
}
