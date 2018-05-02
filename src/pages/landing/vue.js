import Vue from 'vue'
import Counter from '@/components/counter/Counter'
import CounterStore from '@/components/counter-store/CounterStore'
import Template from '@/components/code-preview/Template'
import Instance from '@/components/code-preview/Instance'
import VueRouter from '@/components/code-preview/VueRouter'

import { Layout } from 'bootstrap-vue/es/components'
Vue.use(Layout)

import { Card } from 'bootstrap-vue/es/components'
Vue.use(Card)

import { ButtonGroup } from 'bootstrap-vue/es/components'
Vue.use(ButtonGroup)

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
            this.currentSection = this.currentSection == section ? '' : section;
        }
    },
    components: {
        Counter,
        CounterStore,
        Template,
        Instance,
        VueRouter
    }
}
