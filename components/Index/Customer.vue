<template>
  <div class="lg:h-screen lg:px-24 px-6 lg:py-16 py-6">
    <div class="lg:text-3xl text-xl font-extrabold">
      What our customer <br class="hidden lg:block" />
      are saying
    </div>

    <div
      class="
        flex
        lg:flex-row
        flex-col
        lg:space-y-0
        space-y-5
        lg:space-x-5 lg:mt-16
        mt-6
      "
    >
      <OpinionCard
        fullname="Jennie Ronald"
        position="Product Manager"
        profile="/person1.jpeg"
        title="<div>The results given are very <br class='hidden lg:block' />satisfying</div>"
        description='"Being able to work with the exterior is an extraodinary thing they
      provide excellent service and the given result are also very satisfying by
      giving elegant expression."'
      />
      <OpinionCard
        fullname="Lucas"
        position="Company Employee"
        profile="/person2.jpeg"
        title="<div>The service provided is very <br class='hidden lg:block' />good and friendly</div>"
        description='"At that time I wanted to make a chair, then I went to Luxurious to make the chair and after it was finished the results were unexpected. The result given are in accordance with what I want."'
      />
    </div>
  </div>
</template>

<script>
import OpinionCard from "~/components/Reusable/OpinionCard.vue";
export default {
  components: { OpinionCard },
};
</script>

<style lang="scss" scoped>
</style>