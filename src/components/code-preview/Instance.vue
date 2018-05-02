<template>
    <highlight-code lang="javascript" class="text-left">
        import Vue from 'vue'
        import Counter from '@/components/counter/Counter'
        import CounterStore from '@/components/counter-store/CounterStore'

        // Example of importing vendor components
        import { Button } from 'bootstrap-vue/es/components'
        Vue.use(Button)

        export default {
            name: 'Landing',
            data() {
                return {
                    title: 'An Introduction to VueJS',
                    currentSection: '',
                    buttons: [
                        {
                            label: 'The Instance',
                            id: 'instance',
                            variant: 'outline-secondary'
                        },
                        {
                            label: 'Vue Router',
                            id: 'vue-router',
                            variant: 'outline-secondary'
                        },
                        {
                            label: 'Local State',
                            id: 'local-state',
                            variant: 'outline-secondary'
                        },
                        {
                            label: 'Global State',
                            id: 'global-state',
                            variant: 'outline-secondary'
                        }
                    ]
                };
            },
            methods: {
                changeSection(section) {
                    this.currentSection =
                        (this.currentSection == section) ? '' : section;
                }
            },
            components: {
                Counter,
                CounterStore,
            }
        }
    </highlight-code>
</template>

<script>
    import Vue from 'vue'
    import VueHighlightJS from 'vue-highlight.js'
    Vue.use(VueHighlightJS)

    export default {
        name: 'Instance'
    }
</script>
