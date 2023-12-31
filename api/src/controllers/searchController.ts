import { Request, Response } from "express";
import axios from "axios";

export async function searchCity(req: Request, res: Response) {
    try {
        const subword = req.params.subword;
        const response = await axios.get('/search.json', {
            baseURL: 'http://api.weatherapi.com/v1',
            params: {
                key: '4f1acb3ad2f046be94742856231508',
                q: subword,
            },
        });
        return res.status(200).json({
            data: response.data,
        });
    } catch (error) {
        return res.status(500).json({
            data: null,
            error
        });
    }
}