<template>
  <div class="lg:px-24 px-6 lg:py-0 py-16">
    <div class="flex items-center space-x-5 lg:pb-32 pb-8">
      <div class="border border-b-2 lg:w-32 w-16 bg-primary"></div>
      <div class="font-extrabold lg:text-4xl text-xl">
        Benefits you get when <br class="hidden lg:block" />
        using our services
      </div>
    </div>

    <div class="grid md:grid-cols-3 grid-cols-1 lg:gap-16 pb-10">
      <Card
        title="Best Quality"
        subtitle="All of our furniture uses the best materials and choices for our customers."
      />
      <Card
        title="Free Shipping"
        subtitle="Free shipping everytime you buy furniture from us without exception."
      />
      <Card
        title="Warranty"
        subtitle="Everytime you buy our furniture products, you will get warranty without exception."
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Reusable/Card.vue";
export default {
  components: { Card },
};
</script>

<style lang="scss" scoped>
</style>