<template>
  <div>
    <mt-header fixed title="글자수를 세어요"></mt-header>
    <img src="../assets/main.png"   style="margin-top:60%; margin-left: 40%;" height="auto" width="auto" slot="icon">
    <img src="../assets/kakaoLogin.png" @click="kakaoLogin" 
          style="margin-top:40%; margin-left: 25%;" height="auto" width="auto" slot="icon">
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
      list: [],
      accessToken: ""
    };
  },
  created() {
    // this.getData();
  },
  methods: {
    clickOnNextPage(){
      this.$router.push({
        path: this.$routerPath.B,
      });
    },
    socialLogin(id){
      var obj = {
        socialId: id
      };
      this.$axios.post('/api/login/social', obj).then(response => {
          this.result = response.data;
          this.clickOnNextPage();
      }).catch((ex) => {
          console.warn("ERROR!!!!! : ",ex)
      })
    },
    // putMethod(){
      
    //   var obj = {
    //     "test1": this.test1,
    //     "test2": this.test2,
    //   }

    //   if(this.test1 == "" || this.test2 == ""){
    //     alert("input box를 채워주세요");
    //     return ;
    //   }

    //   this.$axios.put('/api/test/put', obj).then(response => {
    //     console.log(response);
    //     // const { code, text, data } = response.data;
          
    //   });
    // },
    // removeMethod(){
  
    //   this.$axios.delete(`/api/test/remove/${this.test1}`).then(response => {
    //     console.log(response);
    //     // const { code, text, data } = response.data;
          
    //   });
    // },
    //async await 지원하지 않아 promise로 직접 구현
    //https://devtalk.kakao.com/t/kakao-auth-login-await/110363
    requestOauth2() {
      return new Promise((resolve, reject) => {
        window.Kakao.Auth.login({
          // scope: 'profile',
          success: function(response) {
            resolve(response);
          },
          fail: function(error) {
            reject(error);
          }
        });
      });
    },
    kakaoLogin(){
      this.requestOauth2().then(res => {
        this.getUserDataFromOauth(res);
      });
    },
    getUserDataFromOauth(authObj){
        window.Kakao.API.request({
            url:'/v2/user/me',
            success : res => {
                const id = res.id;
                this.socialLogin(id);
            },
            fail : error => {
                console.log(error);
            }
        })
    }

  },
}
</script>

