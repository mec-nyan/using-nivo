export type ChartProps = {
  data: Array<Data>;
};

type Data = {
  id: string;
  label: string;
  value: number;
  color: string;
};

type Datum = {
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
