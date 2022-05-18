<template>
  <div class="home">
    <n-grid cols="12" item-responsive style="margin-top: 24px" x-gap="24">
      <n-grid-item span="12" style="margin-bottom: 24px">
        <n-h1>
          <n-text style="text-align: center"> TaskApp</n-text>
        </n-h1>
      </n-grid-item>

      <n-grid-item offset="1 640:2" span="10 640:4 1024:4">
        <n-h2>
          <n-text type="primary"> Clue</n-text>
        </n-h2>

        <n-text>
          Store daily tasks in one place. Migrate all tasks to other devices by
          creating account.
        </n-text>

        <n-text>
          Menage tasks set their priority and watch what you left to do.
        </n-text>
      </n-grid-item>
      <n-grid-item offset="1 640:0" span="10 640:4 1024:4">
        <n-h2>
          <n-text type="info"> How it works</n-text>
        </n-h2>

        <n-h3>
          <n-text> When user logged in</n-text>
        </n-h3>
        <n-text>
          All tasks are stored in browser, so all tasks will available until
          they be removed by you.
        </n-text>

        <n-text>
          After creating an account all tasks stored in browser can be assigned
          to account.
        </n-text>

        <n-card>
          <n-h3>
            <n-text> Tech stack:</n-text>
          </n-h3>

          <n-ul>
            <n-li>
              <n-a href="https://vuejs.org/" target="_blank">
                Vue 3 (Composition API)
              </n-a>
            </n-li>
            <n-li>
              <n-a href="https://vuex.vuejs.org/" target="_blank"> Vuex </n-a>
            </n-li>
            <n-li>
              <n-a href="https://router.vuejs.org/" target="_blank">
                Vue Router
              </n-a>
            </n-li>
            <n-li>
              <n-a
                href="https://www.naiveui.com/en-US/os-theme"
                target="_blank"
              >
                Naive UI
              </n-a>
            </n-li>
            <n-li>
              <n-a href="https://axios-http.com/docs/intro" target="_blank">
                Axios
              </n-a>
            </n-li>
            <n-li>
              <n-a href="https://laravel.com/" target="_blank">
                <s>Laravel</s>
              </n-a>
            </n-li>
            <n-li>
              <n-a href="https://www.php.net/" target="_blank">
                <s>PHP</s>
              </n-a>
            </n-li>
          </n-ul>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup>
import { NCard } from "naive-ui";
</script>
