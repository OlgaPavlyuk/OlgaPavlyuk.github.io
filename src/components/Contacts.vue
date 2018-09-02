<template>
  <div class="page contacts">
    <section class="section">
      <div class="container">
        <div class="headline contacts__headline">
          <h1 class="title contacts-title">
              Контакты
          </h1>

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
        theme: 'sunset-theme'
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

  @import '../style/blocks/_contacts.scss';

</style>
