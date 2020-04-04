<template>
    <div class="ready" :onload="load()">
        <div class="container">
            <div class="row">
                <div class="col-12 p-0">
                    <router-link style="position:absolute;width:100vw;z-index:9999;top:-10px;" to="/">
                           <span class="float-right pr-2 fa-3x text-warning font-weight-bold">&times;</span>
                    </router-link>
                    <div id="cover">                  
                          
                    </div>
                    <img class="w-100" :src="ready_poster" alt="">
                </div>

                <div class="col-12 p-3">
                    <b>Movies : {{ ready_name }} </b>    
                </div>
            </div>
        </div>

        <movies :watch_link="ready_link" />

        <!-- <div class="container">
            <div class="row">
               <a :href="watch_link" :download="watch_link">
                   <button class="btn btn-info">Download</button>
               </a>
            </div>
        </div> -->
        
    </div>
</template>

<script>
import movies from '../views/Watch.vue';
require("../views/Home.vue");
export default {
    name : "ready",
    data(){
        return{
          ready_link : '',
          ready_poster: '',
          ready_name  : ''
        }
    },
    methods:{
        load(){
            this.ready_name = this.$route.query.name;
            this.ready_poster = this.$route.query.photo;
            this.ready_link = this.$route.query.link;
        }
    },
    components: {
    movies
  },
  props: ["ready_link"],
}
</script>

<style lang="scss">
.ready{
  #cover{
      text-align: center;
      position:absolute;
      width: 100%;
      height: 100vh;
      color: rgb(84, 20, 156);
      background: rgba(235, 231, 231, 0.158);
      padding: 20px;
      margin-bottom: 0;
      font-weight: bold;
  }
}
</style>