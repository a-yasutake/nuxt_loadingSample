<template>
  <div id="samplePage2">
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
 

  public mounted(): void {}

  public back(): void {
    this.$router.replace("Sample1");
  }
}
</script>
<style>
.main {
  margin-left: 10%;
}
</style>
