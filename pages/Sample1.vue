<template>
  <div id="samplePage1">
    <div class="main">
      <h1>サンプルページ1</h1>
      <button @click="next">次へ</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  components: {},
})
export default class Sample1 extends Vue {
  public mounted(): void {
    setTimeout(() => this.$nuxt.$loading.finish(), 300);
  }

  async next() {
    // ローディング開始
    this.$nuxt.$loading.start();

    // 何かしらの通信（今回は3秒待たせてみる）
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // ローディング終了
    this.$nuxt.$loading.finish();

    // 通信終了後に画面遷移
    this.$router.replace("Sample2");
  }
}
</script>
<style></style>
