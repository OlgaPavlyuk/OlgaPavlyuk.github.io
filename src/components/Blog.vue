<template>
  <div class="page blog">
    <section class="section">
      <div class="container">
        <div class="blog__headline">
          <h1 class="title blog-title">
            Just блог
          </h1>
          <p class="subtitle blog-subtitle">
            Суровые трудовые будни команды Justlook от первого лица
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

<style lang="scss" scoped>

  @import '../style/blocks/_blog.scss';

</style>
