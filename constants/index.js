export const categories = [
  {
    title: 'Food',
    value: 'food',
  },
  {
    title: 'Shopping',
    value: 'shopping',
  },
  {
    title: 'Entertainment',
    value: 'entertainment',
  },
  {
    title: 'Commute',
    value: 'commute',
  },
  {
    title: 'Other',
    value: 'other',
  },
];

export const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function getDaysInMonth(month, year) {
    let days = [];
    // Create a new Date object for the first day of the month.
    const date = new Date(year, month+1, 0);
  
    // Get the number of days in the month.
    const daysInMonth = date.getDate();
  
    // Return the number of days in the month.
    for(let i=1; i<=daysInMonth; i++){
        days.push(String(i));
    }
    return days;
}
