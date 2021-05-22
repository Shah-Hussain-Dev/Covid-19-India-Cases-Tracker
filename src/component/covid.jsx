import React from 'react'
import './covid.css';
import {useEffect, useState} from 'react'


const India = ()=>{
    const [livedata, setLivedata]= useState([])
    const getdata = async () =>{
        const res = await fetch('https://api.covid19india.org/data.json')
        const data = await res.json();
        console.log(data.statewise[0]);
        setLivedata(data.statewise[0])
    }

  useEffect(() =>{
      getdata();
    
  },[])
return(
    <>
       <h1 className="main__heading">  Covid-19 India Cases Tracker </h1>
       <h4 className="heading"> 🔴 Live Updates</h4>
        <section>
        <div className="card country">
       
        <div className="container">
            <h4><b>Our Country</b></h4>
          
           <img  className="flag" src="https://www.freepnglogos.com/uploads/indian-flag-png/indian-flag-india-day-background-png-image-download-5.png" height="50px"/>
          </div>
          </div>
         <div className="card recovered">
       
               
            <div className="container">
            <h4><b>Total recovered</b></h4>
           <h1>{livedata.recovered}</h1>
          </div>
        </div>
           <div className="card confirmed">
       
        <div className="container">
            <h4><b>total confirmed</b></h4>
            <h1>{livedata.confirmed}</h1>
          </div>
          </div> 
           <div className="card death">
       
        <div className="container">
            <h4><b>total death</b></h4>
             <h1>{livedata.deaths}</h1>
          </div>
          </div>
           <div className="card active">
       
        <div className="container">
            <h4><b>total active</b></h4>
            <h1>{livedata.active}</h1>
          </div>
          </div>
           <div className="card update">
       
        <div className="container">
            <h4><b>last updated</b></h4>
            <h1>{livedata.lastupdatedtime}</h1>
          </div>
          </div>
        </section>

        <footer clasName="footer_heading"><h3>Made by Shah Hussain  🖤</h3>  </footer>

    </>
)
}
export default India