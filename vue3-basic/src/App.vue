<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view />
    <HelloWorld />
    <button @click="openModal">modal</button>
    <modal :isOpen="modalIsOpen" @close-modal="onModalClose">MyModal!</modal>
    <p>{{ err }}</p>
    <Suspense>
      <template #default>
        <div>
          <async-show />
          <dog-show />
        </div>
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script>
import modal from "./components/Modal.vue";
import HelloWorld from "./components/HelloWorld.vue";
import AsyncShow from "./components/AsyncShow.vue";
import DogShow from "./components/DogShow.vue";
import { defineComponent, ref, onErrorCaptured } from "vue";
export default defineComponent({
  components: { modal, HelloWorld, AsyncShow, DogShow },

  setup() {
    //抓取错误（修改DogShow.vue组件的链接）
    const err = ref(null);
    onErrorCaptured((error) => {
      err.value = error;
      return true;
    });

    const modalIsOpen = ref(false);
    const openModal = () => {
      modalIsOpen.value = true;
    };
    const onModalClose = () => {
      modalIsOpen.value = false;
    };
    return {
      modalIsOpen,
      openModal,
      onModalClose,
      err,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
