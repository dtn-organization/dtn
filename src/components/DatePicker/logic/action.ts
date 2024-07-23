import {toInt} from './algorithm';

const nextMonth = (currentDate: string): string => {
    let result = '';
    let dateArray = currentDate.split('/');

    if (parseInt(dateArray[1]) < 9) {
        result = dateArray[0] + "/0" + (toInt(dateArray[1].substring(1, 2)) + 1).toString() + "/" + dateArray[2];
    } else if (parseInt(dateArray[1]) == 9) {
        result = dateArray[0] + "/10/" + dateArray[2];
    } else if (parseInt(dateArray[1]) < 12) {
        result = dateArray[0] + "/" + (toInt(dateArray[1]) + 1).toString() + "/" + dateArray[2];
    } else {
        result = (toInt(dateArray[0]) + 1).toString() + "/01/" + dateArray[2];
    }

    return result;
}

const previousMonth = (currentDate: string) => {
    let result = '';
    let dateArray = currentDate.split('/');

    if (parseInt(dateArray[1]) > 10) {
        result = dateArray[0] + "/" + (toInt(dateArray[1]) - 1).toString() + "/" + dateArray[2];
    } else if (parseInt(dateArray[1]) > 1) {
        result = dateArray[0] + "/0" + (parseInt(dateArray[1]) - 1).toString() + "/" + dateArray[2]
    } else {
        result = (toInt(dateArray[0]) - 1).toString() + "/12/" + dateArray[2]
    }

    return result;
}

const nextYear = (currentDate: string) => {
    let result = '';
    let dateArray = currentDate.split('/');
    result = (toInt(dateArray[0]) + 1).toString() + "/" + dateArray[1] + "/" + dateArray[2];
    return result;
}

const previousYear = (currentDate: string) => {
    let result = '';
    let dateArray = currentDate.split('/');
    result = (toInt(dateArray[0]) - 1).toString() + "/" + dateArray[1] + "/" + dateArray[2];
    return result;
}

export {
    nextMonth,
    previousMonth,
    nextYear,
    previousYear,
}