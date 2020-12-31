<template>
<div>
  <mt-header fixed title="글자수를 세어줄게요"></mt-header>
  <div style="margin-top:70px;"> </div>
  <div> 
      <div align="right" >현재 작성한 글자 수 (공백 포함) : {{len}} 자  </div>
      <div v-if="this.$store.state.socialId == ''" style="font-size: 5px" align="right" >* 로그인 시 내용 저장이 가능합니다.</div>

    <mt-field style="margin-top:10px; border:1px dotted;" placeholder="입력해주세요" type="textarea" rows="15" v-model="memo" @input="countMemo" maxlength="3000"></mt-field>

    <div align="center" style="margin-top:15px;">
    <mt-button size="large" @click="clear" type="default" style="margin-left: 10px; margin-bottom:10px;">초기화</mt-button>
    <mt-button size="large" v-if="!this.$store.state.socialId == '' && !enableUpdate" @click="saveData" type="primary">저장</mt-button>  
    <mt-button size="large" v-if="enableUpdate" @click="updateData" type="primary">수정</mt-button>  
    </div>
    
    <tabbar />
  </div>
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
      memo: "",
      len : 0 ,
      enableUpdate: false
    };
  },
  component: {
    tabbar
  },
  mounted() {
    if(this.$route.query.id){
      this.enableUpdate = true;
      this.getDataDetail();
    }

  },
  methods: {
    clear(){
      this.memo = "";
    },
    countMemo(event){
      console.log(event)
      this.len = 0 ;
      if(event){
        this.len = event.trim().replace(/\n/g, "").length;
      } 
    },
    routeToList(){
      this.$router.push({
        path: this.$routerPath.LIST,
      });
    },      
    saveData(){
      
      var obj = {
        "socialId": this.$store.state.socialId,
        "text": this.memo,
      }

      if(this.memo == ""){
        MessageBox({
          title: '확인해주세요',
          message: '저장할 내용이 없어요',
          confirmButtonText: '확인'
        });
        return ;
      }

      this.$axios.post('/api/memo/insert', obj).then(response => {
        MessageBox({
          title: '완료',
          message: '저장 완료되었습니다.',
          confirmButtonText: '확인'
        }).then(action => {
          this.routeToList();
        });
      });
    },
    updateData(){
      
      var obj = {
        "id": this.$route.query.id,
        "socialId": this.$store.state.socialId,
        "text": this.memo,
      }

      if(this.memo == ""){
        MessageBox({
          title: '확인해주세요',
          message: '수정할 내용이 없어요',
          confirmButtonText: '확인'
        });
        return ;
      }

      this.$axios.put('/api/memo/update', obj).then(response => {
        MessageBox({
          title: '완료',
          message: '수정이 완료되었습니다.',
          confirmButtonText: '확인'
        }).then(action => {
          this.routeToList();
        });
      });
    },    
    getDataDetail(){
      console.log(this.$store.state.socialId);
      console.log(this.$route.query.id);
        this.$axios.get(`/api/memo/${this.$store.state.socialId}/${this.$route.query.id}`).then(response => {
          this.memo = response.data.text;
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

