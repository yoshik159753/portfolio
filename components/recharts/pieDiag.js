import { PieChart, Pie, Legend, Cell } from "recharts";

const PieDiag = ({ title, data }) => {
  // ref. https://iro-color.com/colorchart/color-system-24.html
  const colorCircle = [
    "#E60012",
    "#EB6100",
    "#F39800",
    "#FCC800",
    "#FFF100",
    "#CFDB00",
    "#8FC31F",
    "#22AC38",
    "#009944",
    "#009B6B",
    "#009E96",
    "#00A0C1",
    "#00A0E9",
    "#0086D1",
    "#0068B7",
    "#00479D",
    "#1D2088",
    "#601986",
    "#920783",
    "#BE0081",
    "#E4007F",
    "#E5006A",
    "#E5004F",
    "#E60033",
  ];

  return (
    <div className="mt-1">
      <div className="d-flex justify-content-center">
        <span>{title}</span>
      </div>
      <PieChart width={200} height={150}>
        <Legend
          layout="vertical"
          align="left"
          verticalAlign="top"
          wrapperStyle={{ fontSize: 12 }}
        />
        <Pie
          data={data}
          dataKey="value"
          outerRadius={30}
          isAnimationActive={false}
          cx="40%"
          cy="35%"
          startAngle={90}
          endAngle={-270}
        >
          {data.map((entry, index) => {
            const val =
              (index + 1) * Math.round(colorCircle.length / data.length);
            const color = colorCircle[val - 1];
            return <Cell key={`cell-${index}`} fill={color} />;
          })}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieDiag;
