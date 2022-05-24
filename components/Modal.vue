<template>
  <transition name="modal">
    <div v-if="show" class="modal">
      <div class="modal-background" @click="$emit('close')" />
      <div class="modal-content">
        <slot />
      </div>
      <button class="modal-close" aria-label="close" @click="$emit('close')">
        X
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.modal {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
}
.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.modal-content {
  position: relative;
  margin: 0 auto;
  max-height: calc(100vh - 40px);
  background: white;
  border-radius: 10px;
  padding: 2rem;
  flex: 0 0 540px;
}

.modal-content > * {
  overflow: auto;
}

.modal-close {
  position: absolute;
  top: 1vh;
  right: 1vw;
}
</style>
