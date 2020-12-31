<template>
  <div>
    <mt-tabbar fixed>
        <mt-tab-item id="tab1" >
            <img slot="icon" src="../assets/pen.png" @click="routeToHome">
            카운트
        </mt-tab-item>
        <mt-tab-item id="tab2" >
            <img slot="icon" src="../assets/save.png" @click="routeToList">
            보관함
        </mt-tab-item>
        <mt-tab-item id="tab2" v-if="this.$store.state.socialId == ''">
            <img  slot="icon" src="../assets/login.png" @click="kakaoLogin">
            카카오 로그인
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
// import http from '@/services/http';
import { mapMutations } from 'vuex';
import { MessageBox } from 'mint-ui';

export default {
  name: 'tabbar',
    data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
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
    routeToHome(){
        if(this.$route.query.id){
            this.$router.push({
                path: this.$routerPath.MAIN,
                query: {id: this.$route.query.id}
            });            
        } else {
            this.$router.push({
                path: this.$routerPath.MAIN,
                
            });
        }
    },  
    routeToList(){
        if(this.$store.state.socialId == ""){
            MessageBox({
                title: '이동 불가',
                message: '로그인을 해주세요',
                confirmButtonText: '확인'
                }).then(action => {
            });
            return;
        }
        this.$router.push({
            path: this.$routerPath.LIST,
        });
    },  
    addSocialIdToStore(id){
        this.$store.commit('setSocialId', {
        socialId: id
        })
    },
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
    },
    socialLogin(id){
      var obj = {
        socialId: id
      };
      this.$axios.post('/api/login/social', obj).then(response => {
          this.result = response.data;

          //스토어에 넣고
          this.addSocialIdToStore(id)

          this.routeToList();
      }).catch((ex) => {
          console.warn("ERROR!!!!! : ",ex)
      })
    },    
  },
}
</script>

