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
import axios from "axios";

@Component({
  components: {}
})
export default class Sample1 extends Vue {
  public mounted(): void {
    // this.$nextTick(() => {
    setTimeout(() => this.$nuxt.$loading.finish(), 500);
    // });
  }

  async next() {
    // ローディング開始
    this.$nuxt.$loading.start();

    // API通信
    const zipcode = "7128032";
    await axios
      .get(`https://api.zipaddress.net/?zipcode=${zipcode}`)
      .then(function(response) {
        console.log("レスポンス書く");
        console.log(response);
      })
      .catch(function(response) {
        console.log(response);
      });

    // ローディング終了
    this.$nuxt.$loading.finish();

    // 通信終了後に画面遷移
    this.$router.replace("Sample2");
  }
}
</script>
<style>
.main {
  margin-left: 10%;
}
</style>
