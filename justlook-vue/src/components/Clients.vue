<template>
  <div class="page clients">
    <section class="section">
      <div class="container">
        <div class="headline clients__headline">
          <h1 class="title clients-title">
            Клиенты. <br>
            Клёвые и успешные
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

  @import '../style/blocks/_clients.scss';

</style>
