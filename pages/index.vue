<template>
  <div>
    <HeroSection />
    <Benefits />
    <Experience />
    <Process />
    <Customer />
    <div class="relative mt-52">
      <Subscribe class="absolute lg:-top-44 -top-64 lg:inset-x-36 inset-x-0" />
      <Footer />
    </div>
  </div>
</template>

<script>
import HeroSection from "~/components/Index/HeroSection.vue";
import Benefits from "~/components/Index/Benefits.vue";
import Experience from "~/components/Index/Experience.vue";
import Process from "~/components/Index/Process.vue";
import Customer from "~/components/Index/Customer.vue";
import Subscribe from "~/components/Index/Subscribe.vue";
import Footer from "~/components/Index/Footer.vue";
export default {
  components: {
    HeroSection,
    Benefits,
    Experience,
    Process,
    Customer,
    Subscribe,
    Footer,
  },
  name: "IndexPage",
};
</script>
