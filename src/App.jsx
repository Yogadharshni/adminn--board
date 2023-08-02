import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Card } from './Card';
import { Navbar } from './Navbar';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


// import React from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,

} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


import { width } from '@mui/system';
import { Perchantage_containe } from './Percent';
import { Circlevalue } from './Circlevalue';

function App() {
  const [count, setCount] = useState(0)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' 
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div className="App">
     <Navbar />
     <Content />
     <div className='row circle-container'>
      <div className='col-md-3 cols1'>
      <Circlevalue />
      </div>
      <div className='col-md-9'>
      <Perchantage_containe />
      </div> 
 </div>
 <div className='row chart-container'>
<div className='chat-background'>
<Line options={options} data={data} />
</div>

 </div>
    </div>
  )
}
function Content(){
  const data =[{
    name :"EARNINGS (MONTHLY)",
    money:"$40,000",
    icon : "work",
   color :"blue",
   demo : "WorkIcon",
   display:"none"

  },{
    name :"EARNINGS (ANNUAL)",
    money:"$215,000",
    icon : "attach_money",
    color :"green",
    display:"none"
  },{
    name :"TASKS",
    money:"50%",
    icon : "assignment",
    color :"rgb(255, 166, 0)",
    perchantage:"50",
    display:"block"
  },{
    name :"PENDING REQUESTS",
    money:"18",
    icon : "chat_bubble",
    color :"red",
    display:"none"
  }]
  
  return(
<div className='content-container'>
<h2 className='card-heading'>Cards</h2>
  <div className=' content-first-row'>
  {data.map((nm,index)=>{return (<Card nm={nm} key={index}/>)})}
 </div>

</div>
  )
}
export default App