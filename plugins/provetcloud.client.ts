// plugins/provetcloud.client.ts
import '@provetcloud/web-components'

export default defineNuxtPlugin(() => {
    console.log('ProvetCloud web components loaded')

    return {
        provide: {
           // nothing for now..
        }
    }
})