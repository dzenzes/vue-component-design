<template>
  <button type="button" class="btn">
    <span>
      <loading v-if="isLoading" color="#fff" size="12px" />
      <template v-else>
        <font-awesome-icon v-if="iconLeftName" :icon="iconLeftName" />
        {{ text }}
        <font-awesome-icon v-if="iconRightName" :icon="iconRightName" />
      </template>
    </span>
  </button>
</template>

<script>
import Loading from "vue-spinner/src/PulseLoader.vue"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

export default {
  props: ["text", "iconLeftName", "iconRightName", "isLoading"],
  components: { Loading, FontAwesomeIcon }
}
</script>

<style>
.btn {
  position: relative;
  display: block;
  padding: 0;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: #2ecc71;
  color: #ecf0f1;
  transition: background-color 0.3s;
}

.btn:hover,
.btn:focus {
  background-color: #27ae60;
}

.btn > * {
  position: relative;
}

.btn span {
  display: block;
  padding: 12px 24px;
}
</style>
