import { ResponsiveBar } from "@nivo/bar";

type Lang = {
  level: string;
  count: number;
};

const LangBar = ({
  data,
  keys,
  index,
}: {
  data: Array<Lang>;
  keys: Array<string>;
  index: string;
}) => (
  <ResponsiveBar
    // data: object[] >> required
    data={data}
    // indexBy: string | number >> Optional. Default: 'id'
    indexBy={index}
    // keys: {string[]} >> Optional. Default: 'value'
    keys={keys}
    // groupMode: 'grouped' | 'stacked' >> Optional. Default: 'stacked'
    groupMode="stacked"
    // layout: 'horizontal' | 'vertical' >> Optional. Default: 'vertical'
    layout="vertical"
    // valueScale: object >> Optional. Default: {type: 'linear'}
    valueScale={{ type: "linear" }}
    // indexScale: object >> Optional. Default: {{ type: "band", round: true }}
    indexScale={{ type: "band", round: true }}
    // reverse: boolean >> Optional. Default: {false}
    reverse={false}
    // minValue: number | 'auto' >> Optional. Default="auto"
    minValue="auto"
    // maxValue: number | 'auto' >> Optional. Default="auto"
    maxValue="auto"
    // valueFormat: string | (value: number) => string | number
    // Optional. Default=">-"
    valueFormat=">-"
    // padding: number >> Optional. Default: 0.1
    padding={0.4}
    // innerPadding: number >> Optional. Default={0}
    innerPadding={0}
    // width: number >> Not required when using <ResponsiveBar />
    // height: number >> Not required when using <ResponsiveBar />
    // pixelRatio: number >> Optional
    // margin: object >> Optional
    margin={{ top: 50, right: 50, left: 50, bottom: 50 }}
    //
    // STYLES
    //
    // theme: Theme >> Optional
    theme={{
      background: "transparent",
      textColor: "hsl(350, 50%, 65%)",
      fontSize: 12,
      axis: {
        ticks: {
          line: {
            strokeWidth: 2,
            stroke: "hsl(290, 80%, 70%)",
          },
        },
        domain: {
          line: {
            stroke: "hsl(340, 50%, 80%)",
            strokeWidth: 1,
          },
        },
        legend: {
          text: {
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: "bold",
            fill: "hsl(340, 80%, 70%)",
          },
        },
      },
      grid: {
        line: {
          stroke: "hsl(350, 80%, 90%)",
          strokeWidth: 1,
        },
      },
    }}
    // colors: OrdinalColorScaleConfig >> Optional. Default={'scheme': 'nivo'}
    //>> You can pass a cb to use the colors provided in the data object:
    colors={({ id, data }) => String(data[`${id}Color`])}
    // colorBy: 'id' | 'indexValue' >> Optional. Default="id"
    colorBy="id"
    // borderRadius: number >> Optional. Default=0
    borderRadius={0}
    // borderColor: string | object | function >> Optional. Default: {from: 'color'}
    borderColor="white"
    borderWidth={1}
    // defs: object >> Optional (Define patterns and gradients)
    // fill: object >> Optional (Define rules to apply patterns and gradients)
    //
    // CUSTOMIZATION
    //
    // layers: Array<string | function> >> Optional.
    // Default={["grid", "axes", "bars", "markers", "legends", "annotations"]}
    layers={["grid", "axes", "bars", "markers", "legends", "annotations"]}
    //
    // LABELS
    //
    // enableLabel: boolean >> default: true
    enableLabel={true}
    // label: string | function >> Default="formattedValue"
    label="formattedValue"
    // labelSkipWidth: number >> Optional. Default: 0
    // labelSkipHeight: number >> Optional. Default: 0
    // labelTextColor: string | object | function >> Optional. Default: {from: 'theme', theme: 'labels.text.fill'}
    labelTextColor="white"
    //
    // GRIDS AND AXES
    //
    enableGridX={false}
    enableGridY={true}
    // gridXValues: Array<number | string> >> Optional
    // gridYValues: Array<number | string> >> Optional
    axisLeft={{
      tickSize: 5,
      tickPadding: 0,
      tickRotation: 0,
    }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 0,
      tickRotation: 0,
      legend: "English Level",
      legendPosition: "middle",
      legendOffset: 40,
    }}
    // isInteractive: boolean >> Optional. Default={true}
    isInteractive={true}
    // tooltip: function >> Optional.
    // onClick: function >> Optional.
  />
);

export default LangBar;
