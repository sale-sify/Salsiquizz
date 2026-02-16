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

    const NumberOfQuestions = ref(10);

    const selectedCategory = ref<Category | null>(null);

    const selectedDifficulty = ref<string>('');


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

            <h2>Paramètres du Quizz</h2>

            <div class="categories-container">
                <h3>Categorie selectionnee : {{ selectedCategory?.name || 'Aucune catégorie sélectionnée' }}</h3>
                <div class="category" v-for="category in categories" :key="category.id">
                    <button @click="selectedCategory = category">{{ category.name }}</button>
                </div>
            </div>

            <div class="number-of-questions-container">
                <h3>Nombre de questions :</h3>
                <input type="number" v-model="NumberOfQuestions" min="1" max="100">
            </div>

            <div class="difficulties-container">
                <h3>Difficulté : {{ selectedDifficulty || 'Aucune difficulté sélectionnée' }}</h3>
                <div class="difficulty" v-for="difficulty in ['Facile', 'Moyenne', 'Difficile']" :key="difficulty">
                    <button @click="selectedDifficulty = difficulty">{{ difficulty }}</button>
                </div>
            </div>


             
        </main>

    <Footer />
</template>



<style scoped>

h2 {
    text-align: center;
    width: 70%;
    font-family: var(--font-title);
    color: var(--text-color-one);
    font-size: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color-secondary);
}

.main-container {
    width: 60%;
    border: 1px solid var(--border-color-primary);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-primary);
    padding: 3rem;
    margin-bottom: 7vh;
    background: var(--bg-color-one);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
}

h3 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color-primary);
}

.categories-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 2rem;
    
}
.categories-container > h3 {
    width: 70%;
    font-family: var(--font-text);
    color: var(--text-color-one);
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color-primary);
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
    font-size: 1rem;
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
    box-shadow: 2px 2px 5px 3px var(--border-color-secondary);
    transform: scale(1.05);
    cursor: pointer;
}




.number-of-questions-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
.number-of-questions-container > h3 {
    width: 70%;
    text-align: center;
    font-family: var(--font-text);
    color: var(--text-color-one);
    font-size: 1.5rem;
}
.number-of-questions-container > input {
    width: 50%;
    min-height: 1.1rem;
    padding: 0.5rem;
    border: 1px solid var(--border-color-primary);
    border-radius: var(--border-radius);
    box-shadow: 2px 2px 5px var(--border-color-secondary);
    background: var(--bg-color-three);
}




.difficulties-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 3rem;
}
.difficulties-container > h3 {
    width: 70%;
    text-align: center;
    font-family: var(--font-text);
    color: var(--text-color-one);
    font-size: 1.5rem;
}
.difficulty {
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
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
}
.difficulty:hover {
    background: var(--bg-color-three);
    color: var(--text-color-two);
    box-shadow: 2px 2px 5px 3px var(--border-color-secondary);
    transform: scale(1.05);
    cursor: pointer;
}
.difficulty > button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    font-family: var(--font-text);
    color: var(--text-color-one);
    font-size: 1.2rem;
    cursor: pointer;
}



    

</style>