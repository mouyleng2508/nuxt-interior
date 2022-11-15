<template>
  <div class="lg:py-10 py-7 flex space-x-12">
    <div>
      <div
        id="number"
        data-value="17"
        class="lg:text-4xl text-xl text-primary font-bold"
      >
        0
      </div>
      <div class="lg:text-sm text-xs text-gray-500 lg:pt-4 pt-2">
        Years Experience
      </div>
    </div>
    <div>
      <div
        id="number"
        data-value="85"
        class="lg:text-4xl text-xl text-primary font-bold"
      >
        0
      </div>
      <div class="lg:text-sm text-xs text-gray-500 lg:pt-4 pt-2">
        Award Gained
      </div>
    </div>
    <div>
      <div
        id="number"
        data-value="537"
        class="lg:text-4xl text-xl text-primary font-bold"
      >
        0
      </div>
      <div class="lg:text-sm text-xs text-gray-500 lg:pt-4 pt-2">
        Furnitures sold
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: Number,
    text: String,
  },
  methods: {
    updateCount() {
      const number = document.getElementById("number");
      const value = parseInt(number.dataset.value);
      let initialValue = 0;

      const increaseCount = setInterval(() => {
        initialValue += 1;

        if (initialValue > value) {
          number.textContent = `${value}`;
          clearInterval(increaseCount);
          return;
        }

        number.textContent = `${initialValue}`;
      }, 10);
    },
  },

  mounted() {
    // window.addEventListener("scroll", this.updateCount);
    this.updateCount();
  },
};
</script>

<style lang="scss" scoped>
</style>