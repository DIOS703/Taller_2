<template>
<div class="text-center">
    <div v-if="cargar">
    <b-spinner variant="dark" style="width: 5rem; height: 5rem" />
  </div>
    <div v-else class="row details">
      <div class="imagenMovie col">
        <img class="backDropImg" :src="movie.backdrop_path" :alt="movie.title" >   
      </div>
      <div class="col-md detalles">
      <div class="titulo">
      <h1 class="display-1">{{movie.title}}</h1>
    </div>
    <div class="info1 row ">
      <p class="col-md-6"> Release Date: {{ movie.release_date }}</p>
      <div class="col" v-for="genres in movie.genres" :key="genres.name">
        <button type="button" class="btn btn-outline-secondary">{{ genres.name }}</button>
      </div>
    </div>
    <div class="info2">
      <p>{{movie.overview}}</p>
    </div>
      </div>
    </div>
</div>        
</template>

<script>
import Movie from "@/models/Movie.js"
import api from "@/services/api.service.js"
export default {
    data() {
    return {
      cargar: true,
      movie: {},
    };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    async getMovie() {
      this.cargar= true;
      const { data } = await api.getMovie(this.$route.params.id);
      this.movie = new Movie(data); 
      this.cargar= false;
    },
  },
};
</script>

<style>
  .details{
    font-family: 'Trebuchet MS';
    margin-top: 80px !important;
    margin-right: 150px !important;
  }
  .imagenMovie{
    height: 300px !important;
    width: 533px !important;
    max-width: 680px !important;
  }
  .backDropImg{
    height: 300px !important;
    width: 533px !important;
    outline: 10px solid #212529;
  }
  .info1{
    margin-top: 20px !important;
    margin-bottom: 40px !important;
  }
</style>