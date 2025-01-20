import dayjs from "dayjs";
/**
 * @description
 * @param type 需要转换时间的类型:'valueOf':13位时间戳,'unix':10位时间戳,'formatDate':YYYY-MM-DD 'format':YYYY-MM-DD HH:mm:ss
 * @param time 需要转换的值
 */
export default function useDayjs(type: string, time: Date | string | number) {
  const timeFormatValue = ref<string | number>("");
  if (!time) {
    return {
      timeFormatValue: ""
    };
  }
  const value: string = time.toString();
  if (type === "format") {
    if (value.length === 13) {
      timeFormatValue.value = dayjs(Number(value)).format("YYYY-MM-DD HH:mm:ss");
    } else {
      timeFormatValue.value = dayjs.unix(Number(value)).format("YYYY-MM-DD HH:mm:ss");
    }
  } else if (type === "formatDate") {
    if (value.length === 13) {
      timeFormatValue.value = dayjs(Number(value)).format("YYYY-MM-DD");
    } else {
      timeFormatValue.value = dayjs.unix(Number(value)).format("YYYY-MM-DD");
    }
  } else if (type === "unix") {
    timeFormatValue.value = dayjs(time).unix();
  } else if (type === "valueOf") {
    timeFormatValue.value = dayjs(time).valueOf();
  }
  return {
    timeFormatValue: timeFormatValue.value
  };
}
