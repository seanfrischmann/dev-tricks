<template>
    <highlight-code lang="javascript" class="text-left">
        import Vue from 'vue'
        import Router from 'vue-router'
        import VueResources from '@/pages/vue-resources/VueResources'
        import Landing from '@/pages/landing/Landing'

        Vue.use(Router)

        export default new Router({
            routes: [
                {
                    path: '/',
                    name: 'Landing',
                    component: Landing
                },
                {
                    path: '/docs',
                    name: 'VueResources',
                    component: VueResources
                }
            ]
        })
    </highlight-code>
</template>

<script>
    import Vue from "vue";
    import VueHighlightJS from "vue-highlight.js";
    Vue.use(VueHighlightJS);

    export default {
      name: "VueRouter"
    };
</script>
