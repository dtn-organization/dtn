const getWeekDay = (date: any) => {
    return mod(getDiffDays('1371/08/02', date), 7);
}

const getMonthDays = (date: any) => {
    let dateArray = date.split('/');
    if (dateArray[1] < 7)
        return 31;
    if (dateArray[1] < 12)
        return 30;
    return isLeapYear(dateArray[0]) ? 30 : 29;
}

const getDiffDays = (date1: any, date2: any) => {
    let diffDays = getDays(date2) - getDays(date1);
    let dateArray1 = date1.split('/');
    let dateArray2 = date2.split('/');
    let y1 = (dateArray1[0] < dateArray2[0]) ? dateArray1[0] : dateArray2[0];
    let y2 = (dateArray1[0] < dateArray2[0]) ? dateArray2[0] : dateArray1[0];
    for (let y = y1; y < y2; y++)
        if (isLeapYear(y))
            diffDays += (dateArray1[0] < dateArray2[0]) ? 366 : -366;
        else
            diffDays += (dateArray1[0] < dateArray2[0]) ? 365 : -365;
    return toInt(diffDays);
}

const getDays = (date: any) => {
    let dateArray = date.split('/');
    if (dateArray[1] < 8)
        return (dateArray[1] - 1) * 31 + toInt(dateArray[2]);
    return 6 * 31 + (dateArray[1] - 7) * 30 + toInt(dateArray[2]);
}

const toInt = (text: any) => {
    return parseInt(text, 10);
}

const mod = (a: any, b: any) => {
    return Math.abs(a - (b * Math.floor(a / b)));
}

const isLeapYear = (year: any) => {
    return (((((year - 474) % 2820) + 512) * 682) % 2816) < 682;
}

const fixTwice = (number: number) => {
    return `0${number}`.slice(-2);
}

export {
    getWeekDay,
    getMonthDays,
    toInt,
    fixTwice,
}