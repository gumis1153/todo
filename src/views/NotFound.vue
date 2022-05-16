<template>
  <n-grid cols="12" item-responsive x-gap="24">
    <n-grid-item offset="1 640:3" span="10 640:6">
      <n-result
        :description="joke"
        status="404"
        style="margin-top: 50px"
        title="404 Not Found"
      >
        <template #footer>
          <n-button :loading="loading" @click="getJoke"
            >Find Something Funny</n-button
          >
          or
          <router-link to="/">Go Home</router-link>
        </template>
      </n-result>
    </n-grid-item>
  </n-grid>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import { NResult, NButton, NGrid, NGridItem } from "naive-ui";
import axios from "axios";

export default {
  components: {
    NResult,
    NButton,
    NGrid,
    NGridItem,
  },

  setup() {
    const joke = ref("You know life is always ridiculous.");
    const loading = ref(false);

    const getJoke = () => {
      loading.value = true;

      axios
        .get("https://v2.jokeapi.dev/joke/Any?type=single")
        .then(function (response) {
          joke.value = response.data.joke;
          loading.value = false;
        })
        .catch(function (error) {
          loading.value = false;
          console.error(error);
        });
    };

    onBeforeMount(() => {
      getJoke();
    });

    return {
      joke,
      getJoke,
      loading,
    };
  },
};
</script>
