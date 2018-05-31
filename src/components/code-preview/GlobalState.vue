<template>
    <highlight-code lang="javascript" class="text-left">
        import Vue from "vue";
        import Vuex from "vuex";

        Vue.use(Vuex);

        const store = new Vuex.Store({
            state: {
                count: 0
            },
            mutations: {
                increment: state => state.count++,
                decrement: state => state.count--
            }
        });

        export default {
            name: "CounterStore",
            props: ["color"],
            data() {
                return {
                    title: "Incremental Counter"
                };
            },
            computed: {
                count: () => store.state.count
            },
            methods: {
                increment: () => store.commit("increment"),
                decrement: () => store.commit("decrement")
            }
        };
    </highlight-code>
</template>

<script>
    import Vue from 'vue'
    import VueHighlightJS from 'vue-highlight.js'
    Vue.use(VueHighlightJS)

    export default {
        name: 'GlobalState'
    }
</script>
