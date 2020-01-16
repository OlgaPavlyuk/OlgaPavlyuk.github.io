<template>
  <div class="popup-back" @click="close">
    <div class="popup" @click.stop>
      <div class="content">
        <button class="close" @click="close">&zwj;</button>
        <slot name="popupContent">
          <div class="popup__title">Попап с формой</div>
          <div class="popup__text">Здесь будет форма</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';

  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters('popup', {
        modal: 'modal'
      }),
    },
    methods: {
      ...mapActions('popup', {
        switchModal: 'switchModal'
      }),
      close() {
        this.switchModal(false);
      }
    },
    mounted: function () {
      document.addEventListener("keydown", (e) => {
        if (this.show && e.keyCode == 27) {
          this.close();
        }
      });
    },
    watch: {
      modal () {
        if (this.modal) {
          setTimeout(() => {
            document.documentElement.style.overflow = 'hidden';
          }, 1)

        } else {
          setTimeout(() => {
            document.documentElement.style.overflow = 'auto';
            console.log('auto');
          }, 150)

        }
      }
    }
  }

</script>

<style lang="scss">
	 @import '../style/blocks/_popup.scss';
</style>
