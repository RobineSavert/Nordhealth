import { defineStore } from 'pinia'
import { ref } from 'vue'

interface User {
    email: string
    receiveUpdates: boolean
}

export const useUserStore = defineStore('user', () => {
    const user = ref<User>({
        email: '',
        receiveUpdates: false
    })

    const setUserInfo = (userEmail: string, userReceiveUpdates: boolean) => {
        user.value.email = userEmail
        user.value.receiveUpdates = userReceiveUpdates
    }

    return {
        user,
        setUserInfo
    }
})
