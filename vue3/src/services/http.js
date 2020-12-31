// import axios from 'axios';
// // import LocalStorageManager from '@/storages/LocalStorageManager';
// // import apiPath from '@/services/apiPath'

// // import router from '@/router/router'
// // import routerPath from '@/router/routerPath'

// // const baseDomain = process.env.NODE_ENV === 'production' ? '' : process.env.VUE_APP_API_URL;


// const http = axios.create({
//   // baseURL: `${baseDomain}/api`,
//   baseURL: `http://localhost:9080/`,
//   // withCredentials: true,// 자격 인증서
//   headers: { 'Content-Type': 'application/json' },
// });

// // http.interceptors.request.use(
// //   function(config) {
// //     // progressAction(config, store, PROGRESS_START_ACTION);

// //     checkConfig(config);

// //     return config;
// //   },
// //   function(error) {
// //     return Promise.reject(error);
// //   },
// // );

// http.interceptors.response.use(
//   async function(response) {
//     // const { config, data } = response;
//     const { data } = response;

//     // progressAction(config, store, PROGRESS_END_ACTION);

//     if (data && data.code === '401') {
//       console.log('need refresh');

//       // 원래 토큰 재요청해야 하는데 임시로 처리.
//       // LocalStorageManager.shared.clear();
//       // router.push(routerPath.LOGIN_TEST);

//       // const newTokenData = await refreshToken(config);

//       // if (!newTokenData || newTokenData.code !== '200') {
//       //   onFailRefreshToken();

//       //   return newTokenData;
//       // }

//       // const { access_token } = newTokenData.data;
//       // LocalStorageManager.shared.changeToken(access_token);

//       // config.headers.Authorization = `Bearer ${access_token}`;

//       // const resultRetry = await http.request(config);
//       const resultRetry = await http.request();
//       return resultRetry;
//     }

//     return response;
//   },
//   function(error) {
//     // const { config } = error;
//     console.log('Response Error@!@#!@#!@#: ' + error.message);

//     // progressAction(config, store, PROGRESS_END_ACTION);

//     // 진짜 에러일 땐 window.alert
//     alert(error.message);

//     return Promise.reject(error);
//   },
// );

// // async function refreshToken(config) {
// //   const refreshToken = LocalStorageManager.shared.getRefreshToken();
// //   if (!refreshToken) return null;

// //   config.headers['Refresh-Token'] = `Bearer ${refreshToken}`;

// //   const result = await http
// //     .post(apiPath.AUTH_TOKEN_REFRESH, null, config)
// //     .then(response => response.data)
// //     .catch(error => {
// //       return error;
// //     });

// //   return result;
// // }

// // function checkConfig(config) {
// //   const { isNeedAuth } = config;

// //   if (isNeedAuth === false) return;

// //   const token = LocalStorageManager.shared.getToken();
// //   if (!token) return;

// //   config.headers.Authorization = `Bearer ${token}`;
// // }

// // function onFailRefreshToken() {
// //   LocalStorageManager.shared.clear();

// //   router.push(routerPath.LOGIN);
// // }


// export default http;
