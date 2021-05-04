<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
.main {
  margin-left: 10%;
}

/* https://saruwakakun.com/html-css/reference/buttons#section1 */
button {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #0b4fe2; /*ボタン色*/
  color: #fff;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
  width: 100px;
}
button:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px); /*下に動く*/
  border-bottom: none; /*線を消す*/
}
</style>
