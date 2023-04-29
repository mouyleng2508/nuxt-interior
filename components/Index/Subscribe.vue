<template>
  <div class="
          flex flex-col
          justify-center
          items-center
          lg:px-24
          px-6
          lg:py-16
          py-6
          lg:pt-0
          pt-20
          text-center
        ">
    <div class="font-extrabold lg:text-4xl text-xl">
      Subscribe to get the latest <br class="hidden lg:block" />
      news about us
    </div>
    <div class="font-medium text-sm text-gray-500 py-4">
      We recommended you to subscrobe to our newspaper, enter your
      <br class="hidden lg:block" />
      email below to get our daily update about us.
    </div>
    <div class="relative w-full">
      <!-- <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div> -->
      <input type="search" id="search" class="
              block
              p-4
              lg:pl-6
              w-full
              lg:text-sm
              text-xs text-gray-900
              bg-gray-50
              border border-gray-300 focus:outline-none
            " placeholder="Enter your email address" required />
      <button type="submit" class="
              text-white
              absolute
              right-2.5
              bottom-2.5
              bg-primary
              font-medium
              lg:text-sm
              text-xs
              lg:px-6
              px-4
              py-2
            ">
        Subscribe
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>