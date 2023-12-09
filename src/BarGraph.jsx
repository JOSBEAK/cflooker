import { BarChart } from "@mui/x-charts/BarChart";
import PropTypes from "prop-types";

function BarGraph({ chartData, axis, width, height }) {
  let fields = [];
  let values = [];

  for (const key in chartData) {
    // key is the property name
    fields.push(key);
    values.push(chartData[key]);
  }

  return (
    <div>
      {axis === "xAxis" ? (
        <BarChart
          margin={{ left: 40 }}
          xAxis={[
            {
              id: "barCategories",
              data: fields[0] ? fields : ["NAN"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: values[0] ? values : [0],
            },
          ]}
          width={width}
          height={height}
          layout="vertical"
        />
      ) : (
        <BarChart
          margin={{ left: width === 1000 ? 120 : 70 }}
          yAxis={[
            {
              id: "barCategories",
              data: fields[0] ? fields : ["NAN"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: values[0] ? values : [0],
            },
          ]}
          width={width}
          height={height}
          layout="horizontal"
        />
      )}
    </div>
  );
}

BarGraph.propTypes = {
  chartData: PropTypes.object,
  axis: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default BarGraph;
