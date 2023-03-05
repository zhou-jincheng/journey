import dayjs from 'dayjs'

export const formatMouthDay = (date) => {
  return dayjs(date).format('MM月DD日')
}
