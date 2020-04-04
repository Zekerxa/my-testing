<template>
    <div class="" :onload="load()">

           <div class="pt-3 bg-dark text-light position-fixed w-100 pb-2" style="z-index:9999;top:0;">
                <h4 class="text-uppercase">{{ ready_categories }} Movies</h4>
            </div>

        <div class="container">
            <div class="row " style="background:#000;">
                 
                  <div class="col-12 pt-5 mt-4">
                  </div>

                  <div class="col-4 latest" v-for="movie in movies" :key="movie">
                      <div  class="p-1">
                          <router-link :to="'ready?name='+movie.movies_name+'&photo='+movie.movies_photo+'&link='+movie.movies_link" >
                              <img class="w-100" :src="movie.movies_photo">
                              <div class="text-light">
                                 {{ movie.movies_name}}
                              </div>
                          </router-link>
                        </div>
                  </div>

                  <div class="col-4 latest" v-for="year in years" :key="year">
                      <div  class="p-1">
                          <router-link :to="'ready?name='+year.movies_name+'&photo='+year.movies_photo+'&link='+year.movies_link" >
                              <img class="w-100" :src="year.movies_photo">
                              <div class="text-light">
                                 {{ year.movies_name}}
                              </div>
                          </router-link>
                        </div>
                  </div>

            </div>
        </div>
    </div>
</template>

<script>
require("../views/Home.vue");
import all_movies from '../json/all_movies.json';  
export default {
    name: "categories",
    data(){
        return{
          ready_categories : '',
          ready_poster : '',
          ready_name : '',
          movies : [],
          years  : [],
        }
    },
    methods:{
         load(){
             this.ready_categories = this.$route.query.c; 

             this.movies = all_movies.movies.filter((e)=>{
                return e.categories == this.$route.query.c;
             })

              this.years = all_movies.movies.filter((y)=>{
                return y.years == this.$route.query.c;
             })
     
        },

    }
}
</script>

<style lang="scss">
  .latest{
    img{
      max-height: 170px;
      min-height: 170px;
    }
  }
</style>