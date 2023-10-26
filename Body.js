import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [data, setData] = useState({});
  const [searchText,setSearchText] = useState("Hyderabad");
  const fetchData = async (searchText) => {
    const redata = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=abdeb978cd944502164274a08638f7ac`
    );
    const json = await redata.json();
    console.log(json?.base);

    setData(json);
  };
  useEffect(() => {
    fetchData(searchText);
  }, []);
  function secondsToTime(seconds) {
    const sDate = new Date(seconds * 1000); 
  
    return sDate.toLocaleTimeString() ;
  }
  return data == null ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="d-flex search-bar" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={(e)=>{
        setSearchText(e.target.value)
      }}/>
      <button className="btn btn-outline-success" type="submit" onClick={()=>{fetchData(searchText)}}>Search</button>
    </div>
    <div className="card" style={{width:18+'rem'}}>
  <img src="https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="Weather-app"/>
  <div className="card-body">
    <h5 className="card-title">{data?.name}</h5>
    <p className="card-text">Country: {data?.sys?.country}</p>
    <p className="card-text">Sunrise Time: {secondsToTime(data?.sys?.sunrise)}</p>
    <p className="card-text">Sunset Time: {secondsToTime(data?.sys?.sunset)}</p>
    <p className="card-text">Wind Speed: {data?.wind?.speed}</p>
    <p className="card-text">Temperature: {data?.main?.temp}</p>
    <p className="card-text">Feels Like: {data?.main?.feels_like}</p>
    <p className="card-text">Pressure: {data?.main?.pressure}</p>
    <p className="card-text">Humidity: {data?.main?.humidity}</p>
    {data?.weather?.map((r,index)=>(<p className="card-text" key={index}>Description: {r.description} </p>))}
    
  </div>
</div>
    </div>
  );
};
{/* <p>{data?.coord?.lon}</p>
        <p>{data?.coord?.lat}</p>
        
        <p>{data?.main?.temp}</p>
        <p>{data?.main?.feels_like}</p>
        <p>{data?.main?.temp_min}</p>
        <p>{data?.main?.temp_max}</p>
        <p>{data?.main?.pressure}</p>
        <p>{data?.main?.humidity}</p> */}
export default Body;
