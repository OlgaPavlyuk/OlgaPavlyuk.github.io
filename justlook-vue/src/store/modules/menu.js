export default {
	namespaced: true,
	state: {
		items: [
      {
        url: {'name': 'questions'},
        text: 'Решения'
      },
      {
        url: {'name': 'services'},
        text: 'Услуги'
      },
			{
				url: {'name': 'cases'},
				text: 'Работы'
			},
			{
				url: {'name': 'features'},
				text: 'Преимущества'
			},
      {
        url: {'name': 'clients'},
        text: 'Клиенты'
      },
      {
        url: {'name': 'contacts'},
        text: 'Контакты'
      },
      {
        url: {'name': 'blog'},
        text: 'Блог'
      }
		]
	},
	getters: {
		items(state){
			return state.items;
		}
	}
};
