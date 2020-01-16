<template>

  <div id="app">
    <div class="menu-container" :class="clsTheme + ' ' +menuNarrow">
      <navigation @changedata="onMenuClick($event)"
                  :adapt="adaptMenu"></navigation>
    </div>

    <div class="page-container" v-on:scroll.passive="handleScroll" v-on:resize.passive="handleResize">
      <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
      </transition>
    </div>
  </div>

</template>

<script>

import {router} from './routes.js';
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

import Navigation from './components/Navigation.vue';
import Popup from './components/Popup.vue';


  export default {
    data() {
      return {
        menuNarrow: '',
        adaptMenu: ''
      }
    },
    computed: {
      ...mapGetters('page', {
        clsTheme: 'theme'
      })
    },
    methods: {
      ...mapActions('page', {
        changeTheme: 'changeTheme'
      }),
      onMenuClick(data){
        this.adaptMenu = data.adapt;
      },
      handleScroll () {
        (window.scrollY > 0) ? this.menuNarrow = 'narrow' : this.menuNarrow = '';
      },
      handleResize () {
        this.adaptMenu = '';
      }
    },
    mounted: function () {
      window.addEventListener('resize', this.handleResize)
    },
    created: function () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize)
    },

    components: {
      Navigation,
      Popup
    }
  }
</script>

<style lang="scss">

  @import './style/fonts.css';

  .page-container {
    background-color: #1a164c;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
