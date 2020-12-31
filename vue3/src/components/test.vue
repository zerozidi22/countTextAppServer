<template>
  <div id="page-top">
    
  <!-- Header -->
  <header class="masthead d-flex">
    <div class="container text-center my-auto">
      <h3 class="mb-5">
        <em>로또 번호 추출</em>
      </h3>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_hWXhM1.json"  background="transparent"  speed="1"  style="margin-left:auto; margin-right:auto; width: 220px; height: 220px;"  loop autoplay></lottie-player>
      <a class="btn btn-info btn-xl js-scroll-trigger"  @click="generate">생성</a>
    </div>
    <div class="overlay"></div>
    
  </header>

  <!-- About -->
  <section class=" bg-light" id="about">
    <table class="table">
        <tbody >
            <tr v-for="(item, index) in lottoArray" :key="index">
            <th > {{index+1}} 회차 </th>  
            <td v-for="(number, index_number) in item" :key="index_number">{{number}}</td>
            </tr>
        </tbody>
    </table>
  </section>

  <!-- Services -->
  <!-- <section class="content-section bg-primary text-white text-center" id="services">
    <div class="container">
      <div class="content-section-heading">
        <h3 class="text-secondary mb-0">Services</h3>
        <h2 class="mb-5">What We Offer</h2>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <span class="service-icon rounded-circle mx-auto mb-3">
            <i class="icon-screen-smartphone"></i>
          </span>
          <h4>
            <strong>Responsive</strong>
          </h4>
          <p class="text-faded mb-0">Looks great on any screen size!</p>
        </div>
        <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <span class="service-icon rounded-circle mx-auto mb-3">
            <i class="icon-pencil"></i>
          </span>
          <h4>
            <strong>Redesigned</strong>
          </h4>
          <p class="text-faded mb-0">Freshly redesigned for Bootstrap 4.</p>
        </div>
        <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
          <span class="service-icon rounded-circle mx-auto mb-3">
            <i class="icon-like"></i>
          </span>
          <h4>
            <strong>Favorited</strong>
          </h4>
          <p class="text-faded mb-0">Millions of users
            <i class="fas fa-heart"></i>
            Start Bootstrap!</p>
        </div>
        <div class="col-lg-3 col-md-6">
          <span class="service-icon rounded-circle mx-auto mb-3">
            <i class="icon-mustache"></i>
          </span>
          <h4>
            <strong>Question</strong>
          </h4>
          <p class="text-faded mb-0">I mustache you a question...</p>
        </div>
      </div>
    </div>
  </section> -->

  <!-- Callout -->
  <!-- <section class="callout">
    <div class="container text-center">
      <h2 class="mx-auto mb-5">Welcome to
        <em>your</em>
        next website!</h2>
      <a class="btn btn-primary btn-xl" href="https://startbootstrap.com/theme/stylish-portfolio/">Download Now!</a>
    </div>
  </section> -->

  <!-- Portfolio -->
  <!-- <section class="content-section" id="portfolio">
    <div class="container">
      <div class="content-section-heading text-center">
        <h3 class="text-secondary mb-0">Portfolio</h3>
        <h2 class="mb-5">Recent Projects</h2>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6">
          <a class="portfolio-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Stationary</div>
                <p class="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio-1.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-6">
          <a class="portfolio-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Ice Cream</div>
                <p class="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio-2.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-6">
          <a class="portfolio-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Strawberries</div>
                <p class="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio-3.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-6">
          <a class="portfolio-item" href="#!">
            <div class="caption">
              <div class="caption-content">
                <div class="h2">Workspace</div>
                <p class="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio-4.jpg" alt="">
          </a>
        </div>
      </div>
    </div>
  </section> -->

  <!-- Call to Action -->
  <!-- <section class="content-section bg-primary text-white">
    <div class="container text-center">
      <h2 class="mb-4">The buttons below are impossible to resist...</h2>
      <a href="#!" class="btn btn-xl btn-light mr-4">Click Me!</a>
      <a href="#!" class="btn btn-xl btn-dark">Look at Me!</a>
    </div>
  </section> -->

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    data() {
    return {
      playerView: false,
      lottoArray : []
    };
  },
  methods: {
      generate(){
        console.log("hi");
        this.playerView = !this.playerView;

        // 6개의 로또 번호를 저장할 배열
        var lotto = new Array(6);
        // 추첨된 로또번호의 갯수
        var count = 0;
        // 번호중복 방지용 변수
        var mFlag = true;
        // 6개의 로또번호를 얻을때까지 반복
        while(count < 6)
        {
           var number;
           // 랜덤번호 추출
           number = parseInt(Math.random()*45)+1
           // 중복확인
           for(var i=0; i<count; i++)
              if(lotto[i] == number) mFlag = false;
           // 중복된 번호가 아니면 로또 번호배열에 추가
           if(mFlag)
           {
                lotto[count] = number;
                count++;
           }
           mFlag = true;
       }
    lotto.sort((a,b) => a -b);
    this.lottoArray.push(lotto);
    // 추첨된 로또번호 출력

      }
  },
}
</script>

