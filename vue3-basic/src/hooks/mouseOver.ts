import { ref, onMounted, onUnmounted } from 'vue'
function myMouseOver() {
  const m = ref(0);
  const n = ref(0);
  const updateMouse = (e: MouseEvent) => {
    m.value = e.pageX;
    n.value = e.pageY;
  };

  // const becomeOrange = (e:MouseEvent)=>{
    
  // }

  onMounted(() => {
    document.addEventListener("mouseover", updateMouse);
  });
  onUnmounted(() => {
    document.removeEventListener("mouseover", updateMouse);
  });
  return { m, n }
}
export default myMouseOver;