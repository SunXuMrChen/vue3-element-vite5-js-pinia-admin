import dayjs from 'dayjs'
// import utc from 'dayjs/plugin/utc'

// dayjs.extend(utc)

export function formatUTC(utcString, format = 'YYYY/MM/DD HH:mm:ss') {
  const resultTime = dayjs(utcString).add(8, 'hour').format(format)
  return resultTime
}
