import React, { useState } from 'react';
import { Container, Form, Tooltip } from 'react-bootstrap';
import { BarChart, Bar, ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, PieChart, Pie, Cell,} from "recharts";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import Calendar34 from 'react-calendar';

const Chart1 = () => {
    const dataline = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]

    return (
        <div className='mx-auto' style={{ width: '100%', height: '260px' }}>
            <ResponsiveContainer>
                
            <LineChart  data={dataline}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
            </ResponsiveContainer>
        </div>
    );
};


const Chart2 = () => {
    const userActivity = [
        { date: "17", uv: 120, pv: 60 },
        { date: "18", uv: 200, pv: 100 },
        { date: "19", uv: 150, pv: 75 },
        { date: "20", uv: 170, pv: 85 },
        { date: "21", uv: 180, pv: 90 },
        { date: "22", uv: 220, pv: 110 },
        { date: "23", uv: 240, pv: 120 },
        { date: "24", uv: 230, pv: 120 },
        { date: "25", uv: 250, pv: 120 },
    ];

    return (
        <div className='mx-auto' style={{ width: '100%', height: '260px' }}>
            <ResponsiveContainer>
                <BarChart data={userActivity} barSize={15}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" stackId="a" fill="#8884d8" radius={[0, 0, 0, 0]} />
                    <Bar dataKey="pv" stackId="a" fill="#82ca9d" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};


const PieChart3 = () => {
  const piedata = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 500
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];

  const colors = ['#FF69B4', '#33CC33', '#6666CC', '#FFCC00', '#0099CC', '#CC0099'];

  return (
    <div className='mx-auto' style={{ width: '300px', height: '300px' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={piedata}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {
              piedata.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/> // use the colors array
              ))
            }
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};


const TableData = () => {
  const data = [
    { name: "Horizon UI PRO", progress: "17.5%", quantity: 2.458, date: "24.Jan.2021", checked: true },
    { name: "Horizon UI Free", progress: "10.8%", quantity: 1.485, date: "12.Jun.2021", checked: false },
    { name: "Weekly Update", progress: "21.3%", quantity: 1.024, date: "5.Jan.2021", checked: true },
    { name: "Venus 3D Asset", progress: "31.5%", quantity: 858, date: "7.Mar.2021", checked: false },
    { name: "Marketplace", progress: "12.2%", quantity: 258, date: "17.Dec.2021", checked: true },
  ];

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Progress</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={item.checked}
                  id={`checkbox-${index}`}
                />
                <label htmlFor={`checkbox-${index}`}></label>
                {item.name}
              </td>
              <td>{item.progress}</td>
              <td>{item.quantity}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Gradientgraph = () => {
  const datagra = [
    { name: "20", value: 17.5, count: 2458 },
    { name: "50", value: 10.8, count: 1485 },
    { name: "79", value: 21.3, count: 1024 },
    { name: "30", value: 31.5, count: 858 },
    { name: "90", value: 12.2, count: 258 },
  ];

  const gradientBarConfig = {
    margin: {
      top: 20,
      right: 0,
      bottom: 0,
      left: 0,
    },
    barGap: 4,
    barCategoryGap: 20,
    barSize: 20, // Increased bar size for better visibility
    tooltip: {
      cursor: false,
    },
    axis: {
      x: {
        type: "category",
        dataKey: "name",
      },
      y: {
        type: "number",
        dataKey: "value",
      },
    },
  };

  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={datagra} margin={gradientBarConfig.margin}>
        <XAxis
          dataKey={gradientBarConfig.axis.x.dataKey}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12, fontWeight: 500 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12, fontWeight: 500 }}
        />
        <Bar
          dataKey="value"
          fill="url(#colorUv)"
          barSize={gradientBarConfig.barSize}
          gap={gradientBarConfig.barGap}
          categoryGap={gradientBarConfig.barCategoryGap}
          radius={[10, 10, 0, 0]}
        >
          {datagra.map((entry, index) => (
            <Cell key={`cell-${index}`} />
          ))}
        </Bar>
        <Tooltip cursor={gradientBarConfig.tooltip.cursor} />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8884d8" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
};

const TableDatadesign = () => {
  const data = [
    { name: "Horizon UI PRO", status: "Approved", progress: 100, date: "18 Apr 2021" },
    { name: "Horizon UI Free", status: "Disable", progress: 0, date: "18 Apr 2021" },
    { name: "Marketplace", status: "Error", progress: 50, date: "20 May 2021" },
    { name: "Weekly Updates", status: "Approved", progress: 75, date: "12 Jul 2021" },
    { name: "Weekly Updates", status: "Approved", progress: 75, date: "12 Jul 2021" },
  ];

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Name</th>
            <th style={{ width: "20%" }}>Status</th>
            <th style={{ width: "20%" }}>Progress</th>
            <th style={{ width: "30%" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <button
                  style={{
                    backgroundColor:
                      item.status === "Approved"
                        ? "green"
                        : item.status === "Disable"
                        ? "red"
                        : item.status === "Error"
                        ? "yellow"
                        : "blue",
                        color:'#FFF', border:'none', borderRadius:'20px', width:'80px'
                  }}
                >
                  {item.status}
                </button>
              </td>
              <td>{item.date}</td>
              <td>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${item.progress}%`,
                        backgroundColor: "#4318fe", // single color for all progress bars
                      }}
                    >
                      {item.progress}%
                    </div>
                  </div>
                </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


};


const ListData = () => {
  const data = [
    { name: "Horizon UI PRO", checked: true },
    { name: "Horizon UI Free", checked: false },
    { name: "Weekly Update", checked: true },
    { name: "Venus 3D Asset", checked: false },
    { name: "Marketplace", checked: true },
    { name: "Weekly Update", checked: true },
    { name: "Venus 3D Asset", checked: false },
    { name: "Marketplace", checked: true },
  ];

  return (
    <ul style={{padding:'10px', margin:'0'}}>
    {data.map((item, index) => (
      <li key={index} className='d-flex justify-content-between align-items-center' >
        <div>
        <input
          type="checkbox"
          defaultChecked={item.checked}
          id={`checkbox-${index}`}
        />
        <label htmlFor={`checkbox-${index}`}></label>
        {item.name}
        </div>
        <PiDotsSixVerticalBold/>
      </li>

      
    ))}
    
  </ul>
  );
};



const Calendar = () => {
  

  let [value, onChange] = useState(new Date());
  <div style={{width:'100%'}}>
  <Calendar34 onChange={(newValue) => onChange(newValue)} value={value} />
</div>

};



export default { Chart1, Chart2, PieChart3, TableData, TableDatadesign, Gradientgraph, ListData, Calendar };
