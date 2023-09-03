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
  icon: string;
  precipitation: number;
  humidity: number;
  wind: number;
}

function Weather() {
  const [weather, setWeather] = useState<weatherInfo>();
  const [url, setUrl] = useState<string>();
  const [backgroundImg, setBackgroundImg] = useState<string>("");
  const weatherIconCode = [
    113, 116, 119, 122, 143, 176, 179, 182, 185, 200, 227, 230, 248, 260, 263,
    266, 281, 284, 293, 296, 299, 302, 305, 308, 311, 314, 317, 320, 323, 326,
    329, 332, 335, 338, 350, 353, 356, 359, 362, 365, 368, 371, 374, 377, 386,
    389, 392, 395,
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const state = useLocation().state;
  console.log(state);
  if (state && state.url && url != state.url) {
    setUrl(state.url);
  }

  const fetchWeather = async (url: string = "Thoothukudi") => {
    try {
      const response = await axios.get(`/weather/${url}`, {
        baseURL: "http://localhost:3000/api",
      });

      const data = response.data.data;
      setBackgroundImage();
      setWeather(data);
    } catch (err) {
      console.log(err);
    }
  };

  const setBackgroundImage = () => {
    const id = Math.ceil(Math.random() * 300);
    const imgaeUrl = `https://picsum.photos/id/${id}/400/600`;
    setBackgroundImg(imgaeUrl);
  };

  const randomValueGenerator = (minimum: number, maximum: number): number => {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
  };

  const indexOfDay = () => {
    if (weather?.day) {
      return days.indexOf(weather.day.substring(0, 3));
    }
    return -1;
  };

  useEffect(() => {
    url ? fetchWeather(url) : fetchWeather();
  }, [url]);

  return (
    <div className="w-full h-screen bg-oxford-blue p-6 text-white flex justify-center items-center tracking-wide">
      <div
        className="w-1/5 rounded-2xl h-[400px] px-5 py-5"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgb(79, 92, 211, 0.7) , rgb(131, 197, 206, 0.7)), url(" +
            backgroundImg +
            ")",
        }}
      >
        <p className="font-bold text-2xl pb-0.5">{weather?.day}</p>
        <p className="text-sm mb-2">{weather?.date}</p>
        <div className="flex mb-20">
          <span className="material-symbols-outlined block">location_on</span>
          <p className="font-medium text-sm px-1">{weather && `${weather?.city}, ${weather?.country}`}</p>
        </div>
        <img
          className="w-[90px] h-auto"
          src={`../images/weather${weather?.icon}`}
          alt=""
        />
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
        <div className="flex justify-between p-1 mb-7">
          <p className="font-bold uppercase">wind</p>
          <p>{weather?.wind} km/h</p>
        </div>
        <div className="flex no-wrap text-center h-[124px] mb-7">
          <div className="w-1/4 bg-secondary2 rounded-md m-px pb-3">
            <img
              className="w-[64px] h-auto"
              src={weather &&`../images/weather/day/${
                weatherIconCode[randomValueGenerator(0, 47)]
              }.png`}
              alt=""
            />
            <p className="font-light text-sm mb-1">
              {days[(indexOfDay() + 1) % 7]}
            </p>
            <p className="font-semibold">
              {weather && randomValueGenerator(24, 32)} &deg;C
            </p>
          </div>
          <div className="w-1/4 bg-secondary2 rounded-md m-px pb-3">
            <img
              className="w-[64px] h-auto"
              src={weather && `../images/weather/day/${
                weatherIconCode[randomValueGenerator(0, 47)]
              }.png`}
              alt=""
            />
            <p className="font-light text-sm mb-1">
              {days[(indexOfDay() + 2) % 7]}
            </p>
            <p className="font-semibold">
              {weather && randomValueGenerator(24, 32)} &deg;C
            </p>
          </div>
          <div className="w-1/4 bg-secondary2 rounded-md m-px pb-3">
            <img
              className="w-[64px] h-auto"
              src={weather && `../images/weather/day/${
                weatherIconCode[randomValueGenerator(0, 47)]
              }.png`}
              alt=""
            />
            <p className="font-light text-sm mb-1">
              {days[(indexOfDay() + 3) % 7]}
            </p>
            <p className="font-semibold">
              {weather && randomValueGenerator(24, 32)} &deg;C
            </p>
          </div>
          <div className="w-1/4 bg-secondary2 rounded-md m-px pb-3">
            <img
              className="w-[64px] h-auto"
              src={weather && `../images/weather/day/${
                weatherIconCode[randomValueGenerator(0, 47)]
              }.png`}
              alt=""
            />
            <p className="font-light text-sm mb-1">
              {days[(indexOfDay() + 4) % 7]}
            </p>
            <p className="font-semibold">
              {weather && randomValueGenerator(24, 32)} &deg;C
            </p>
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
