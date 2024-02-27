export const formatDate = (date) => {
    const day = date.toLocaleDateString('en-US', { day: '2-digit' });
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    return `${day} ${month}`;
};

export const calculateTotalDays = (startDate, endDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const diffDays = Math.round(Math.abs((endDate - startDate) / oneDay));
    return diffDays;
};