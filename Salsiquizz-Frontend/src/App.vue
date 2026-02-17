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
        inset: 0;
        background: var(--bg-color-one); 
        background-image: url("../src/assets/images/bg-props.png");
        background-color: rgba(150, 148, 125, 0.6);
        background-blend-mode: overlay;
        background-position: center;
        
    }


</style>
