<template>
  <div class="ViewModal">
    <div id="modal">
      <h3>モーダルです</h3>
      <p>ここにコンテンツが入ります。</p>
      <div>
        <button @click="close">閉じる</button>
      </div>
    </div>
    <div id="overlay"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class ViewModal extends Vue {
  public close(): void {
    this.$parent.$data["viewFlg"] = false;
  }
}
</script>
<style>
/* https://studio-higasa.com/works/1009.html*/
#overlay {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.65);
}
#modal {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  max-width: 70vw;
  max-height: 70vh;
  box-sizing: border-box;
  padding: 32px;
  border-radius: 8px;
  background-color: #fff;
}
</style>
