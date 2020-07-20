<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style scoped>
  .grid {
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  @media screen and (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 1024px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>