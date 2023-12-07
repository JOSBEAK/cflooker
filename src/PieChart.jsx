import { PieChart } from "@mui/x-charts/PieChart";
import PropTypes from "prop-types";

function PieGraph({ chartData }) {
  let data = [];
  let id = 0;

  for (const key in chartData) {
    // key is the property name

    let graphData = {
      id: id,
      value: chartData[key],
      label: key + " " + chartData[key],
    };

    ++id;
    data.push(graphData);
  }

  return (
    <PieChart
      series={[
        {
          data: data,
          innerRadius: 80,
          outerRadius: 100,
          paddingAngle: 1,
          cornerRadius: 5,
          startAngle: -90,
          endAngle: 360,
          cx: 150,
          cy: 95,
        },
      ]}
      width={300}
      height={200}
      legend={{ hidden: true }}
    >
      hello
    </PieChart>
  );
}

PieGraph.propTypes = {
  chartData: PropTypes.object,
};

export default PieGraph;
