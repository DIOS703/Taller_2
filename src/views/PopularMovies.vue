<template>
<div class="text-center">
  <div v-if="cargar">
    <b-spinner variant="dark" style="width: 5rem; height: 5rem" />
  </div>
  <div v-else class="d-flex TopRatedMovies row mx-0">
      <MovieCard v-for="mov in newData" :key="mov.title" :movie="mov">
        {{ mov.title }}
      </MovieCard>
  </div>
    <button class="btn btn-dark m-2" @click="getMovies(page + 1)">Ver Mas</button>
</div>
</template>

<script>
import Movie from "@/models/Movie.js"
import api from "@/services/api.service.js"
import MovieCard from '../components/MovieCard.vue';
export default {
  components: { MovieCard },
  data() {
    return {
      cargar: true,
      page: 1,
      newData : [],
    };
  },
  mounted(){
    this.getMovies(1);
  },
  methods: {
    async getMovies(page){
      this.page = page;
      this.cargar= true;
      const { data } = await api.getPopular(this.page);
      this.newData.push(...data.results);
      for (let i = 0; i < this.newData.length; i++) {
      this.newData[i] = await this.getMoviebyId(this.newData[i].id);
      }
      this.newData = await Promise.all(this.newData.map((movie) => this.getMoviebyId(movie.id)));
      this.cargar = false;
    },
    async getMoviebyId(id) {
      const { data } = await api.getMovie(id);
      return new Movie(data);
    },
  },
};
</script>