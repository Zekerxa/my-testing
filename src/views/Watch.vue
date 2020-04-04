<template>
    <div class="container">
        <div class="row justify-content-center p-0">
            
            <div class="col-12 p-0">
                <div class="">
                    <!-- <video class="w-100" poster="http://legend-pro.cyber.zekerxa.com/legend.png" controls controlsList="nodownload"  >              
                        <source :src="watch_link" type="video/mp4">
                    </video> -->
                </div>
                <div class="pt-3 pb-2" style="background:#000;">
                     <iframe :src="watch_link" class="p-0 m-0" style="width:99vw;height:250px;border:none;"  frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Movies",
  data() {
    return {

    };
  },
  props: ["watch_link"],

};
</script>

<style lang="scss">

</style>