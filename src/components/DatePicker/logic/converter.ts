const gregorianMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const persianMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];


const persianDate = (date: Date) => {
  let g = new Array(
      date.getFullYear(),
      date.getMonth()+1,
      date.getDate()
  );

  let gy, gm, gd;
  let jy, jm, jd;
  let g_day_no, j_day_no;
  let j_np;

  let i;

  gy = g[0] - 1600;
  gm = g[1] - 1;
  gd = g[2] - 1;

  g_day_no = 365 * gy + div((gy + 3), 4) - div((gy + 99), 100) + div((gy + 399), 400);

  for (i = 0; i < gm; ++i)
      g_day_no += gregorianMonth[i];

  if (gm > 1 && ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0))) {
    ++g_day_no;
  }

  g_day_no += gd;

  j_day_no = g_day_no - 79;

  j_np = div(j_day_no, 12053);
  j_day_no = remainder(j_day_no, 12053);

  jy = 979 + 33 * j_np + 4 * div(j_day_no, 1461);
  j_day_no = remainder(j_day_no, 1461);


  if (j_day_no >= 366) {
      jy += div((j_day_no - 1), 365);
      j_day_no = remainder((j_day_no - 1), 365);
  }

  for (i = 0; i < 11 && j_day_no >= persianMonth[i]; ++i) {
      j_day_no -= persianMonth[i];
  }

  jm = i;
  jd = j_day_no + 1;

  return {
      year: jy,
      month: jm,
      day: jd
  };
}

function div(a: any, b: any) {
  return Math.floor(a / b);
}

function remainder(a: any, b: any) {
  return a - div(a, b) * b;
}

export default persianDate;