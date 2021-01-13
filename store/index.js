

export const actions = {
   async nuxtServerInit({dispatch, commit}){
        await dispatch('auth/getAuthUser').catch(() => console.log('Not Authenticated'))
    }
}