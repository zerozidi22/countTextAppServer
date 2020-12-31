<template>
  <div>
    리스트

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

    // this.getData();
  },
  methods: {
    clear(){
      this.introduction = "";
    },
    messageBox(){
      MessageBox({
          title: '로그인이 하세겠습니까?',
          message: 'Are you sure?',
          showCancelButton: true,
          cancelButtonText: '취소',
          confirmButtonText: '확인'
        }).then(action => {
      });
    },
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
    test(event){
      console.log(event)
      this.len = 0 ;
      if(event){
        this.len = event.trim().replace(/\n/g, "").length;
      } 
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
    getData(){
      console.log("sdf");
        this.$axios.get("/api/oauth2/authorization/kakao").then(response => {
        console.log(response);
        // const { code, text, data } = response.data;
          
      });
    },
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

