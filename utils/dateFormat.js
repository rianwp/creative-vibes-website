const dateFormat = (date) => {
  const objectDate = new Date(date)
  return objectDate.toLocaleString("id-ID", {timeZone: "Asia/Jakarta", dateStyle: "full"})
}

export default dateFormat