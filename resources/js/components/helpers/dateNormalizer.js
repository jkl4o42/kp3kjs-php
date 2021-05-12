const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const normalizeDate = (date) => {
    const dayOfWeekNum = date.getDay();
    const day = days[date.getDay()];
    const dayNumber = date.getDate();

    const month = {
      number: date.getMonth() + 1,
    };

    month.string = month.number < 10 ? `0${month.number}` : `${month.number}`;

    const year = date.getFullYear();

    const dateStr = `${dayNumber}.${month.string}.${year}`;

    const getTime = date.getTime()

    return {
        day,
        dayNumber,
        month,
        year,
        dateStr,
        dayOfWeekNum,
        getTime
    };
}

export const getFromToDatesArr = (date) => {
    const {dayOfWeekNum, getTime} = normalizeDate(date);

    const dayNumCoef = dayOfWeekNum === 0 ? 6 : dayOfWeekNum - 1;

    let monday = null;

    if (dayNumCoef === 0) {
        monday = date;
    } else {
        monday = new Date(getTime - dayNumCoef * 24 * 3600000);
    }

    const result = [];
    result.push(normalizeDate(monday).dateStr);

    for (let i = 1; i < 5; i++) {
        const timeStump = normalizeDate(monday).getTime;
        const nextDay = normalizeDate(new Date(timeStump + i * 24 * 3600000)).dateStr;
        result.push(nextDay);
    }

    return result;
}

export const getWeekDates = (date) => {
    const {dayOfWeekNum, getTime} = normalizeDate(date);

    const dayNumCoef = dayOfWeekNum === 0 ? 6 : dayOfWeekNum - 1;

    let monday = null;

    if (dayNumCoef === 0) {
        monday = date;
    } else {
        monday = new Date(getTime - dayNumCoef * 24 * 3600000);
    }

    const result = [];
    result.push(monday);

    for (let i = 1; i < 5; i++) {
        const timeStump = normalizeDate(monday).getTime;
        const nextDay = new Date(timeStump + i * 24 * 3600000);
        result.push(nextDay);
    }

    return result;
}
