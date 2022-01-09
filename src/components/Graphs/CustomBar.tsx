import { ResponsiveBar } from "@nivo/bar";

const CustomBar = ({ data }) => (
  <ResponsiveBar
    // data: object[] >> required
    data={data}
    // indexBy: string | number >> Optional. Default: 'id'
    indexBy="id"
    // keys: {string[]} >> Optional. Default: 'value'
    keys={["value"]}
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
    padding={0.1}
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
    // colors: OrdinalColorScaleConfig >> Optional. Default={'scheme': 'nivo'}
    //>> You can pass a cb to use the colors provided in the data object:
    colors={({ id, data }) => String(data[`${id}Color`])}
    // colorBy: 'id' | 'indexValue' >> Optional. Default="id"
    colorBy="id"
    // borderRadius: number >> Optional. Default=0
    borderRadius={0}
    // borderColor: string | object | function >> Optional. Default: {from: 'color'}
    borderColor="#ff0000"
    // defs: object >> Optional (Define patterns and gradients)
    // fill: object >> Optional (Define rules to apply patterns and gradients)
  />
);

export default CustomBar;
