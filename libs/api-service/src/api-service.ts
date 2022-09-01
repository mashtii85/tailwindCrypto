import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'


class APIService {

  private static  _instance:APIService // = new APIService()
  // _commonService = new CommonService()
  // appStore = useContext(store)
  public static refreshPromise = null

  constructor() {
    if (APIService._instance) {
      return APIService._instance
    }

    APIService._instance = this
    return this
  }

  public async get<T>(
    url: string,
    queryString?: string,
  ): Promise<AxiosResponse<T>> {
    const response = await axios.get( url)
    return response
  }

  async post<T>(url: string, body?: unknown): Promise<AxiosResponse<T>> {

    const jsonBody = JSON.stringify(body)
    const header = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: jsonBody,
    }

    const jsonResponse = await axios.post( url, header)
    return jsonResponse
  }

  public async put<T>(url: string, body?: unknown): Promise<AxiosResponse<T>> {
    const header = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },

      body: JSON.stringify(body),
    }
    const response = await axios.put( url, header)
    return response
  }

  async delete<T>(url: string, body?: unknown): Promise<AxiosResponse<T>> {

    const config:AxiosRequestConfig={
      headers:{
              }
    }

    const jsonResponse = await axios.delete<T>(url,config)
    return jsonResponse
  }
}


export default APIService
