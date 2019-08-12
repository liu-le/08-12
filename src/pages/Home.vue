<template>
  <div class="home">
    <Silder :banner="banner"></Silder>
    <List :list="home" data-name="home"></List>
  </div>
</template>
<script>
import Silder from "../components/Silder";
import List from "@/components/List";

import { mapGetters } from "vuex";
export default {
  name: "home",
  components: { Silder, List },

  activated() {
    this.$store.dispatch("UPDATA_HOME");
    this.$store.dispatch("UPDATA_BANNER");
  },
  computed: mapGetters(["home", "banner"])
};
</script>
