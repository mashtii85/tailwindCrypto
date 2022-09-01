import APIService from "libs/api-service/src/api-service";
import { endpoints } from "../endpoint";
import { ICurrencyDetails } from "./currency";

export class CurrencyService{
  async getCurrencyList():Promise<string[]>{
    const response = await new APIService().get<string[]>(endpoints.currency.list.url)
    return response.data
  }

  async getCurrencyDetailList():Promise<ICurrencyDetails[]>{
    const response = await new APIService().get<ICurrencyDetails[]>(endpoints.currency.detailList.url)
    return response.data
  }
}
