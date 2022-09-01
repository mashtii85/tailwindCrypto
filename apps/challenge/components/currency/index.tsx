import { CurrencyService } from "@code-challenge/api-service"
import { useQuery } from "react-query"
import { queryNotation } from "../queryNotation"

const service = new CurrencyService()
export const Currency = ()=>{
  const {data,error,isLoading}= useQuery(queryNotation.currency.detailsList,service.getCurrencyDetailList)

  if(isLoading){
    return <>Loading...</>
  }

  if(error){
    return <>error:{error}</>
  }


  return <>{JSON.stringify(data)}</>
}
