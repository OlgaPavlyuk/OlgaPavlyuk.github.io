<template>
  <div class="page services">
  	<section class="section">
	  	<div class="container">
        <div class="services__headline">
          <h1 class="title services-title">
            Лучше знать, что делать, чем делать неизвестно что
          </h1>
          <p class="subtitle services-subtitle">
            SMM, SEO, таргетирование, перфоманс маркетинг, аналитика конкурентов и целевой аудитории — это всё инструменты digital-маркетинга, которые приносят продажи нашим клиентам.
          </p>
        </div>


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
        theme: 'forest-theme'
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
    mounted() {
      this.changeTheme(this.theme);
      document.querySelector('.header').classList.remove('fadeMenu');
    }
  }

</script>

<style lang="scss" scoped>

	 @import '../style/blocks/_services.scss';

</style>
