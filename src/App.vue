<template>
    <div class="d-flex h-100 flex-column">
      <Header/>
      <Home/>
      <Footer/>
    </div>
</template>

<script>
    import Home from './components/Home.vue'
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        name: 'app',
        components: {
            Footer,
            Header,
            Home
        }
    }
</script>

<style>
    .bg-greeny {
        background: linear-gradient(45deg, rgba(0,175,102,1) 0%, rgba(0,195,137,1) 100%);
        animation: design-bg 8s ease infinite;
        background-size: 250% 250%;
    }

    @keyframes design-bg {
        0% {background-position: 0 0}
        50% {background-position: 100% 50%}
        100% {background-position: 0 100%}
    }

</style>
