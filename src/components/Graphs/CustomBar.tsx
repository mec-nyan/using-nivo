import { ResponsiveBar } from "@nivo/bar";
import { Babe } from "../../types";

const CustomBar = ({ data }: { data: Array<Babe> }) => (
  <ResponsiveBar
    // data: object[] >> required
    data={data}
    // indexBy: string | number >> Optional. Default: 'id'
    indexBy="name"
    // keys: {string[]} >> Optional. Default: 'value'
    keys={["lez", "bjOnly", "movies"]}
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
    margin={{ top: 50, right: 100, left: 50, bottom: 50 }}
    //
    // STYLES
    //
    // theme: Theme >> Optional
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
      legend: "Movies",
      legendOffset: -40,
    }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 0,
      tickRotation: 0,
      legend: "Pawn stars",
      legendOffset: 40,
    }}
    // isInteractive: boolean >> Optional. Default={true}
    isInteractive={true}
    // tooltip: function >> Optional.
    // onClick: function >> Optional.
    legends={[
      {
        itemWidth: 100,
        itemHeight: 20,
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        translateX: 120,
        translateY: 0,
      },
    ]}
  />
);

export default CustomBar;
