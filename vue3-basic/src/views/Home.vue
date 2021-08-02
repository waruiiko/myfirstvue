<template>
  <div>
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <button @click="increase">+1</button>
    <ul>
      <li v-for="number in numbers" :key="number">{{number}}</li>
    </ul>
    <h1>{{person.name}}</h1>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive ,toRefs } from "vue";

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
      numbers: number[];
      person: {name?:string};
    }
    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => data.count * 2),
      numbers:[3,4,5],
      person: {}
    });
    data.numbers[0] = 1;
    data.person.name='xiaoming';
    const refData = toRefs(data)
    return {
      ...refData
    };
  },
};
</script>
