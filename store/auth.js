export const state = () => ({
    user: null
})

export const getters = {
    authUser(state) {
        return state.user || null
    },
    isAuthenticated(state) {
        return !!state.user
    }
}

export const actions = {
    login({commit, state}, loginData) {
        return  this.$axios.$post('https://bloom-ecommerce-user.herokuapp.com/api/v1/auth/login', loginData)
        .then((user) => {
            commit('setAuthUser', user)
             //   console.log(state.user)
             return state.user
        })
        .catch(error => Promise.reject(error))
    },

    getAuthUser({commit, getters, state}) {
        const authUser = getters.authUser

        if(authUser) { return Promise.resolve(authUser)}

        return this.$axios.$get('https://bloom-ecommerce-user.herokuapp.com/api/v1/users/me')

        .then((user) => {
            commit('setAuthUser', user) 
            return state.user
        })
        .catch((error) => {
            commit('setAuthUser', null)
            return Promise.reject(error)
        })

    },

    register( context, registerData) {
        return this.$axios.$post('https://bloom-ecommerce-user.herokuapp.com/api/v1/auth/signup', registerData)
        
        .catch(error => {
            let errorMessage = "server error"

            if(error.response.data.errors){
                 errorMessage = error.response.data.errors.message
            }
           
           return Promise.reject(errorMessage)})
    },

    
}

export const mutations = {
    setAuthUser(state, user){     
        state.user = user

    }
}