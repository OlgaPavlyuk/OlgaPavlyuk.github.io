import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Blog from './components/Blog.vue';
import Cases from './components/Cases.vue';
import Clients from './components/Clients.vue';
import Contacts from './components/Contacts.vue';
import Features from './components/Features.vue';
import MainPage from './components/MainPage.vue';
import Questions from './components/Questions.vue';
import Services from './components/Services.vue';
import e404 from './components/404.vue';
import VueScrollTo from 'vue-scrollto';

//import page from './store/modules/page';


const routes = [
  {
    path: '',
    name: 'mainPage',
    component: MainPage,
    meta: {
      title: 'Justlook',
      pos: '0',
      metaTags: [
        {
          name: 'description',
          content: 'Мы помогаем малому и среднему бизнесу найти клиентов в интернет'
        },
        {
          name: 'theme-color',
          content: '#1a164c'
        }
      ]
    }
  },
  {
    path: '/questions',
    name: 'questions',
    component: Questions,
    meta: {
      title: 'Вопросы - Ответы',
      metaTags: [
        {
          name: 'description',
          pos: '2',
          content: 'Ответы на частозадаваемые вопросы'
        },
        {
          name: 'theme-color',
          content: '#ff6461'
        }
      ]
    }
  },
  {
    path: '/services',
    name: 'services',
    component: Services,
    meta: {
      title: 'Услуги',
      metaTags: [
        {
          name: 'description',
          pos: '2',
          content: 'Услуги'
        },
        {
          name: 'theme-color',
          content: '#00C9A7'
        }
      ]
    }
  },
  {
    path: '/cases',
    name: 'cases',
    component: Cases,
    meta: {
      title: 'Наши работы',
      pos: '3',
      metaTags: [
        {
          name: 'description',
          content: 'Работы'
        },
        {
          name: 'theme-color',
          content: '#3a7bd5'
        }
      ]
    }
  },
  {
    path: '/features',
    name: 'features',
    component: Features,
    meta: {
      title: 'Преимущества',
      pos: '4',
      metaTags: [
        {
          name: 'description',
          content: 'Преимущества'
        },
        {
          name: 'theme-color',
          content: '#5b86e5'
        }
      ]
    }
  },
  {
    path: '/clients',
    name: 'clients',
    component: Clients,
    meta: {
      title: 'Клиенты',
      pos: '5',
      metaTags: [
        {
          name: 'description',
          content: 'Наши проекты'
        },
        {
          name: 'theme-color',
          content: '#FFF'
        }
      ]
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
    meta: {
      title: 'Контакты',
      pos: '6',
      metaTags: [
        {
          name: 'description',
          content: 'Контакты'
        },
        {
          name: 'theme-color',
          content: '#ec6f66'
        }
      ]
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: {
      title: 'Блог',
      pos: '7',
      metaTags: [
        {
          name: 'description',
          content: 'Наши трудовые будни от первого лица'
        },
        {
          name: 'theme-color',
          content: '#FFF'
        }
      ]
    }
  },
	{
		path: '*',
		component: e404
	}
];

export const router = new VueRouter({
	routes,
	mode: 'history',
  scrollBehavior (to, from, savedPosition) {

	  return new Promise((resolve, reject) => {


        setTimeout(() => {
          if (to.hash) {
            VueScrollTo.scrollTo(to.hash, 500);
            return {
              selector: to.hash
            }
          }
          resolve({ x: 0, y: 0 })
        }, 600)

    })
  }
});

router.beforeEach((to, from, next) => {

  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if(!nearestWithMeta) return next();


  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });


    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })

    .forEach(tag => document.head.appendChild(tag));

  next();

  if (document.querySelector('.header')) {
    document.querySelector('.header').classList.add('fadeMenu');
  }


});





