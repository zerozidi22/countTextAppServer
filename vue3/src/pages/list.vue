<template>
  <div>
    <mt-header fixed title="보관함"></mt-header>
    <div style="margin-top:50px;"> </div>
    <div v-for="item in list" :key="item.id" >
      <div @click="getDataDetail(item.id)">
        <mt-cell :title="item.text" ></mt-cell>  
      </div>
    </div>
    


    <tabbar />
  </div>
</template>

<script>
// import http from '@/services/http';
import tabbar from '../components/tabbar.vue';
import { MessageBox } from 'mint-ui';

export default {
  components: { tabbar },
  name: 'HelloWorld',
    data() {
    return {
      test1: "",
      test2: "",
      list: [],
      accessToken: "",
      introduction: "",
      len : 0
    };
  },
  component: {
    tabbar
  },
  created() {

    this.getDataList();
  },
  methods: {
    test(){
console.log("test");
    },
    clear(){
      this.introduction = "";
    },
    getDataDetail(id){
      this.$router.push({
        path: this.$routerPath.MAIN,
        query: {id: id}
      });
    },
    getDataList(){
        this.$axios.get(`/api/memo/list/${this.$store.state.socialId}`).then(response => {

          if(response.data && response.data.length > 0){
            response.data.forEach(function (item, index, array) {
              if(item.text.length > 18){
                item.text = item.text.substr(0,18)+"   ·······";
              }
            });
          }

          this.list = response.data;
      });
    },

  },
}
</script>

