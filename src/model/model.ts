import jsonfile from "jsonfile";
import { pathFile } from "../database";
import *  as interfaces from "../utils/interfaces"

// FUNCION PARA DEVOLVER TODO LO DE DATABASE
const getDataWeather = (): interfaces.Weather => jsonfile.readFileSync(pathFile);
const clima = getDataWeather()
console.log(clima);
