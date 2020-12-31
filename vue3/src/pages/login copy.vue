<template>
  <div>
  <mt-header title="long long long long title">
    <router-link to="/" slot="left">
      <mt-button icon="back">back</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  

<mt-field label="username" placeholder="Input username" ></mt-field>
<mt-field label="email" placeholder="Input email" type="email" ></mt-field>
<mt-field label="password" placeholder="Input password" type="password" ></mt-field>
<mt-field label="phone" placeholder="Input tel" type="tel" ></mt-field>
<mt-field label="website" placeholder="Input website" type="url" ></mt-field>
<mt-field label="number" placeholder="Input number" type="number" ></mt-field>
<mt-field label="birthday" placeholder="Input birthday" type="date" ></mt-field>
<mt-field label="introduction" placeholder="introduction" type="textarea" rows="4" ></mt-field>

  <mt-tabbar >
    <mt-tab-item id="tab1">
      <img slot="icon" src="../assets/100*100.png">
      홈
    </mt-tab-item>
    <mt-tab-item id="tab2">
      <img slot="icon" src="../assets/100*100.png">
      용품정보
    </mt-tab-item>
    <mt-tab-item id="tab3">
      <img slot="icon" src="../assets/100*100.png">
      채팅
    </mt-tab-item>
    <mt-tab-item id="tab4">
      <img slot="icon" src="../assets/100*100.png">
      정보
    </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
// import http from '@/services/http';


export default {
  name: 'HelloWorld',
    data() {
    return {
      test1: "",
      test2: "",
      list: []
    };
  },
  created() {

    this.getData();
  },
  methods: {

    clickOnNextPage(){
      this.$router.push({
        path: this.$routerPath.B,
      });
    },
    createMethod(){
      
      var obj = {
        "test1": this.test1,
        "test2": this.test2,
      }

      if(this.test1 == "" || this.test2 == ""){
        alert("input box를 채워주세요");
        return ;
      }

      this.$axios.post('/api/test/create', obj).then(response => {
          console.warn(response)
          this.result = response.data
          this.no = response.data.no
      }).catch((ex) => {
          console.warn("ERROR!!!!! : ",ex)
      })
    },
    putMethod(){
      
      var obj = {
        "test1": this.test1,
        "test2": this.test2,
      }

      if(this.test1 == "" || this.test2 == ""){
        alert("input box를 채워주세요");
        return ;
      }

      this.$axios.put('/api/test/put', obj).then(response => {
        console.log(response);
        // const { code, text, data } = response.data;
          
      });
    },
    removeMethod(){
  
      this.$axios.delete(`/api/test/remove/${this.test1}`).then(response => {
        console.log(response);
        // const { code, text, data } = response.data;
          
      });
    },
    getData(){
      console.log("aaa");
    }
  },
}
</script>

