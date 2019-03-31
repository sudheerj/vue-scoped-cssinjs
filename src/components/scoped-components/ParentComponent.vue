<template>
  <div class="wrapper">
    Parent
    <ChildComponent></ChildComponent>
  </div>
</template>

<script>
  import ChildComponent from "./ChildComponent";
  export default {
    name: "ParentComponent",
    components: {
      ChildComponent
    }
  };
</script>
<style scoped>
  .wrapper {
    outline: 2px solid blue;
    color: black;
    padding: 40px;
    margin: 40px;
  }
</style>
