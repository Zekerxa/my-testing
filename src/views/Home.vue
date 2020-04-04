<template>
  <div :onload="load()">

    <div class="searchbar" v-if="searchbar">
       <i @click="search" class="fa fa-search text-light pt-1 d-inline-block float-left" style="outline:none;font-size:21px;"></i><input class=""  v-model="Search" placeholder="Search..." type="text" @keyup.prevent="search" />
        <button @click="cancel" class="cancel">Cancel</button>  
    </div>
 
     <div class="searchresult" v-show="show">
       <div class="pt-2 " v-show="show">
         <h5 class="text-light pl-3">Search Key = {{ Search }}</h5>
         <hr class="bg-light">
       </div>
        <div
          v-for="d in result"
          :key="d"
          class="card col-4 d-inline-block border-0 text-light"
          
          style="list-style:none;"
        >
        
          <div class="card-body p-0" >
            <router-link :to="'ready?name='+d.movies_name+'&photo='+d.movies_photo+'&link='+d.movies_link" >
              <div>
                <img style="width:100%;max-height:120px;" :src="d.movies_photo" alt />
              </div>
            </router-link>


            <div class="mt-2 small pt-2">{{ d.movies_name }}</div>
            <hr />
          </div>
        </div>
    </div>
     
    <!-- --------------------------------------------------------------------------------- -->
    <div class="container">
          <!-- ---------------------------- Nav Only ------------------------------------- -->
          <div class="row justify-content-center">
             <div class="col-12 position-fixed w-100" :style="{background : scrollchange}" style="z-index:1000;">
                 <span  @click="searchicon"><i class="fa fa-search pt-3 pb-3 text-light"></i></span>
                 <span type="button" style="outline:none;" class="float-right mt-2 text-light" v-b-modal.modal-1>
                    <i class="fas fa-2x fa-bars" style="outline:none;"></i>
                  </span>
             </div>     
          </div>
       
          <carouselhero></carouselhero>
   
          <moviespath></moviespath>
      
    </div>

    <div class="footer"></div>

   <!-- ----------------------- CATEGORIES NAVIGATION  ------------------------------>
      <b-modal id="modal-1" style="background:#333;" title="Categories" hide-footer="">
        <ul class="navbar-nav mr-auto" style="list-style:none;min-height:100vh;">
          <router-link to="/categories?c=English">
            <li class="nav-item p-4 text-center text-light">ENGLISH MOVIES</li>
          </router-link>
          <router-link to="/categories?c=Korea">
            <li class="nav-item p-4 border-top text-center text-light">KOREA MOVIES</li>
          </router-link>
         <router-link to="/categories?c=India">
            <li class="nav-item p-4 border-top text-center text-light">INDIA MOVIES</li>
          </router-link>
          <router-link to="/categories?c=China">
            <li class="nav-item p-4 border-top text-center text-light">CHINA MOVIES</li>
          </router-link>
          <router-link to="/categories?c=Thai">
            <li class="nav-item p-4 border-top border-bottom text-center text-light">THAI MOVIES</li>
          </router-link>
          <router-link to="">
            <li class="nav-item p-4 border-top border-bottom text-center text-white-50">COMING SOON</li>
          </router-link>
          <!-- --------------------- Years ------------------------ -->
          <div class="text-center">
              <li class="nav-item p-4 text-center text-light" v-b-toggle.years variant="primary">SELECT YEARS</li>
              <b-collapse id="years">
                 <div class="container">
                   <div class="row mt-1 justify-content-center">
                     <div class="col-3 text-center">
                        <router-link to="/categories?c=2020">
                         <li class="nav-item p-2 text-center text-light">2020</li>
                       </router-link>
                     </div>
                     <div class="col-3 text-center">
                        <router-link to="/categories?c=2019">
                         <li class="nav-item p-2 text-center text-light">2019</li>
                       </router-link>
                     </div>
                     <div class="col-3 text-center">
                       <router-link to="/categories?c=2018">
                         <li class="nav-item p-2 text-center text-light">2018</li>
                       </router-link>
                     </div>
                     <div class="col-3 text-center">
                        <router-link to="/categories?c=2017">
                         <li class="nav-item p-2 text-center text-light">2017</li>
                       </router-link>
                     </div>
                     <div class="col-3 text-center">
                        <router-link to="/categories?c=2016">
                         <li class="nav-item p-2 text-center text-light">2016</li>
                       </router-link>
                     </div>

                     <div class="col-3 text-center">
                        <router-link to="/categories?c=2015">
                         <li class="nav-item p-2 text-center text-light">2015</li>
                       </router-link>
                     </div>
                     <div class="col-3 text-center">
                       <router-link to="/categories?c=2014">
                         <li class="nav-item p-2 text-center text-light">2014</li>
                       </router-link>
                     </div>
                     <div class="col-3 text-center">
                        <router-link to="/categories?c=2013">
                         <li class="nav-item p-2 text-center text-light">2013</li>
                       </router-link>
                     </div>
                     <div class="col-3 text-center">
                        <router-link to="/categories?c=2012">
                         <li class="nav-item p-2 text-center text-light">2012</li>
                       </router-link>
                     </div>

                   </div>
                 </div>
              </b-collapse>
         </div>                          
                                   
        </ul>
     </b-modal>
     <!-- --------------------------------------------- -->

 </div>
</template>

<script>

import carousel from 'vue-owl-carousel';
import carouselhero from '../components/carousel';
import moviespath from '../components/path';
import all_movies from '../json/all_movies.json';

export default {
  name: "Home",
  data() {
    return {
      result: "",
      Search: "",
      searchbar : false,
      show: false,
      scrollchange: 'transparent',
    };
  },
  methods: {
    searchicon(){
         this.searchbar = true;
    },
    cancel(){
       this.searchbar = false;
       this.result = "";
       this.show = false;
    },
    search() {
      if (this.Search == "") {
        this.result = "";
        this.show = false;
      } else {
        this.show = true;
        const movies = all_movies.movies;
        this.result = movies.filter(s => {
          return s.movies_name
            .toUpperCase()
            .startsWith(this.Search.toUpperCase());
        });
      }
    },
    load(){          
        this.movies = all_movies.movies;
         if(scrollY > 55){
              this.scrollchange = 'rgba(41, 41, 48, 0.658)';     
         }
         else if(scrollY == 0){
            this.scrollchange = 'transparent';
         }
     }
  },
  mounted() {
      document.addEventListener('scroll', this.load);
  },
  components:{
    carouselhero,
    carousel,
    moviespath
  }
};
</script>

<style lang="scss">
  .searchbar{
    position: fixed;;
    text-align: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.897);
    z-index: 9999;
    padding: 8px;
   .cancel{
     background: #333;
     border: none;
     font-weight: bold;
     padding:3px 10px;
     color: #fff;
     background: #0af;
   }
  }
  .searchresult{
    position: fixed;
    width: 100vw;
    max-height: 100vh;
    background:#222;
    overflow: scroll;
    top: 45px;
    z-index: 9999;
    .card{
      background: #222;
    }
  }
  .modal{
    font-weight: bold;
    .modal-content{
      background: #222;
      color: #0af;
    }
    .modal-header{
      background: #fff;
      text-transform: uppercase;
    }
    .modal-dialog{
    margin: 0;
    padding: 0;
    border: none;
    }
  }
  
  .latest{
    img{
      max-height: 170px;
      min-height: 170px;
    }
  }
</style>
