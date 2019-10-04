<template>
  <div class="tabs">
    <router-link
      class="tab"
      v-for="item in tabs"
      :key="item.name"
      :to="item.path"
      v-html="item.name"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    tabs: [
      {
        name: "1",
        path: "/path1"
      },
      {
        name: "2",
        path: "/path2"
      },
      {
        name: "3",
        path: "/path3"
      },
      {
        name: "4",
        path: "/path4"
      },
      {
        name: "5",
        path: "/path5"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.tabs {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: $tabs-height;
  display: flex;
  background-color: $black2;
  .tab {
    color: $white;
    width: percentage(1/5);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
}
</style>
