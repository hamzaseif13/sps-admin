const q = (n) => {
  if (n < 2) return n;
  let lo = 0,
    hi = n,
    r = 1;
  while (lo + 1 < hi) {
    const m = Math.floor((lo + hi) / 2);
    if (m * m > n) hi = m;
    else (lo = m), (r = m);
  }
  return r;
};
