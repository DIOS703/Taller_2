<template>
<div class=" mob justify-content-center col-sm">
    <div class="poster img-box">
        <router-link :to="{ name: 'Movie',params:  {id: movie.id} }">
            <img class="posterr" :src="movie.poster_path" >   
            <p class=" der">{{ movie.genero1 }}  |  ✩ {{ movie.vote_average }}</p>          
        </router-link>
    </div>
</div>
</template>

<script>
export default {
  props: {
    movie: {
      required: true,
      type: Object,
    },
  },
};
</script>
<style>
.mob{
  margin-left: 50px !important;
  margin-right: 50px !important;
  margin-bottom: 25px !important;
}
.posterr{
  width: 250px !important;
  height: 375px !important;
  outline: 10px solid #212529;
}
.der{
  font-family:'Trebuchet MS';
  text-shadow: 0 0 3px #000000, 0 0 5px #000000;
  color: white;
  position: relative;
  bottom: 28px;
}
a{
  text-decoration: none;
}

</style>
