export function mean(arr) {
  if (!arr || arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

export function stdDev(arr) {
  if (!arr || arr.length === 0) return 0;
  const m = mean(arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const diff = arr[i] - m;
    sum += diff * diff;
  }
  const variance = sum / arr.length;
  return Math.sqrt(variance);
}

export function pearsonCorrelation(x, y) {
  const n = Math.min(x.length, y.length);
  if (n === 0) return 0;

  const mx = mean(x.slice(0, n));
  const my = mean(y.slice(0, n));

  let top = 0;
  let dx = 0;
  let dy = 0;

  for (let i = 0; i < n; i++) {
    const a = x[i] - mx;
    const b = y[i] - my;
    top += a * b;
    dx += a * a;
    dy += b * b;
  }

  const bottom = Math.sqrt(dx * dy);
  if (bottom === 0) return 0;

  return top / bottom;
}
