/*
*
* 网站地图需要使用的文章数据状态
*
*/

export const state = {
  articles: {
    fetching: false,
    data: {
      result: {
        pagination: {
          current_page: 0
        },
        data: []
      }
    }
  }
}

export const mutations = {
  REQUEST_ARTICLES(state) {
    state.articles.fetching = true
  },
  GET_ARTICLES_FAILURE(state) {
    state.articles.fetching = false
  },
  GET_ARTICLES_SUCCESS(state, action) {
    state.articles.fetching = false
    state.articles.data = action
  }
}
