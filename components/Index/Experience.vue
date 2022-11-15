<template>
  <div
    class="
      lg:h-screen lg:flex
      items-center
      justify-center
      lg:space-x-16 lg:px-24
      px-6
      lg:py-24
      py-6
    "
  >
    <div
      data-aos="fade-right"
      data-aos-duration="2300"
      class="lg:w-1/3 h-3/4 lg:flex hidden justify-end"
    >
      <img class="object-contain rounded-lg" src="/experience.jpg" alt="" />
    </div>
    <div class="lg:w-2/3 lg:pl-36">
      <div class="font-extrabold lg:text-3xl text-xl text-black lg:pb-6 pb-3">
        We provide you the <br class="hidden lg:block" />
        best experience
      </div>
      <div class="lg:text-sm text-xs lg:leading-6 leading-5 text-gray-600">
        You don't worry about the result because all of these interiors are
        <br class="hidden lg:block" />
        made by people who are professionals in their fields with an elegant and
        <br class="hidden lg:block" />
        luxurious style and with premuim quality materials.
      </div>

      <Number />

      <Progress />

      <!-- button -->
      <div>
        <button
          class="
            border border-gray-800
            py-3
            px-7
            lg:text-sm
            text-xs
            relative
            flex
            hover:bg-gray-100
          "
        >
          <div>Learn more</div>
          <div class="absolute -right-4 lg:bottom-0 bottom-2"><Arrow /></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "~/components/Icons/Arrow.vue";
import Number from "~/components/Reusable/Number.vue";
import Progress from "../Progress.vue";
export default {
  components: { Arrow, Number, Progress },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>