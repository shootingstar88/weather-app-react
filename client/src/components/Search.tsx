import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

interface searchDetails {
  name: string;
  country: string;
  url: string;
  id: number;
  lat: number;
  lon: number;
  region: string;
}

function search() {
  const [cities, setCities] = useState<searchDetails[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const navigate = useNavigate();

  const fetchCities = async () => {
    try {
      const response = await axios.get(`/search/${searchInput}`, {
        baseURL: "http://localhost:3000/api",
      });

      console.log(response.data.data);

      const data = response.data.data;
      setCities([...data]);
    } catch (err) {
      console.log(err);
    }
  };

  const setSearchValue = (e: any) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  const fetchUrl = (key: number): string => {
    return cities[key].url;
  };

  const handleKeyPress = (e: any) => {
    // if user press enter
    if (e.which === 13) {
      fetchCities();
    }
  };

  useEffect(() => {
    if (searchInput.length >= 2) {
      fetchCities();
    }
  }, [searchInput]);

  return (
    <div className="flex justify-center items-center h-screen bg-oxford-blue">
      <div
        id="search"
        className="w-2/5 bg-secondary1 h-[350px] rounded-2xl px-6 py-5 text-white"
      >
        <div className="flex pb-3 mb-2">
          <div className="bg-secondary-gray flex px-3 py-3 rounded-xl w-3/4 text-lg">
            <span className="material-symbols-outlined px-1 transition duration-150 ease-in-out hover:scale-110">
              search
            </span>
            <div className="flex-1 flex px-1">
              <input
                type="text"
                name="city"
                id="city"
                autoFocus
                autoComplete="off"
                onKeyUp={handleKeyPress}
                className="bg-secondary-gray flex-1 autofill:bg-secondary-gray! outline-none"
                onChange={(e) => setSearchValue(e)}
                value={searchInput}
              />
            </div>
          </div>
          <button
            className="bg-blue rounded-lg px-6 py-2 mx-4 block transition duration-150 ease-in-out hover:scale-110"
            type="submit"
            onClick={fetchCities}
          >
            Search
          </button>
          <button
            onClick={() => navigate(-1)}
            className="material-symbols-outlined py-3 cursor-pointer"
          >
            close
          </button>
        </div>
        <div>
          {cities.length === 0 && (
            <p className="px-4 py-2 rounded-lg text-lg w-full block">
              Loading...
            </p>
          )}
          {cities.map((value, key) => {
            return (
              <Link
                to=".."
                className="px-4 py-2 hover:bg-secondary-gray rounded-lg transition duration-150 text-lg cursor-pointer w-full block"
                key={key}
                state={{ url: fetchUrl(key) }}
              >
                {`${value.name}, ${value.country}`}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default search;
