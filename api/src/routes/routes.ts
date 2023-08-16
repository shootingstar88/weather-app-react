import { Router } from "express";
import { searchCity } from "../controllers/searchController";
import { cityWeather } from "../controllers/weatherController";

const router = Router();

router.get('/search/:subword', searchCity);
router.get('/weather/:city', cityWeather);

export default router;