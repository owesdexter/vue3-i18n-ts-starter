import dayjs from 'dayjs';

const DATETIME_FORMAT = `YYYY-MM-DD HH:mm:ss`;
const DATE_FORMAT = `YYYY-MM-DD`;
const TIME_FORMAT = `HH:mm:ss`;
const NEW_DATE_FORMAT = `YYYY/MM/DD`;
const INVENTORY_DATE_FORMAT = `YYYYMMDD`;

export const getTime = (time?: Date | string) => (time ? dayjs(time).format(TIME_FORMAT) : dayjs(new Date()).format(TIME_FORMAT));

export const getDate = (time: Date | string) => (time ? dayjs(time).format(DATE_FORMAT) : ``);

export const getDateTime = (time: Date | string) => (time ? dayjs(time).format(DATETIME_FORMAT) : ``);

export const getTodayOpenTime = (): Date => {
  const today = new Date();
  today.setHours(9, 0, 0, 0); // 9:00 為開盤時間
  return today;
};
