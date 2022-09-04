<template>
  <div class="h-screen lg:py-32 relative">
    <!-- <div
      class="
        bg-primary
        text-white
        flex flex-col
        justify-center
        items-start
        px-10
        max-w-sm
      "
    >
      <div class="text-4xl font-bold capitalize">
        we help you make modern interior
      </div>
      <div class="text-sm font-light">
        We will help you to make an elegant and Luxurious interior designed by
        professional interior designer.
      </div>
    </div> -->
    <div
      class="
        bg-center bg-no-repeat bg-cover
        h-full
        lg:rounded-md lg:ml-48 lg:mr-32
      "
      :style="{
        backgroundImage: ` url('/living_room.jpg')`,
      }"
    ></div>
    <div
      class="
        bg-primary bg-opacity-80
        max-w-md
        text-white
        absolute
        top-1/3
        py-9
        lg:px-24
        px-6
        flex flex-col
        justify-center
        items-start
      "
    >
      <div class="lg:text-4xl lg:leading-normal text-2xl leading-7 font-bold">
        We help you <br />
        make modern <br />
        interior
      </div>
      <div class="lg:text-sm text-xs font-meduim pt-4">
        We will help you to make an elegant and Luxurious interior designed by
        professional interior designer.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>