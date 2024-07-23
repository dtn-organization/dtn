interface ICalendar {
    color?: string,
    value?: string,
    onPick?: (date: string) => void;
}

export default ICalendar;