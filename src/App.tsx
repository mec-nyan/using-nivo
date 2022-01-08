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
  country?: string;
  donut?: number;
  donutColor?: string;
};

const datum: Array<Datum> = [
  {
    country: "AD",
    donut: 111,
    donutColor: "hsl(136, 70%, 50%)",
  },
  {
    country: "AE",
    donut: 173,
    donutColor: "hsl(336, 70%, 50%)",
  },
  {
    country: "AF",
    donut: 116,
    donutColor: "hsl(336, 70%, 50%)",
  },
  {
    country: "AG",
    donut: 171,
    donutColor: "hsl(336, 70%, 50%)",
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
    keys={["donut"]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
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
