export default function ({ $axios, store, user }) {
    $axios.onRequest( (config) => {
      if (store.state.user.token) {
        config.headers.common['Authorization'] = store.state.user.token
      }
    })
  }