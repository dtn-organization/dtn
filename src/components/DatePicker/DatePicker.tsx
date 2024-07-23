import * as React from 'react';
import {useEffect, useState} from "react";
import {fixTwice, getMonthDays, getWeekDay} from './logic/algorithm';
import data from "./data.json";
import persianDate from "./logic/converter";
import {nextMonth, previousMonth, nextYear, previousYear} from "./logic/action";
import ICalendar from './calendar.interface';
import {
    Wrapper,
    Header,
    Controls,
    ControlRight,
    CaretRight,
    Title,
    ControlLeft,
    CaretLeft,
    Body,
    DaysOfWeek,
    DaysOfWeekItem,
    DaysOfWeekContent,
    ActualDays,
    ActualDaysItem,
    ActualDaysContent
} from "./style";
import {ThemeProvider} from 'styled-components';

const DatePicker: React.FC<ICalendar> = (
    {
        color = '#212121',
        value = '',
        onPick = () => {
        }
    }) => {

    const [currentDate, setCurrentDate] = useState('');
    const [todayDate, setTodayDate] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const [weekDay, setWeekDay] = useState(0);
    const [monthDays, setMonthDays] = useState(0);

    useEffect(() => {
        const dateReg = /^\d{4}([./-])\d{2}\1\d{2}$/;

        const dt = new Date();
        const pd = persianDate(dt);
        const cd = `${pd.year}/${fixTwice(pd.month + 1)}/${fixTwice(pd.day)}`;
        setTodayDate(cd);

        if (value.match(dateReg) !== null) {
            generateDate(value);
            setSelectedDate(value);
            onPick(value);
        } else {
            generateDate(cd);
        }
    }, [value])

    const generateDate = (date: any) => {
        setCurrentDate(date);
        const wd = getWeekDay(date.substring(0, 8) + "01");
        const md = getMonthDays(date);
        setWeekDay(wd);
        setMonthDays(md);
    }

    const onNextMonth = () => {
        generateDate(nextMonth(currentDate));
    }

    const onPreviousMonth = () => {
        generateDate(previousMonth(currentDate));
    }

    const onNextYear = () => {
        generateDate(nextYear(currentDate));
    }

    const onPreviousYear = () => {
        generateDate(previousYear(currentDate));
    }

    const onSelect = (day: number) => {
        const cdParts = currentDate.split('/');
        const sd = `${cdParts[0]}/${cdParts[1]}/${fixTwice(day)}`;
        setSelectedDate(sd);
        onPick(sd);
    }

    const isToday = (day: number) => {
        const cdParts = currentDate.split('/');
        const tdParts = todayDate.split('/');
        return (`${cdParts[0]}/${cdParts[1]}/${day}` === `${tdParts[0]}/${tdParts[1]}/${parseInt(tdParts[2])}`);
    }

    const isSelected = (day: number): boolean => {
        const cdParts = currentDate.split('/');
        const sdParts = selectedDate.split('/');
        return (`${cdParts[0]}/${cdParts[1]}/${day}` === `${sdParts[0]}/${sdParts[1]}/${parseInt(sdParts[2])}`);
    }

    const currentDateSection = () => {
        const split = currentDate.split('/');
        return {
            year: split[0],
            month: parseInt(split[1]) - 1,
            day: parseInt(split[2]),
        }
    }

    return (
        <ThemeProvider theme={{
            primaryColor: color
        }}>
            <Wrapper>
                <Header>
                    <Controls>
                        <ControlRight onClick={onPreviousYear} radius={true}>
                            <CaretRight/>
                            <CaretRight/>
                        </ControlRight>
                        <ControlRight onClick={onPreviousMonth} radius={false}>
                            <CaretRight/>
                        </ControlRight>
                    </Controls>

                    <Title>
                        <span>{data.months[currentDateSection().month]}</span>
                        &nbsp;
                        <span>{currentDateSection().year}</span>
                    </Title>

                    <Controls>
                        <ControlLeft onClick={onNextMonth} radius={true}>
                            <CaretLeft/>
                        </ControlLeft>
                        <ControlLeft onClick={onNextYear} radius={false}>
                            <CaretLeft/>
                            <CaretLeft/>
                        </ControlLeft>
                    </Controls>
                </Header>

                <Body>
                    <DaysOfWeek>
                        {
                            data.days.map((item, index) => (
                                <DaysOfWeekItem key={index}>
                                    <DaysOfWeekContent>{item}</DaysOfWeekContent>
                                </DaysOfWeekItem>
                            ))
                        }
                    </DaysOfWeek>

                    <ActualDays>
                        {
                            (() => {
                                let content = '';
                                let day = 1;

                                return (
                                    [...Array(42)].map((_, index) => {
                                        if (index >= weekDay) {
                                            content = (day).toString();
                                        }
                                        let render = null;
                                        if (day <= monthDays) {
                                            render = (
                                                <ActualDaysItem>
                                                    <ActualDaysContent
                                                        onClick={(index >= weekDay) ? onSelect.bind(null, day) : undefined}
                                                        today={isToday(day) && content !== ''}
                                                        holiday={index != 0 && (index + 1) % 7 === 0}
                                                        selected={isSelected(day) && content !== ''}>
                                                        {content}
                                                    </ActualDaysContent>
                                                </ActualDaysItem>
                                            )
                                        }
                                        if (index >= weekDay) {
                                            day++;
                                        }
                                        return render;
                                    })
                                )
                            })()
                        }
                    </ActualDays>
                </Body>
            </Wrapper>
        </ThemeProvider>
    )
}

export default DatePicker;
