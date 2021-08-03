import { ref, onMounted, onUnmounted } from 'vue'
function clickMouse() {
  const a = ref(0);
  const b = ref(0);
  const updateMouse = (e: MouseEvent) => {
    a.value = e.pageX;
    b.value = e.pageY;
  };
  onMounted(() => {
    document.addEventListener("click", updateMouse);
  });
  onUnmounted(() => {
    document.removeEventListener("click", updateMouse);
  });
  return { a, b }
}
export default clickMouse;