<template>
  <div :onload="load()">
              <div class="row" style="background:#111;">              
            <!-- ------------- Latest Relase --------------- -->
            <div class="col-12 text-light pt-1 p-0">
                 <div class="p-2">
                    <h5>Latest Release</h5>
                 </div>

                 <div class="latest">
                    <carousel :dots="false" :nav="false">
                        <div v-for="movie in movies" :key="movie" class="p-1">
                             <router-link :to="'ready?name='+movie.movies_name+'&photo='+movie.movies_photo+'&link='+movie.movies_link" >
                              <img :src="movie.movies_photo">
                              <div class="text-light small pt-2">
                                 {{ movie.movies_name}}
                              </div>
                          </router-link>
                        </div>
                     </carousel>
                 </div>

            </div>
            
            <!-- --------------- Cartoon Movies --------------- -->
            <div class="col-12 text-light pt-1 p-0">
                 <div class="p-2">
                    <h5>Cartoon</h5>
                 </div>

                 <div class="latest">
                    <carousel :dots="false" :autoplay="true" :nav="false">
                        <div v-for="cartoon in cartoons" :key="cartoon" class="p-1">
                             <router-link :to="'ready?name='+cartoon.movies_name+'&photo='+cartoon.movies_photo+'&link='+cartoon.movies_link" >
                              <img :src="cartoon.movies_photo">
                              <div class="text-light small pt-2">
                                 {{ cartoon.movies_name}}
                              </div>
                          </router-link>
                        </div>
                     </carousel>
                 </div>
            </div>
            
            <!-- --------------- Action Movies -------------- -->
            <div class="col-12 text-light pt-1 p-0">
                 <div class="p-2">
                    <h5>Action</h5>
                 </div>

                 <div class="latest">
                    <carousel :dots="false" :autoplay="true" :nav="false">
                        <div v-for="action in actions" :key="action" class="p-1">
                             <router-link :to="'ready?name='+action.movies_name+'&photo='+action.movies_photo+'&link='+action.movies_link" >
                              <img :src="action.movies_photo">
                              <div class="text-light small pt-2" >
                                 {{ action.movies_name}}
                              </div>
                          </router-link>
                        </div>
                     </carousel>
                 </div>
            </div>

             <!-- --------------- Horror Movies -------------- -->
            <div class="col-12 text-light pt-1 p-0">
                 <div class="p-2">
                    <h5>Horror</h5>
                 </div>

                 <div class="latest">
                    <carousel :dots="false" :autoplay="true" :nav="false">
                        <div v-for="horror in horrors" :key="horror" class="p-1">
                             <router-link :to="'ready?name='+horror.movies_name+'&photo='+horror.movies_photo+'&link='+horror.movies_link" >
                              <img :src="horror.movies_photo">
                              <div class="text-light small pt-2" >
                                 {{ horror.movies_name}}
                              </div>
                          </router-link>
                        </div>
                     </carousel>
                 </div>
            </div>

            <!-- --------------- Drama Movies -------------- -->
            <div class="col-12 text-light pt-1 p-0">
                 <div class="p-2">
                    <h5>Drama</h5>
                 </div>

                 <div class="latest">
                    <carousel :dots="false" :autoplay="true" :nav="false">
                        <div v-for="drama in dramas" :key="drama" class="p-1">
                             <router-link :to="'ready?name='+drama.movies_name+'&photo='+drama.movies_photo+'&link='+drama.movies_link" >
                              <img :src="drama.movies_photo">
                              <div class="text-light small pt-2" >
                                 {{ drama.movies_name}}
                              </div>
                          </router-link>
                        </div>
                     </carousel>
                 </div>
            </div>

            <!-- --------------- Adult Movies -------------- -->
            <div class="col-12 text-light pt-1 p-0">
                 <div class="p-2">
                    <h5>Adult [ 18+/20+ ]</h5>
                 </div>

                 <div class="latest">
                    <carousel :dots="false" :autoplay="true" :nav="false">
                        <div v-for="adult in adults" :key="adult" class="p-1">
                             <router-link :to="'ready?name='+adult.movies_name+'&photo='+adult.movies_photo+'&link='+adult.movies_link" >
                              <img :src="adult.movies_photo">
                              <div class="text-light small pt-2" >
                                 {{ adult.movies_name}}
                              </div>
                          </router-link>
                        </div>
                     </carousel>
                 </div>
            </div>

          </div>
  </div>
</template>
<script>
import carousel from 'vue-owl-carousel';
import all_movies from '../json/all_movies.json';

export default {
    name:"path",
    data(){
        return{
          movies  : [],
          cartoons: [],
          actions : [],
          horrors : [],
          mysterys: [],
          dramas  : [],
          adults  : []
        }
    },
    methods:{
      load(){
         this.movies = all_movies.movies.reverse();

         this.cartoons = all_movies.movies.filter((c)=>{
            return c.type == "cartoon";
         });

         this.actions = all_movies.movies.filter((a)=>{
            const result = a.type == "action"
            return result;
         })

         this.horrors = all_movies.movies.filter((h)=>{
            const result = h.type == "horror";
            return result;
         })

         this.mysterys = all_movies.movies.filter((m)=>{
            const result = m.type == "mystery";
            return result;
         })

         this.adults = all_movies.movies.filter((d)=>{
            const result = d.type == "adult";
            return result;
         })

         this.dramas = all_movies.movies.filter((dra)=>{
            const result = dra.type == "drama";
            return result;
         })

      }
    },
    components:{
     carousel
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