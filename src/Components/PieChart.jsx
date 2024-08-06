import React from "react";
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const size = {
  width: 325,
  height: 200,
};

const Chart = ({ pending = 0, done = 0 }) => {
  const data = [
    { name: 'Done', value: done },
    { name: 'Pending', value: pending },
  ];

  return (
    <div className="pie-main">
      <PieChart
        width={size.width}
        height={size.height}
        series={[
          {
            data,
            arcLabel: (item) => `${item.name} (${item.value})`,
            arcLabelMinAngle: 45,
          }
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "bold",
          },
        }}
      />
    </div>
  );
};

export default Chart;
