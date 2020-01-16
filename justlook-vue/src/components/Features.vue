<template>
  <div class="page features">
    <section class="section">
      <div class="container">
        <div class="features__headline">
          <h1 class="title features-title">
            30 минут на ответ
          </h1>
          <p class="subtitle features-subtitle">
            Находим решение для вашей задачи за 30 минут.
            Ответ менеджера в процессе работы — не более часа.
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
        theme: 'rabbit-theme'
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

<style lang="scss" scoped>

  @import '../style/blocks/_features.scss';

</style>
