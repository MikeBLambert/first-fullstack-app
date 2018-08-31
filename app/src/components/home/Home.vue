<template>
    <section>
        <div id="home-container">
            <h1>Welcome to Your Personal World Travel Log!</h1>
            <router-link to="/countries">
                <button>
                    View Your Travel Log
                </button>
            </router-link>
            <!-- <router-view></router-view> -->
        </div>
    </section>
</template>

<script>
export default {

};
</script>

<style scoped>

h1 {
    text-align: left;
    font-size: 50px;

}

</style>
