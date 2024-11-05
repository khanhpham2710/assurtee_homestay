export const onYearLater = (inputDate: Date): Date => {
    return new Date(inputDate.setFullYear(inputDate.getFullYear() + 1));
};

export const formatTime = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}.${month}.${day} / ${hours}:${minutes}`;
};

export const formatDate = (
    startDate: Date
    // endDate: Date
): { formatedStartDate: string; formatedEndDate: string } => {
    const year = startDate.getFullYear();
    const month = String(startDate.getMonth() + 1).padStart(2, '0');
    const day = String(startDate.getDate()).padStart(2, '0');

    const formatedStartDate = `${year}.${month}.${day}`;
    let formatedEndDate = `${year + 1}.${month}.${day}`;

    return { formatedStartDate, formatedEndDate };
};
