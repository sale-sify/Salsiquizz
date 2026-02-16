<script setup lang="ts">

    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import { useRouter } from 'vue-router';
    import { RouterLink } from 'vue-router';
    import { ref, onMounted } from 'vue';

    const router = useRouter();

    interface Category {
        id: number;
        name: string;
    }

    const categories = ref<Category[]>([]);

    const selectedCategory = ref<Category | null>(null);


    async function fetchCategories() {
        try {
            const response = await fetch('/quizzapi/api/v2/quiz/categories');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            categories.value = data;
            for (const category of categories.value) {
                console.log(category.name);
                console.log(category.id);
                category.name = category.name.charAt(0).toUpperCase() + category.name.slice(1);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    onMounted(fetchCategories);

   

    

</script>



<template>
    <Header />

        <main class="main-container">

            <div class="categories-container">
                <h3>Categories : (choisis une seulement)</h3>
                <div class="category" v-for="category in categories" :key="category.id">
                    <button @click="selectedCategory = category">{{ category.name }}</button>
                </div>
            </div>
             
        </main>

    <Footer />
</template>



<style scoped>

.main-container {
    width: 50%;
    max-height: 78vh;
    border: 1px solid var(--border-color-primary);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-primary);
    padding: 3rem;
    background: var(--bg-color-one);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    overflow-x: hidden;
}

.categories-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 2rem;
    overflow-y: hidden;
}

.categories-container > h3 {
    width: 100%;
    font-family: var(--font-text);
    color: var(--text-color-one);
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
}

.category {
    width: 35%;
    padding: 0.7rem;
    border: 1px solid var(--border-color-primary);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-secondary);
    background: var(--bg-color-one);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-text);
    color: var(--text-color-one);
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;
}
.category > button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    font-family: var(--font-text);
    color: var(--text-color-one);
    font-size: 1.2rem;
    cursor: pointer;
}

.category:hover {
    background: var(--bg-color-three);
    color: var(--text-color-two);
    transform: scale(1.1);
    cursor: pointer;
}



    

</style>