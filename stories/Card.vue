<template>
  <div class="card">
    <header class="card__header">
      <slot name="header" />
    </header>
    <main class="card__content">
      <slot />
    </main>
    <footer class="card__actions">
      <slot name="actions" />
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #404040;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0.4px;
}

.card {
  display: inline-block;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  margin: 20px;
  position: relative;
  margin-bottom: 50px;
  transition: all 0.2s ease-in-out;
  padding: 20px;
}

.card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 54px;
}

.card__header {
}

.card__content {
  background: #fff;
}

.card__content p {
  margin-bottom: 0px;
}
</style>
