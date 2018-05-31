<template>
    <b-container fluid class="landing-page">
        <b-row>
            <b-col class="header">
                <h1>{{ title }}</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="12" xl="10" offset-xl="1">
                <b-card
                    header-tag="header"
                >
                    <b-row slot="header" class="justify-content-center">
                        <b-col class="text-center">
                            <b-btn-group>
                                <b-btn
                                    v-for="button in buttons"
                                    :key="'button-' + button.id"
                                    :pressed="currentSection == button.id"
                                    :variant="button.variant"
                                    @click="changeSection(button.id)"
                                >{{ button.label }}</b-btn>
                            </b-btn-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <div class="welcome-notes" v-show="currentSection == 'intro'">
                                <p>
                                    VueJS is a frontend <strong>framework</strong> which
                                    has gained momentum in the last few years.
                                </p>
                                <p>
                                    While similar to React in some of its core concepts,
                                    VueJS leaves a lot up to the user preference.<br>
                                    (https://vuejs.org/v2/guide/comparison.html#React)
                                </p>
                                <p>
                                    In Vue, some key preference based options are:
                                    <ul>
                                        <li>JSX or HTML based templates or both</li>
                                        <li>Component-Scoped CSS / Single-File Components</li>
                                        <li>vue client - command line project generator</li>
                                    </ul>
                                </p>
                            </div>
                            <div v-show="currentSection == 'instance'">
                                <div class="notes">
                                    <p>
                                        While "The Instance" refers to the Vue object, it is
                                        tighly wound up with its corresponding template.
                                    </p>
                                    <p>
                                        The Vue object is where you define:
                                        <ul>
                                            <li>Your state (local)</li>
                                            <li>Your computed properties</li>
                                            <li>Methods</li>
                                            <li>Components used</li>
                                            <li>
                                                Lifecyle functions: created, ready, destroyed
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                                <b-row class="justify-content-center">
                                    <b-col cols="auto">
                                        <p class="text-center template-title">
                                            pages/landing/vue.js
                                        </p>
                                        <Instance></Instance>
                                    </b-col>
                                </b-row>
                                <b-row class="justify-content-center padding">
                                    <b-col cols="auto">
                                        <p>
                                            A little about using templates:
                                            <ul>
                                                <li>Vue uses declaritive rendering</li>
                                                <li>Templating syntax</li>
                                                <li>Directive bindings</li>
                                                <li>Custom Directives</li>
                                                <li>Custom Filters</li>
                                            </ul>
                                        </p>
                                    </b-col>
                                </b-row>
                                <b-row class="justify-content-center">
                                    <b-col cols="auto">
                                        <p class="text-center template-title">
                                            pages/landing/Landing.vue
                                        </p>
                                        <Template></Template>
                                    </b-col>
                                </b-row>
                            </div>
                            <div class="text-center" v-show="currentSection == 'vue-router'">
                                <p>
                                    Vue Router makes it easy to pull in components and map
                                    them to routes.
                                </p>
                            </div>
                            <div v-show="currentSection == 'local-state'">
                                <b-row class="justify-content-center">
                                    <b-col cols="auto">
                                        <p class="text-center template-title">
                                            components/counter/vue.js
                                        </p>
                                        <LocalState></LocalState>
                                    </b-col>
                                </b-row>
                            </div>
                            <div v-show="currentSection == 'global-state'">
                                <div class="notes">
                                    <p>
                                        Global State (Store) is a well known established
                                        pattern used when multiple components interact
                                        with a common state.
                                    </p>
                                    <p>
                                        Vue uses a library called Vuex, which is a state
                                        management tool modeled after Flux/Redux.
                                    </p>
                                </div>
                                <b-row class="justify-content-center">
                                    <b-col cols="auto">
                                        <p class="text-center template-title">
                                            components/counter-store/vue.js
                                        </p>
                                        <GlobalState></GlobalState>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row
                        class="justify-content-center"
                        v-show="currentSection == 'vue-router'"
                    >
                        <b-col cols="auto">
                            <p class="text-center template-title">router/index.js</p>
                            <VueRouter></VueRouter>
                            <div class="text-center">
                                <router-link to="/docs">Vue Resources</router-link>
                            </div>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
        <b-row v-show="currentSection == 'local-state'">
            <b-col sm="12" xl="10" offset-xl="1">
                <b-card
                    header-tag="header"
                    >
                    <h4 slot="header" class="text-center">Local State</h4>
                    <b-row class="justify-content-center">
                        <b-col cols="auto">
                            <Counter :color="'blue'"/>
                        </b-col>
                        <b-col cols="auto">
                            <Counter :color="'maroon'"/>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
        <b-row v-show="currentSection == 'global-state'">
            <b-col sm="12" xl="10" offset-xl="1">
                <b-card
                    header-tag="header"
                    >
                    <h4 slot="header" class="text-center">Global State</h4>
                    <b-row class="justify-content-center">
                        <b-col cols="auto">
                            <CounterStore :color="'orange'"/>
                        </b-col>
                        <b-col cols="auto">
                            <CounterStore :color="'green'"/>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script src="./vue.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
