<template lang="html">
  <div class="loading-page" v-if="loading">
    <p>読み込み中...</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class Loading extends Vue {
  protected loading: boolean = true;

  public start() {
    this.loading = true;
  }

  public finish() {
    this.loading = false;
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>