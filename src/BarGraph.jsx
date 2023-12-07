import { BarChart } from "@mui/x-charts/BarChart";
import PropTypes from "prop-types";

function BarGraph({ chartData }) {
  let fields = [];
  let values = [];

  for (const key in chartData) {
    // key is the property name
    fields.push(key);
    values.push(chartData[key]);
  }

  return (
    <div>
      <BarChart
        sx={{ marginLeft: "30px" }}
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
        width={500}
        height={300}
        layout="horizontal"
      />
    </div>
  );
}

BarGraph.propTypes = {
  chartData: PropTypes.object,
};

export default BarGraph;
