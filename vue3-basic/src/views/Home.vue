<template>
  <div>
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <button @click="increase">+1</button>
    <h2>{{ greetings }}</h2>
    <button @click="updateGreeting">+!</button>
    <h2>x:{{x}},y:{{y}}</h2>
    <!-- <ul>
      <li v-for="number in numbers" :key="number">{{number}}</li>
    </ul>
    <h1>{{person.name}}</h1> -->
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
  onRenderTriggered,
  watch,
  onUnmounted
} from "vue";

export default {
  // setup() {
  //   // ref 是一个函数，它接受一个参数，返回的就是一个神奇的 响应式对象 。我们初始化的这个 0 作为参数包裹到这个对象中去，在未来可以检测到改变并作出对应的相应。
  //   const count = ref(0);
  //   const double = computed(() => {
  //     return count.value * 2;
  //   });
  //   const increase = () => {
  //     count.value++;
  //   };
  //   return {
  //     count,
  //     increase,
  //     double,
  //   };
  // },
  setup() {
    interface DataProps {
      count: number;
      double: number;
      increase: () => void;
      // numbers: number[];
      // person: {name?:string};
    }
    //生命周期钩子函数
    onMounted(() => {
      console.log("onMounted");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });

    //onRenderTriggered()接收参数用于调试
    onRenderTriggered((event) => {
      // console.log("onRenderTriggered")
      console.log(event);
    });

    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => data.count * 2),
    });
    const greetings = ref("");
    const updateGreeting = () => {
      greetings.value += "hello!";
    };

    //获取坐标
    const x =ref(0);
    const y =ref(0);
    const updateMouse = (e:MouseEvent) => {
      x.value = e.pageX;
      y.value = e.pageY;
    }
    onMounted(()=>{
      document.addEventListener('click',updateMouse);
    })
    onUnmounted(()=>{
      document.removeEventListener('click',updateMouse);
    })
    //watch
    //第一个参数为响应式对象greetings，参数可以是数组
    //第二个参数为改变对象的函数体
    watch([greetings,()=>data.count], (newValue, oldValue) => {
      console.log("old", oldValue);
      console.log("new", newValue);
      document.title = "updated " + greetings.value + " " + data.count;
    });

    const refData = toRefs(data);
    return {
      ...refData,
      greetings,
      updateGreeting,
      x,
      y
    };

    // const data: DataProps = reactive({
    //   count: 0,
    //   increase: () => {
    //     data.count++;
    //   },
    //   double: computed(() => data.count * 2),
    //   numbers:[3,4,5],
    //   person: {}
    // });
    // data.numbers[0] = 1;
    // data.person.name='xiaoming';
    // const refData = toRefs(data)
    // return {
    //   ...refData
    // };
  },
};
</script>
