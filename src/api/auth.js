const BASE = "http://20.244.56.144/evaluation-service";
export async function register(payload){
  const res = await fetch(`${BASE}/register`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function authorize(payload){
  const res = await fetch(`${BASE}/auth`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload),
  });
  return res.json();
}
