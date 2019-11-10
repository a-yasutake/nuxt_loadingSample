<template>
  <div id="samplePage">
    <div class="main">
      <h1>サンプルページ2</h1>
      <button @click="back">戻る</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  components: {}
})
export default class Sample2 extends Vue {
  public mounted(): void {
    console.log("画面遷移後ローディング中");
    this.$nuxt.$loading.finish();
    console.log("画面遷移後ローディング終わり");
  }

  public back(): void {
    this.$router.push("Sample1");
  }
}
</script>
<style>
.main {
  margin-left: 10%;
}
</style>
