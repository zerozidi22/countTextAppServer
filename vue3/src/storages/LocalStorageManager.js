import { parseJwt } from '@/utils/jwtUtils';

// 여기엔 토큰 관련이랑, 로그인 - 아이디 저장 체크만 관여.

class LocalStorageManager {
  static instance;

  ITEM_NAME_USER_DATA = 'userData';
  LOGIN_ID = 'loginId';

  static get shared() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new LocalStorageManager();
    return this.instance;
  }

  getToken() {
    const userData = this.getUserData();
    if (!userData) return null;

    return userData.access_token;
  }

  getRefreshToken() {
    const userData = this.getUserData();
    if (!userData) return null;

    return userData.refresh_token;
  }

  changeToken(newToken) {
    var userData = this.getUserData();
    if (!userData) return;

    userData.access_token = newToken;

    this.setUserData(userData);
  }

  getTokenData() {
    const userData = this.getUserData();
    if (!userData) return null;

    const token = userData.access_token;
    if (!token) return;

    const objToken = parseJwt(token);
    return objToken;
  }

  getLoginUserId() {
    const tokenData = this.getTokenData();
    if (!tokenData) return null;

    const { loginId } = tokenData;
    return loginId;
  }
  getLoginCompanyName() {
    const tokenData = this.getTokenData();
    if (!tokenData) return null;

    const { companyNm } = tokenData;
    return companyNm;
  }
  getLoginNickName() {
    const tokenData = this.getTokenData();
    if (!tokenData) return null;

    const { nickNm } = tokenData;
    return nickNm;
  }
  getLoginCompanyNo() {
    const tokenData = this.getTokenData();
    if (!tokenData) return null;

    const { companyRgstNo } = tokenData;
    return companyRgstNo;
  }
  getLoginUserTel() {
    const tokenData = this.getTokenData();
    if (!tokenData) return null;

    const { companyTelNo } = tokenData;
    return companyTelNo;

    // const { telNo } = tokenData;
    // return telNo;
  }
  getLoginWholeData() {
    const tokenData = this.getTokenData();
    if (!tokenData) return null;

    return tokenData;
  }

  // private 용도로 변경?
  getUserData() {
    const str = sessionStorage.getItem(this.ITEM_NAME_USER_DATA);

    if (!str) {
      return null;
    }

    const obj = JSON.parse(str);

    return obj;
  }

  setUserData(objUserData) {
    const strData = JSON.stringify(objUserData);

    sessionStorage.setItem(this.ITEM_NAME_USER_DATA, strData);
  }

  clear() {
    sessionStorage.removeItem(this.ITEM_NAME_USER_DATA);
  }

  // 브라우저에 아이디 저장 체크 ==============================
  getLoginId() {
    const str = sessionStorage.getItem(this.LOGIN_ID);

    if (!str) {
      return null;
    }

    return str;
  }

  setLoginId(strLoginId) {
    sessionStorage.setItem(this.LOGIN_ID, strLoginId);
  }

  removeLoginId() {
    sessionStorage.removeItem(this.LOGIN_ID);
  }

}

export default LocalStorageManager;
