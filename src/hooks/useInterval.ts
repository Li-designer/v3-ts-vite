import { ref } from "vue";
// eslint-disable-next-line no-undef
export default function useInterval(callback?: TimerHandler, delay = 1000) {
  const timer = ref<null | number>(null);
  if (timer.value) clearInterval(timer.value);
  if (callback) {
    timer.value = setInterval(callback, delay);
  }
  return {
    stop: () => {
      if (timer.value) clearInterval(timer.value);
      timer.value = null;
    }
  };
}
