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
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
