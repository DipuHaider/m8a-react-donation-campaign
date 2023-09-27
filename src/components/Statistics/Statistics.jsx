import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend } from 'recharts';
import './Statistics.css';
import { getStoredDonation } from "../../utilities/localstorage";

const customLegendContent = (props) => {
  const { payload } = props;

  return (
    <ul className="legend text-xs gap-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {payload.map((entry, index) => (
        <li key={`legend-item-${index}`} style={{ marginLeft: '10px', listStyleType: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{ width: '90px' }}>{entry.value}</span>
          <span className="legend-color" style={{ backgroundColor: entry.color, width: '100px', height: '10px', display: 'inline-block', marginLeft: '5px', borderRadius: '10px' }}></span>
        </li>
      ))}
    </ul>
  );
};

const Statistics = () => {
  const [donatedDonations, setDonatedDonations] = useState([]);

  useEffect( () => {
      const storedDonationIds = getStoredDonation();
      const donationsDonated = storedDonationIds.length;
          
      setDonatedDonations(donationsDonated);
  }, [])


// const totalDonation = 12;
const data = [
  { name: 'Total Donation', value: 12 },
  { name: 'Your Donation', value: donatedDonations },
];
const COLORS = ['#FF444A', '#00C49F'];

  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);

  return (
    <div className="statistics-container statistics-container text-center flex justify-center items-center">
      <div className="horizontal-bar">
        {data.map((entry, index) => (
          <div className="bar" key={`bar-${index}`}>
            <div className="bar-fill" style={{ width: `${(entry.value / totalValue) * 100}%` }}></div>
          </div>
        ))}
      </div>
      <div className="pie-chart-container justify-end">
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
              const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

              return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                  {`${(percent * 100).toFixed(1)}%`}
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend content={customLegendContent} />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
