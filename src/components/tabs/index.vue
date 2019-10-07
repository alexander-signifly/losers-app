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
        name: "home",
        path: "/"
      },
      {
        name: "seasons",
        path: "/seasons"
      },
      {
        name: "play",
        path: "/play"
      },
      {
        name: "badges",
        path: "/badges"
      },
      {
        name: "players",
        path: "/players"
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
