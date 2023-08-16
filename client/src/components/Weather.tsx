function Weather() {
  return (
    <div className="w-full h-screen bg-oxford-blue p-6 text-white flex justify-center items-center tracking-wide">
      <div className="w-1/5 bg-image rounded-2xl h-[400px] px-5 py-5">
        <p className="font-bold text-2xl pb-0.5">Tuesday</p>
        <p className="text-sm mb-2">20 Jun 2022</p>
        <div className="flex mb-32">
          <span className="material-symbols-outlined block">location_on</span>
          <p className="font-medium text-sm px-1">Biarritz, FR</p>
        </div>
        <i className="wi wi-cloudy text-6xl mb-1"></i>
        <p className="font-bold text-3xl mb-2">29 &deg;C</p>
        <p className="font-bold text-lg">Sunny</p>
      </div>
      <div className="w-[22%] h-[375px] bg-secondary1 rounded-e-2xl px-8 py-6">
        <div className="flex justify-between p-1">
          <p className="font-bold uppercase">precipitation</p>
          <p>0%</p>
        </div>
        <div className="flex justify-between p-1">
          <p className="font-bold uppercase">humidity</p>
          <p>42%</p>
        </div>
        <div className="flex justify-between p-1 mb-8">
          <p className="font-bold uppercase">wind</p>
          <p>3 km/h</p>
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
        <button className="w-full rounded-md bg-button text-white py-1 text-sm font-medium flex justify-center items-center transition duration-150 ease-in-out hover:scale-110">
          <span className="material-symbols-outlined">location_on</span>
          <span>Change Location</span>
        </button>
      </div>
    </div>
  );
}

export default Weather;
