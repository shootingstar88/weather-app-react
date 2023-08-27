import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

interface weatherInfo {
  date: string;
  day: string;
  city: string;
  country: string;
  temperature: number;
  condition: string;
  precipitation: number;
  humidity: number;
  wind: number;
}

function Weather() {
  const [weather, setWeather] = useState<weatherInfo>();
  const [url, setUrl] = useState<string>();

  const state = useLocation().state;
  console.log(state);
  if (state && state.url) {
    if(url!=state.url)
      setUrl(state.url);
  }

  const fetchWeather = async (url: string = "Thoothukudi") => {
    try {
      const response = await axios.get(`/weather/${url}`, {
        baseURL: "http://localhost:3000/api",
      });

      const data = response.data.data;

      setWeather(data);
    } catch (err) {
      console.log(err);
    }
  };

  const setBackgroundImage = () => {
    const id = Math.ceil((Math.random() * 300));
    const imgaeUrl = `https://picsum.photos/id/${id}/400/600`;
    const value = `linear-gradient(to top, rgb(79, 92, 211, 0.7) , rgb(131, 197, 206, 0.7)), url(${imgaeUrl})`;
    return value;
  }

  useEffect(() => {
    url ? fetchWeather(url) : fetchWeather();
  }, [url]);

  return (
    <div className="w-full h-screen bg-oxford-blue p-6 text-white flex justify-center items-center tracking-wide">
      <div className="w-1/5 rounded-2xl h-[400px] px-5 py-5" style={{backgroundImage: setBackgroundImage()}}>
        <p className="font-bold text-2xl pb-0.5">{weather?.day}</p>
        <p className="text-sm mb-2">{weather?.date}</p>
        <div className="flex mb-32">
          <span className="material-symbols-outlined block">location_on</span>
          <p className="font-medium text-sm px-1">{`${weather?.city}, ${weather?.country}`}</p>
        </div>
        <i className="wi wi-cloudy text-6xl mb-1"></i>
        <p className="font-bold text-3xl mb-2">{weather?.temperature} &deg;C</p>
        <p className="font-bold text-lg">{weather?.condition}</p>
      </div>
      <div className="w-[22%] h-[375px] bg-secondary1 rounded-e-2xl px-8 py-6">
        <div className="flex justify-between p-1">
          <p className="font-bold uppercase">precipitation</p>
          <p>{weather?.precipitation} mm</p>
        </div>
        <div className="flex justify-between p-1">
          <p className="font-bold uppercase">humidity</p>
          <p>{weather?.humidity} %</p>
        </div>
        <div className="flex justify-between p-1 mb-8">
          <p className="font-bold uppercase">wind</p>
          <p>{weather?.wind} km/h</p>
        </div>
        <div className="flex no-wrap text-center h-[110px] mb-8">
          <div className="w-1/4 bg-secondary2 rounded-md m-px py-3">
            <i className="wi wi-cloudy text-3xl mb-1"></i>
            <p className="font-light text-sm mb-1">Tue</p>
            <p className="font-semibold">30 &deg;C</p>
          </div>
          <div className="w-1/4 bg-secondary2 rounded-md m-px py-3">
            <i className="wi wi-cloudy text-3xl mb-1"></i>
            <p className="font-light text-sm mb-1">Wed</p>
            <p className="font-semibold">22 &deg;C</p>
          </div>
          <div className="w-1/4 bg-secondary2 rounded-md m-px py-3">
            <i className="wi wi-cloudy text-3xl mb-1"></i>
            <p className="font-light text-sm mb-1">Thu</p>
            <p className="font-semibold">06 &deg;C</p>
          </div>
          <div className="w-1/4 bg-secondary2 rounded-md m-px py-3">
            <i className="wi wi-cloudy text-3xl mb-1"></i>
            <p className="font-light text-sm mb-1">Fri</p>
            <p className="font-semibold">26 &deg;C</p>
          </div>
        </div>
        <Link
          to="search"
          className="w-full rounded-md bg-button text-white py-1 text-sm font-medium flex justify-center items-center transition duration-150 ease-in-out hover:scale-110"
        >
          <span className="material-symbols-outlined">location_on</span>
          <span>Change Location</span>
        </Link>
      </div>
    </div>
  );
}

export default Weather;
