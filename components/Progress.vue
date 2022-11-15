<template>
  <div data-aos="fade-up" data-aos-duration="1100">
    <div>Tailwind</div>
    <span class="bar"><span class="html"></span></span>
  </div>
</template>

<script>
export default {};
</script>

<style >
.bar {
  background: #353b48;
  display: block;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.bar:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.bar span {
  height: 20px;
  float: left;
  background: linear-gradient(
    135deg,
    rgba(236, 0, 140, 1) 0%,
    rgba(252, 103, 103, 1) 100%
  );
}

.html {
  width: 90%;
  animation: html 3s;
}
@keyframes html {
  0% {
    width: 0%;
  }
  100% {
    width: 90%;
  }
}
</style>