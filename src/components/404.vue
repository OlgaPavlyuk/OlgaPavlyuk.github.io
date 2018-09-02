<template>
	<div class="page error-page">
		<section class="section-screen">
			<div class="container">
				<div class="error__message">
					<h1 class="error-title">Такой страницы нет</h1>
					<p class="error-text">
						Эта страница удалена или&nbsp;её никогда не&nbsp;было. <br>
						Можете вернуться <router-link :to="{name: 'mainPage'}" class="link error-link">на&nbsp;главную</router-link> или&nbsp;сразу узнать о&nbsp;том, как <router-link :to="{name: 'clients'}" class="link error-link">найти клиентов.</router-link>
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
        theme: 'white-theme'
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
    beforeMount() {
      this.changeTheme(this.theme)
    },
    mounted: function () {
      document.querySelector('.header').classList.remove('fadeMenu');
    }
  }

</script>

<style lang="scss">
	@import '../style/blocks/_errorsPage.scss';
</style>
