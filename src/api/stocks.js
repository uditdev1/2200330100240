const STOCK_BASE = "http://20.244.56.144";
export async function fetchstockprices(symbol,minutes,token){
  const res = await fetch(`${STOCK_BASE}/stock/${symbol}/prices?minutes=${minutes}`,{
    headers: {Authorization: `Bearer ${token}` }
  });
  return res.json();
}

export async function fetchallsymbols(token) {
  const res = await fetch(`${STOCK_BASE}/stock/symbols`, {
    headers: {Authorization: `Bearer ${token}` }
  });
  return res.json();
}