<template>
  <ol class="relative border-l border-gray-200 dark:border-gray-700">
    <li class="mb-10 ml-6" v-for="p in process" :key="p.index">
      <span
        class="
          flex
          absolute
          -left-5
          justify-center
          items-center
          w-10
          h-10
          bg-primary
          rounded-full
          ring-8 ring-white
          lg:text-base
          text-sm text-white
        "
      >
        {{ p.number }}
      </span>
      <h3
        class="
          flex
          items-center
          ml-5
          pt-2
          lg:text-xl
          text-base
          font-semibold
          text-gray-900
        "
      >
        {{ p.title }}
      </h3>

      <p class="lg:my-6 my-4 ml-5 lg:text-sm text-xs font-normal text-gray-500">
        {{ p.description }}
      </p>
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      process: [
        {
          number: "01",
          title: "Briefing",
          description:
            "First thing you determine the concept and model you want, then choose materials you want to use in your furniture.",
        },
        {
          number: "02",
          title: "Processing",
          description:
            "When the briefing process is complete and what the client wants has been achieved. Then we carry out the execution of the desired concept.",
        },
        {
          number: "03",
          title: "Finishing",
          description:
            "After the process is complete, we will immediate carry out the finishing stage and we do it carefully and make sure there are no mistakes.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>