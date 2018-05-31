<template>
    <highlight-code lang="javascript" class="text-left">
        export default {
            name: "Counter",
            props: ["color"],
            data() {
                return {
                    count: 0,
                    title: "Incremental Counter"
                };
            },
            methods: {
                increment() { this.count++; },
                decrement() { this.count--; }
            }
        };
    </highlight-code>
</template>

<script>
    import Vue from 'vue'
    import VueHighlightJS from 'vue-highlight.js'
    Vue.use(VueHighlightJS)

    export default {
        name: 'LocalState'
    }
</script>
