import { ref, onMounted, onUnmounted } from 'vue'
function useMousePosition() {
    const x = ref(0);
    const y = ref(0);
    const updateMouse = (e: MouseEvent) => {
        x.value = e.pageX;
        y.value = e.pageY;
    };
    onMounted(() => {
        document.addEventListener("mousemove", updateMouse);
    });
    onUnmounted(() => {
        document.removeEventListener("mousemove", updateMouse);
    });
    return { x, y }
}
export default useMousePosition;