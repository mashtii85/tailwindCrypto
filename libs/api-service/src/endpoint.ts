export const endpoints ={
  currency:{
    list:{
      key:"list-of-currencies",
      url:"https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    },
    detailList:{
      url:"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&amp;page=1&amp;per_page=20&amp;price_change_percentage=24h,7d"
    }
  },
}
