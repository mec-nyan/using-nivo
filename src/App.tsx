import "./App.css";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";

type Data = {
  id: string;
  label: string;
  value: number;
  color: string;
};

const data: Array<Data> = [
  {
    id: "lisp",
    label: "lisp",
    value: 220,
    color: "hsl(106, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 60,
    color: "hsl(276, 70%, 50%)",
  },
  {
    id: "elixir",
    label: "elixir",
    value: 481,
    color: "hsl(131, 70%, 50%)",
  },
  {
    id: "ruby",
    label: "ruby",
    value: 263,
    color: "hsl(275, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 41,
    color: "hsl(277, 70%, 50%)",
  },
];

type Datum = {
  country: string;
  "hot dog": number;
  "hot dogColor": string;
  burger: number;
  burgerColor: string;
  sandwich: number;
  sandwichColor: string;
  kebab: number;
  kebabColor: string;
  fries: number;
  friesColor: string;
  donut: number;
  donutColor: string;
};

const datum: Array<Datum> = [
  {
    country: "AD",
    "hot dog": 32,
    "hot dogColor": "hsl(92, 70%, 50%)",
    burger: 117,
    burgerColor: "hsl(357, 70%, 50%)",
    sandwich: 34,
    sandwichColor: "hsl(68, 70%, 50%)",
    kebab: 137,
    kebabColor: "hsl(289, 70%, 50%)",
    fries: 164,
    friesColor: "hsl(128, 70%, 50%)",
    donut: 111,
    donutColor: "hsl(336, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 115,
    "hot dogColor": "hsl(316, 70%, 50%)",
    burger: 46,
    burgerColor: "hsl(90, 70%, 50%)",
    sandwich: 119,
    sandwichColor: "hsl(25, 70%, 50%)",
    kebab: 39,
    kebabColor: "hsl(21, 70%, 50%)",
    fries: 113,
    friesColor: "hsl(105, 70%, 50%)",
    donut: 173,
    donutColor: "hsl(359, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 148,
    "hot dogColor": "hsl(32, 70%, 50%)",
    burger: 34,
    burgerColor: "hsl(178, 70%, 50%)",
    sandwich: 60,
    sandwichColor: "hsl(65, 70%, 50%)",
    kebab: 100,
    kebabColor: "hsl(134, 70%, 50%)",
    fries: 120,
    friesColor: "hsl(116, 70%, 50%)",
    donut: 116,
    donutColor: "hsl(178, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 63,
    "hot dogColor": "hsl(359, 70%, 50%)",
    burger: 31,
    burgerColor: "hsl(331, 70%, 50%)",
    sandwich: 198,
    sandwichColor: "hsl(40, 70%, 50%)",
    kebab: 49,
    kebabColor: "hsl(240, 70%, 50%)",
    fries: 2,
    friesColor: "hsl(88, 70%, 50%)",
    donut: 171,
    donutColor: "hsl(289, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 62,
    "hot dogColor": "hsl(86, 70%, 50%)",
    burger: 158,
    burgerColor: "hsl(199, 70%, 50%)",
    sandwich: 188,
    sandwichColor: "hsl(219, 70%, 50%)",
    kebab: 147,
    kebabColor: "hsl(220, 70%, 50%)",
    fries: 104,
    friesColor: "hsl(266, 70%, 50%)",
    donut: 39,
    donutColor: "hsl(117, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 173,
    "hot dogColor": "hsl(162, 70%, 50%)",
    burger: 30,
    burgerColor: "hsl(232, 70%, 50%)",
    sandwich: 193,
    sandwichColor: "hsl(124, 70%, 50%)",
    kebab: 146,
    kebabColor: "hsl(83, 70%, 50%)",
    fries: 113,
    friesColor: "hsl(117, 70%, 50%)",
    donut: 8,
    donutColor: "hsl(255, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 182,
    "hot dogColor": "hsl(232, 70%, 50%)",
    burger: 154,
    burgerColor: "hsl(213, 70%, 50%)",
    sandwich: 181,
    sandwichColor: "hsl(152, 70%, 50%)",
    kebab: 1,
    kebabColor: "hsl(99, 70%, 50%)",
    fries: 63,
    friesColor: "hsl(160, 70%, 50%)",
    donut: 24,
    donutColor: "hsl(229, 70%, 50%)",
  },
];

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Using Nivo Charts</h1>
      </header>
      <div className="charts">
        <div className="container">
          <MyResponsivePie data={data} />
        </div>
        <div className="container">
          <MyResponsiveBar data={datum} />
        </div>
      </div>
    </div>
  );
}

type ChartProps = {
  data: Array<Data>;
};

const MyResponsivePie = ({ data }: ChartProps) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "ruby",
        },
        id: "dots",
      },
      {
        match: {
          id: "c",
        },
        id: "dots",
      },
      {
        match: {
          id: "go",
        },
        id: "dots",
      },
      {
        match: {
          id: "python",
        },
        id: "dots",
      },
      {
        match: {
          id: "scala",
        },
        id: "lines",
      },
      {
        match: {
          id: "lisp",
        },
        id: "lines",
      },
      {
        match: {
          id: "elixir",
        },
        id: "lines",
      },
      {
        match: {
          id: "javascript",
        },
        id: "lines",
      },
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

const MyResponsiveBar = ({
  data /* see data tab */,
}: {
  data: Array<Datum>;
}) => (
  <ResponsiveBar
    data={data}
    keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "nivo" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "fries",
        },
        id: "dots",
      },
      {
        match: {
          id: "sandwich",
        },
        id: "lines",
      },
    ]}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={function (e) {
      return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
    }}
  />
);
