<template>
  <div><slot /></div>
</template>
<script lang="ts" src="./index.ts"></script>
<style>
  @import "../../asset/css/common.css";
  html {
    font-size: calc(200vw / 15);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  @media screen and (max-width: 300px) {
    html {
      font-size: 43px;
    }
  }

  @media screen and (min-width: 650px) {
    html {
      font-size: 87px;
    }
  }
</style>
