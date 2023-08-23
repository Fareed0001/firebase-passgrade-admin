import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Statistics',
    Day: 2000,
    amt: 2400,
  },
  {
    name: 'Month',
    Month: 4000,
    amt: 2400,
  },

  {
    name: 'Year',
    Year: 6000,
    amt: 2400,
  },


];

export default function Bard() {
 

 
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={100}
          height={800}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Day" fill="#8884d8" />
          <Bar dataKey="Month" fill="#82ca9d" />
          <Bar dataKey="Year" fill="#ffA500" />
        </BarChart>
      </ResponsiveContainer>
    );
  
}
