import { Request, Response } from "express";
import axios from "axios";
import date from "date-and-time";

export async function cityWeather(req: Request, res: Response) {
    try {
        const city = req.params.city;
        const response = await axios.get('/current.json', {
            baseURL: 'http://api.weatherapi.com/v1',
            params: {
                key: '4f1acb3ad2f046be94742856231508',
                q: city,
            },
            
        });

        const apiData = response.data;
        let data = null;

        if(apiData) {
            const weatherDate = date.parse(apiData.location.localtime.split(' ')[0], 'YYYY-MM-DD');
            const iconUrl = apiData.current.condition.icon.split('/');
            const iconPath = '/'+iconUrl[iconUrl.length-2]+'/'+iconUrl[iconUrl.length-1];
            data = {
                date: date.format(weatherDate, 'DD MMM YYYY'),
                day: date.format(weatherDate, 'dddd'),
                city: apiData.location.name,
                country: apiData.location.country,
                temperature: apiData.current.temp_c,
                condition: apiData.current.condition.text,
                icon: iconPath,
                precipitation: apiData.current.precip_mm,
                humidity: apiData.current.humidity,
                wind: apiData.current.wind_kph,
            }
        }

        return res.status(200).json({
            data: data,
        });
    } catch (error : any) {
        console.log(error);
        return res.status(400).json({
            data: null,
            error: error.response.data && error.response.data.error? error.response.data.error : error,
        });
    }
}