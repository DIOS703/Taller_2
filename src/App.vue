<template>
  <div class="navbarr" id="app">
    <nav class="navbar hola navbar-expand-lg navbar-dark bg-dark">
  <div class="collapse navbar-collapse" id="navbarNav">
        <span class="navbar-brand mb-0 h1"> VERPELISGRATIS</span>
    <ul class="navbar-nav"> 
      <li class="nav-item">
        <router-link class="nav-link" to="/popularmovies">Popular Films</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link"  to="/topratedmovies">Top Rated Films</router-link>
      </li>
    </ul>
  </div>
</nav>
      <router-view/>
<footer class="text-center footer">
  PAGINA CREADA POR IGNACIO CHAVEZ. TODOS LOS DERECHOS RESERVADOS.
</footer>
</div>
</template>
<style>
 .hola{
   margin-bottom: 50px !important;
 }
 a{
   border-radius: 15px !important;
   margin-left: 15px !important;
 }
 span{
  margin-left: 15px !important; 
 }
 body{ 
   background: rgb(241, 236, 236) !important;
 }
 .footer{
   margin-top: 50px !important;
 }
</style>