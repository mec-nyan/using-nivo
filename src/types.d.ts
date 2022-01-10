export type ChartProps = {
  data: Array<Data>;
};

export type Data = {
  id: string;
  label: string;
  value: number;
  color: string;
};

export type Datum = {
  country?: string;
  "hot dogColor"?: string;
  "hot dog"?: number;
  burger?: number;
  burgerColor?: string;
  sandwich?: number;
  sandwichColor?: string;
  kebab?: number;
  kebabColor?: string;
  fries?: number;
  friesColor?: string;
  donut?: number;
  donutColor?: string;
};

export type Babe = {
  name?: string;
  lez?: number;
  lezColor?: string;
  "bj only"?: number;
  "bj onlyColor"?: string;
  movies?: number;
  moviesColor?: string;
};
