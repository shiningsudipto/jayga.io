export const formatDate = date => {
  const day = date.toLocaleDateString('en-US', { day: '2-digit' })
  const month = date.toLocaleDateString('en-US', { month: 'short' })
  return `${day} ${month}`
}

export const getDates = (startDate, endDate) => {
  const dates = []
  let currentDate = new Date(startDate)
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }
  return dates
}

// Function to normalize the time component of dates
export const normalizeDate = date => {
  const normalizedDate = new Date(date)
  normalizedDate.setHours(0, 0, 0, 0)
  return normalizedDate
}
// Function to find matching dates between two arrays after normalizing the time component
export const findMatchingDates = (datesArray1, datesArray2) => {
  return datesArray1.filter(date1 => {
    const normalizedDate1 = normalizeDate(date1)
    return datesArray2.some(date2 => {
      const normalizedDate2 = normalizeDate(date2)
      return normalizedDate1.getTime() === normalizedDate2.getTime()
    })
  })
}

export const calculateTotalDays = (startDate, endDate) => {
  const oneDay = 24 * 60 * 60 * 1000 // Number of milliseconds in a day
  const diffDays = Math.round(Math.abs((endDate - startDate) / oneDay))
  return diffDays
}

// multi disabled
// const tileDisabled = ({ date }) => {
//   // Define disabled date ranges
//   const disabledRanges = [
//     { start: new Date('2024-02-02'), end: new Date('2024-02-10') },
//     { start: new Date('2024-02-13'), end: new Date('2024-02-18') }
//   ]

//   // Check if the date falls within any of the disabled ranges
//   return disabledRanges.some(
//     range => date >= range.start && date <= range.end
//   )
// }
