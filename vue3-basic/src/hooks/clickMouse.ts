import { ref, onMounted, onUnmounted,reactive,toRefs } from 'vue'
function clickMouse() {
  // const a = ref(0);
  // const b = ref(0);
const state = reactive({
  a:0,
  b:0
})

  const updateMouse = (e: MouseEvent) => {
    state.a = e.pageX;
    state.b = e.pageY;
  };
  const refState = toRefs(state);
  onMounted(() => {
    document.addEventListener("click", updateMouse);
  });
  onUnmounted(() => {
    document.removeEventListener("click", updateMouse);
  });
  return { refState }
}
export default clickMouse;