<template>
  <div
    class="
      lg:h-screen lg:grid lg:grid-cols-2 lg:gap-16 lg:px-24
      px-6
      lg:py-16
      py-6
      lg:pt-0
      pt-10
    "
  >
    <div>
      <div class="font-extrabold text-black lg:pb-16 pb-6 lg:text-3xl text-xl">
        We provide the best <br class="hidden lg:block" />
        process experience
      </div>
      <Timeline class="lg:mx-0 mx-6" />
    </div>
    <div
      data-aos="fade-left"
      data-aos-duration="1900"
      class="bg-center bg-no-repeat bg-cover h-full rounded-md ml-10"
      :style="{
        backgroundImage: ` url('/process.jpg')`,
      }"
    ></div>
  </div>
</template>

<script>
import Timeline from "~/components/Reusable/Timeline.vue";
export default {
  components: { Timeline },
};
</script>

<style lang="scss" scoped>
</style>