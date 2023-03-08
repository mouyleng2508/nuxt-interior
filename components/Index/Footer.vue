<template>
  <div class="bg-primary lg:py-24 lg:pt-32 py-10 lg:px-20 md:px-16 px-6">
    <div class="grid lg:grid-cols-6 grid-cols-1 lg:gap-8">
      <div class="mb-4 col-span-2">
        <h2 class="mb-3 lg:text-xl text-sm font-extrabold text-white">
          Luxurious
        </h2>
        <p class="text-gray-300 text-sm">
          We will help you to make an elegant and <br class="hidden lg:block" />
          luxurious interior design by a <br class="hidden lg:block" />
          professional interior designer.
        </p>

      </div>
      <div class="mb-4" v-for="i in Items" :key="i.index">
        <h2 class="mb-4 lg:text-base text-sm font-semibold text-white">
          {{ i.title }}
        </h2>
        <ul class="text-gray-300" v-for="s in i.submenu" :key="s.title">
          <li class="
                                            lg:text-sm
                                            text-xs
                                            pb-1
                                            hover:underline
                                            capitalize
                                            font-normal
                                          ">
            {{ s.title }}
          </li>
        </ul>
      </div>

      <!-- get in touch -->
      <div class="mb-4">
        <h2 class="mb-3 lg:text-base text-sm font-semibold text-white">
          Get in touch
        </h2>

        <div class="py-3 text-gray-300 lg:text-sm lg:leading-7 text-xs">
          Question or feedback? <br />
          We'd like to hear from you
        </div>

        <div class="flex space-x-3 text-gray-200">
          <Instagram />
          <Facebook />
          <Twitter />
        </div>
      </div>
    </div>

    <div class="lg:pt-10 pt-5">
      <hr />
    </div>

    <!-- copy right -->
    <div class="
                                      flex
                                      lg:flex-row
                                      flex-col
                                      justify-center
                                      pt-4
                                      text-gray-300
                                      font-light
                                      lg:text-sm
                                      text-xs
                                    ">
      <div>©2022, All rights reserved<span class="px-2"> | </span> </div>
      <div class=" text-gray-300 lg:text-sm text-xs">
        Developed by
        <span class="hover:underline font-semibold"><a href="#" target="_blank">Heng
            Mouyleng</a></span>
        Using
        <span class="underline font-semibold "><a href="https://nuxtjs.org/" target="_blank">Nuxtjs</a>
        </span>
        x
        <span class="underline font-semibold"><a href="https://tailwindcss.com/" target="_blank">Tailwind</a></span>
      </div>
    </div>
  </div>
</template>

<script>
import Instagram from "~/components/Icons/Instagram.vue";
import Facebook from "~/components/Icons/Facebook.vue";
import Twitter from "~/components/Icons/Twitter.vue";
export default {
  components: {
    Instagram,
    Facebook,
    Twitter,
  },
  data() {
    return {
      Items: [
        {
          title: "About us",
          submenu: [
            { title: "About" },
            { title: "Features" },
            { title: "News" },
            { title: "Careers" },
          ],
        },
        {
          title: "Company",
          submenu: [
            { title: "Our Team" },
            { title: "Partner with us" },
            { title: "FAQ" },
            { title: "Blog" },
          ],
        },
        {
          title: "Support",
          submenu: [
            { title: "Account" },
            { title: "Support center" },
            { title: "Feedback" },
            { title: "Contact us" },
            { title: "Accessibility" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>