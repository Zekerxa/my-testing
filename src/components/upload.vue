<template>
    <div class="container" :onload="load()">
        <div class="col-12 w-100 card shadow movies pt-3 pb-3">
           <div class="card-body">

               <ul>
                   <li class="pt-1">
                        <label for="">Movies Name </label>
                   </li>
                   <li class="pb-3">
                       <input class="w-75 p-1" placeholder="Movies Name" v-model="movie_name" type="text">
                   </li>
              </ul>

               <ul>
                   <li class="pt-1">
                        <label for="">Videos Link </label>
                   </li>
                   <li class="pb-3">
                       <input class="w-75 p-1" placeholder="https:// . . ." v-model="video_link" type="text">
                   </li>
              </ul>

              <ul>
                   <li class="pt-1">
                        <label for="">Poster Link </label>
                   </li>
                   <li class="pb-3">
                       <input class="w-75 p-1" placeholder="https:// . . ." v-model="poster_link" type="text">
                   </li>
              </ul>

              <ul>
                   <li class="pt-1">
                        <label for="">Movies Tpye </label>
                   </li>
                   <li class="pb-3">
                       <select v-model="type" class="custom-select w-75">
                          <option  selected>SELECT ONE</option>
                          <option value="action">Action</option>
                          <option value="cartoon">Cartoon</option>
                          <option value="drama">Drama</option>
                          <option value="horror">Horror</option>
                          <option value="adult">18+/20+</option>
                          <option value="mystery">Mystery</option>
                        </select>
                   </li>
              </ul>

              <ul>
                   <li class="pt-1">
                        <label for="">Categories</label>
                   </li>
                   <li class="pb-3">
                       <select v-model="categories" class="custom-select w-75">
                          <option  selected>SELECT ONE</option>
                          <option value="English">English</option>
                          <option value="Korea">Korea</option>
                          <option value="China">China</option>
                          <option value="Thai">Thai</option>
                          <option value="Japan">Japan</option>
                        </select>
                   </li>
              </ul>

              <ul>
                   <li class="pt-1">
                        <label for="">Year</label>
                   </li>
                   <li class="pb-3">
                      <select v-model="year" class="custom-select w-75">
                          <option  selected>SELECT ONE</option>
                          <option value="2020">2020</option>
                          <option value="2019">2019</option>
                          <option value="2018">2018</option>
                          <option value="2017">2017</option>
                          <option value="2016">2016</option>
                          <option value="2015">2015</option>
                          <option value="2014">2014</option>
                          <option value="2013">2013</option>
                          <option value="2012">2012</option>
                          <option value="2011">2011</option>
                        </select>
                   </li>
              </ul>

              <ul>
                  <li class="pt-3 pb-3"><button class="btn btn-success" @click="upload">Upload Confirm</button></li>
              </ul>
           </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');


export default {
    name: "upload",
    data(){
        return{
           movie_name   : "",
           video_link   : "",
           poster_link  : "",
           download_link : "",
           type          : "SELECT ONE",
           categories    : "SELECT ONE",
           year          : "SELECT ONE",
        }
    },
    methods:{
       load(){
           console.log(this.type);
       },
       upload(){
           
           fetch('http://localhost:3000/movies',{
              method: 'POST',
              headers:{
                  'Accept' : 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
              },
              body:JSON.stringify({ 
                   movies_name   : this.movie_name,
                   movies_link   : this.video_link,
                   movies_photo  : this.poster_link,
                   download_link : this.download_link,
                   type          : this.type,
                   categories    : this.categories,
                   years         : this.year
                })
           })        
           .then((data) => alert("Completely Upload"));

           this.movie_name = this.video_link = this.poster_link = this.download_link = this.type = this.categories = this.year = "";

       }
    }
}
</script>

<style lang="scss">
 .movies{
     background: #fff ;
    ul{ 
        list-style: none;
        padding: 0;
        width: 100%;
       li{
         text-align: center;
         font-weight: bold;
         background: rgb(128, 223, 164);
       }
    }
 }
</style>