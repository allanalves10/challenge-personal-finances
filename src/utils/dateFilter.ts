import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    newList = list.filter((e) => {
        if (e.date.getFullYear() === parseInt(year) && e.date.getMonth() + 1 === parseInt(month)) {
            return e;
        }
    });

    return newList;
}

export const formatDate = (date: Date): string  => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    
    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

export const addZeroToDate = (numberToDate: number): string => {
    if (numberToDate < 10) {
        return `0${numberToDate}`;
    }

    return `${numberToDate}`;
}

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${months[parseInt(month) - 1]} de ${year}`;
}