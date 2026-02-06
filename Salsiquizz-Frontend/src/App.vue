<script setup lang="ts">

    import { useRouter } from 'vue-router';
    import { onMounted } from 'vue';
    const router = useRouter();
    onMounted(() => {
        router.push('/');
    });

</script>



<template>
    <section>
        <router-view></router-view>
    </section>
    
</template>



<style scoped>


    section {
        margin: 0;
        background: var(--bg-color-one);  
    }


</style>
