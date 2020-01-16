<template>
  <div class="page">
  	<section class="section-screen main-section">
	  	<div class="container">
        <div class="main__headline">
          <h1 class="title main-title">
            Знакомьтесь с&nbsp;DIGITAL
          </h1>
          <p class="subtitle main-subtitle">
            Мы помогаем малому и&nbsp;среднему бизнесу найти новые возможности для&nbsp;развития через&nbsp;интернет
          </p>
        </div>

        <router-link :to="{name: 'questions'}" class="link link--teaser">Как найти клиентов в&nbsp;интернет?</router-link>

    	</div>

  	</section>
  </div>

</template>



<script>
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';

  export default {
    data () {
      return {
        theme: 'dark-theme'
      }
    },
    computed: {
      ...mapGetters('page', {
        thisTheme: 'theme'
      }),
    },
    methods: {
      ...mapActions('page', {
        changeTheme: 'changeTheme'
      })
    },
    mounted: function () {
      this.changeTheme(this.theme);
      document.querySelector('.header').classList.remove('fadeMenu');
    }
  }

</script>

<style lang="scss" scoped>

	 @import '../style/blocks/_mainPage.scss';

</style>
