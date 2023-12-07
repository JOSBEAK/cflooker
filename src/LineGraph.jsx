import { LineChart } from "@mui/x-charts/LineChart";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";
import { useState } from "react";

function LineGraph({ ratingData }) {
  const [itemNb, setItemNb] = useState(
    ratingData.length > 0 ? ratingData.length : 1
  );
  if (ratingData.length > 0) {
    const handleItemNbChange = (e, newValue) => {
      if (typeof newValue !== "number") {
        return;
      }
      setItemNb(newValue);
    };
    let xLabels = [];

    for (let i = 0; i < ratingData.length + 2; i++) {
      xLabels.push(i);
    }
    console.log(ratingData);
    console.log(`val = ${xLabels}`);

    return (
      <>
        <LineChart
          width={500}
          height={300}
          series={[
            { data: ratingData.slice(0, itemNb), label: "Contest Rating" },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels.slice(0, itemNb) }]}
          sx={{ color: "white" }}
        />
        <div className="p-6">
          <Slider
            value={itemNb}
            onChange={handleItemNbChange}
            valueLabelDisplay="auto"
            defaultValue={ratingData.length}
            aria-labelledby="input-item-number"
          />
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default LineGraph;

LineGraph.propTypes = {
  ratingData: PropTypes.array,
};
