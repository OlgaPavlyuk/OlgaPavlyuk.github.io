<template>
      <section id="questions" class="section questions-section">
        <div class="container">
          <div class="questions__headline">
            <h2 class="title questions-title">
              От вопроса к результату
            </h2>
            <p class="subtitle questions-subtitle">
              Чем полезна интернет среда? Многие компании имеют вопросы, связанные с интернет-маркетингом: как найти свою интернет-аудиторию? Посему низкие показатели рекламы? Что делать, если нет опыта в digital? На такие вопросы мы отвечаем с удовольствием.
            </p>
          </div>

          <div class="questions__list">

              <div class="questions-item">
                <a href="javascript:void(0)" class="questions__name" @click.stop="openPopup('channels')">«Как найти дополнительные каналы продаж?»</a>

                <transition name="popup">
                  <popup v-show="modal === 'channels'">
                    <div slot="popupContent">
                      <div class="popup-info">
                        <h2 class="popup__title">Есть бизнес, но нужны <br>дополнительные каналы продаж.</h2>
                        <div class="popup__subtitle">Частая ситуация. Хорошие новости: ваш бизнес ждут огромные возможности и&nbsp;свершения. Но&nbsp;сначала давайте разберемся в&nbsp;возможных причинах такой ситуации:</div>
                        <ul class="reasons-list">
                          <li class="reasons__item">отсутствует сайт или его эффективность близка к&nbsp;нулю;<br></li>
                          <li class="reasons__item">низкая отдача от&nbsp;социальных сетей;</li>
                          <li class="reasons__item">нет реализованных сценариев продаж через соцсети или&nbsp;интернет.</li>
                        </ul>
                        <div class="popup__subtitle">Решение</div>
                        <p class="popup__text">Аудит сайта, конкурентный анализ, сайт для бизнеса, SMM маркетинг, SEO оптимизация, контекстная реклама, таргетированная реклама.</p>
                        <div class="popup__subtitle">Результат</div>
                        <p class="popup__text">В этом случае сложно спрогнозировать, насколько сильным будет рост: просто сильным или очень сильным. В&nbsp;этой ситуации кто-то увеличивает продажи на&nbsp;50%, а&nbsp;кто-то в&nbsp;5&nbsp;раз. Напишите нам, после общения с&nbsp;консультантом мы&nbsp;дадим точные прогнозы.<br></p>
                      </div>
                    </div>
                  </popup>
                </transition>
              </div>

              <div class="questions-item">
                <button class="questions__name" @click="openPopup('nocli')">«Есть сайт, но нет клиентов?»</button>
                <transition name="popup">
                  <popup v-show="modal === 'nocli'">
                    <div slot="popupContent">
                      <div class="popup-info">
                        <h2 class="popup__title">Есть сайт, но нет клиентов.<br></h2>
                        <div class="popup__subtitle">В&nbsp;данном случае есть две основные причины:</div>
                        <ul class="reasons-list">
                          <li class="reasons__item">сайт сделан «для&nbsp;галочки» без&nbsp;ориентира на&nbsp;цели и&nbsp;результат;<br></li>
                          <li class="reasons__item">сайт сделан хорошо, но на&nbsp;него никто не&nbsp;приходит.</li>
                        </ul>
                        <div class="popup__text">Начать нужно с&nbsp;определения, какая из&nbsp;двух причин является источником отсутствия клиентов, исправить и&nbsp;приветствовать новых клиентов.</div>
                        <div class="popup__subtitle">Решение</div>
                        <p class="popup__text">Аудит сайта, сайт для бизнеса, услуги интернет-маркетинга</p>
                        <div class="popup__subtitle">Результат</div>
                        <p class="popup__text">Вне зависимости от&nbsp;причины, после её выявления и&nbsp;устранения вы&nbsp;увидите заявки со&nbsp;своего сайта. Оставьте заявку и&nbsp;мы бесплатно проконсультируем вас, как&nbsp;начать привлекать клиентов.</p>
                      </div>
                    </div>
                  </popup>
                </transition>
              </div>

              <div class="questions-item">
                <button class="questions__name" @click="openPopup('lowLevel')">«Есть реклама, но её эффективность на&nbsp;низком уровне?»</button>
                <transition name="popup">
                  <popup v-show="modal === 'lowLevel'">
                    <div slot="popupContent">
                      <div class="popup-info">
                        <h2 class="popup__title">Есть реклама, но её эффективность на низком уровне<br></h2>
                        <div class="popup__subtitle">Зачастую просто привлечение трафика на&nbsp;сайт не&nbsp;дает ожидаемых результатов. Ситуации бывают разные: </div>
                        <ul class="reasons-list">
                          <li class="reasons__item">привлечение не&nbsp;целевой аудитории;<br></li>
                          <li class="reasons__item">слабая визуальная реализации объявлений, баннеров;</li>
                          <li class="reasons__item">целевой трафик на&nbsp;сайт не&nbsp;конвертируется в&nbsp;клиентов;</li>
                          <li class="reasons__item">слабая подача продукта/услуги, непрофессиональный маркетинг.</li>
                        </ul>
                        <div class="popup__text">Тут поможет предварительный обзор нашими специалистами. Как правило, уже при&nbsp;бесплатном анализе вашего сайта и&nbsp;рекламной кампании мы&nbsp;можем сделать выводы о&nbsp;проблематике и&nbsp;дать рекомендации по&nbsp;дальнейшим действиям.</div>
                        <div class="popup__subtitle">Решение</div>
                        <p class="popup__text">Анализ коммуникаций с&nbsp;аудиторией, анализ целевой аудитории, услуги интернет-маркетинга</p>
                        <div class="popup__subtitle">Результат</div>
                        <p class="popup__text">Чтобы повысить эффективность вкладываемых в&nbsp;рекламу денег, нужно найти причину утечки потенциальных клиентов. После&nbsp;внедрения изменений и&nbsp;эффективной рекламной кампании конверсия с&nbsp;нее может достигать 10%, в&nbsp;зависимости от&nbsp;каждого конкретного случая. Опишите вашу задачу и&nbsp;наш специалист отдела аналитики бесплатно проконсультирует&nbsp;вас.<br></p>
                      </div>
                    </div>
                  </popup>
                </transition>
              </div>

              <div class="questions-item">
                <button class="questions__name" @click="openPopup('visits')">«Есть посетители, но нет клиентов?»</button>

                <transition name="popup">
                  <popup v-show="modal === 'visits'">
                    <div slot="popupContent">
                      <div class="popup-info">
                        <h2 class="popup__title">Есть&nbsp;посетители, но нет клиентов<br></h2>
                        <div class="popup__subtitle">Вне зависимости от&nbsp;того, откуда на&nbsp;ваш сайт приходят пользователи, причина одна из&nbsp;двух:</div>
                        <ul class="reasons-list">
                          <li class="reasons__item">пользователи попадают на&nbsp;ваш сайт случайно и вы им не&nbsp;нужны, это называется не&nbsp;целевая аудитория;<br></li>
                          <li class="reasons__item">пользователи не&nbsp;могут найти&nbsp;то, что ищут или&nbsp;что-то мешает им&nbsp;стать вашим клиентом.</li>
                        </ul>
                        <div class="popup__text">Аудит сайта, а&nbsp;именно аудит трафика покажет откуда идут пользователи и&nbsp;насколько они ваши потенциальные клиенты, а&nbsp;аудит поведенческих факторов покажет, где пропадают те, кто готов был купить придя на&nbsp;сайт. Итоговый план действий следующий.</div>
                        <div class="popup__subtitle">Решение</div>
                        <p class="popup__text">Анализ коммуникаций с аудиторией, анализ целевой аудитории, сопровождение, услуги интернет-маркетинга.</p>
                        <div class="popup__subtitle">Результат</div>
                        <p class="popup__text">В зависимости от&nbsp;готовности текущей аудитории воспользоваться вашим предложением, вы&nbsp;либо сэкономите на&nbsp;бесполезном привлечении ненужных пользователей на&nbsp;ваш сайт, если ваша текущая аудитория не&nbsp;целевая, либо количество заявок с&nbsp;сайта увеличится в&nbsp;разы за&nbsp;счет правильной настройки коммерческих факторов на&nbsp;сайте.<br></p>
                      </div>
                    </div>
                  </popup>
                </transition>
              </div>

              <div class="questions-item">
                <button class="questions__name" @click="openPopup('another')">«Уже сотрудничали со студией/агентством/командой, остались недовольны результатом?»</button>

                <transition name="popup">
                  <popup v-show="modal === 'another'">
                    <div slot="popupContent">
                      <div class="popup-info">
                        <h2 class="popup__title">Уже&nbsp;сотрудничали со&nbsp;студией/агентством/командой, остались недовольны результатом<br></h2>
                        <div class="popup__subtitle">Велика вероятность, что у&nbsp;вас непростая аудитория и&nbsp;продукт. Результат сотрудничества с&nbsp;предыдущим агентством может вас не&nbsp;удовлетворять если:</div>
                        <ul class="reasons-list">
                          <li class="reasons__item">агентство/студия недостаточно квалифицировано для&nbsp;работы с&nbsp;вашим продуктом или&nbsp;аудиторией;<br></li>
                          <li class="reasons__item">агентство/студия работает по&nbsp;шаблонам продвижения не&nbsp;учитывая специфику продукта и&nbsp;аудитории;</li>
                          <li class="reasons__item">вы обращались к&nbsp;одному специалисту для&nbsp;решения различных задач.</li>
                        </ul>
                        <div class="popup__text">Студия Just look изучает сферу и&nbsp;особенности проекта перед тем, как&nbsp;взять обязательства по&nbsp;проекту, и&nbsp;только после&nbsp;этого делает коммерческое предложение. Мы всегда озвучиваем вилку ожидаемых результатов в&nbsp;клиентах и&nbsp;всегда в&nbsp;нее&nbsp;укладываемся, а&nbsp;иногда и&nbsp;превосходим. </div>
                        <div class="popup__subtitle">Решение</div>
                        <p class="popup__text">Анализ коммуникаций с аудиторией, разработка и сопровождение, услуги интернет-маркетинга. </p>
                        <div class="popup__subtitle">Результат</div>
                        <p class="popup__text">Счастье от&nbsp;работы с&nbsp;профессионалами, а&nbsp;самое главное, поток клиентов от&nbsp;интернет-маркетинга. <br></p>
                      </div>
                    </div>
                  </popup>
                </transition>
              </div>

              <div class="questions-item">

                <button class="questions__name" @click="openPopup('form')">Не нашли ответа? Задавайте нам свой вопрос!</button>

                <transition name="popup">
                  <popup v-show="modal == 'form'">
                  </popup>
                </transition>

              </div>

            </div>
          </div>
      </section>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';
  import Popup from './Popup.vue';

  export default {
    data () {
      return {
        theme: 'caterpillar-theme'
      }
    },
    computed: {
      ...mapGetters('page', {
        thisTheme: 'theme'
      }),
      ...mapGetters('popup', {
        modal: 'modal'
      })
    },
    methods: {
      ...mapActions('page', {
        changeTheme: 'changeTheme'
      }),
      ...mapActions('popup', {
        switchModal: 'switchModal'
      }),

      openPopup (modalName) {
        this.switchModal(modalName);
      }
    },
    mounted() {
      this.changeTheme(this.theme);
      document.querySelector('.header').classList.remove('fadeMenu');
    },
    components: {
      Popup
    }
  }

</script>

<style lang="scss" scoped>

	 @import '../style/blocks/_questions.scss';

</style>
