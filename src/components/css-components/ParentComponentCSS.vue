<template>
  <div class="wrapperCSS">
    Parent
    <ChildComponentCSS></ChildComponentCSS>
  </div>
</template>

<script>
  import ChildComponentCSS from "./ChildComponentCSS";
  export default {
    name: "ParentComponentCSS",
    components: {
      ChildComponentCSS
    }
  };
</script>
<style>
  .wrapperCSS {
    outline: 2px solid blue;
    color: black;
    padding: 40px;
    margin: 40px;
  }
</style>
