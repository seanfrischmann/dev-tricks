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
                                    :key="'button-' + button.label"
                                    :pressed="currentSection == button.id"
                                    :variant="button.variant"
                                    @click="changeSection(button.id)"
                                >{{ button.label }}</b-btn>
                            </b-btn-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <div class="welcome-notes" v-show="currentSection == ''">
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
                                <p>
                                </p>
                            </div>
                            <div class="notes" v-show="currentSection == 'instance'">
                                <p>
                                    A few notes about Vue:
                                    <ul>
                                        <li>Vue uses declaritive rendering</li>
                                        <li>Templating syntax</li>
                                        <li>Directive bindings</li>
                                    </ul>
                                </p>
                            </div>
                            <div class="text-center" v-show="currentSection == 'vue-router'">
                                <p>
                                    Vue Router makes it easy to pull in components and map
                                    them to routes.
                                </p>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row
                        class="justify-content-center"
                        v-show="currentSection == 'instance'"
                    >
                        <b-col cols="auto">
                            <p class="text-center template-title">pages/landing/Landing.vue</p>
                            <Template></Template>
                        </b-col>
                        <b-col cols="auto">
                            <p class="text-center template-title">pages/landing/landing.js</p>
                            <Instance></Instance>
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
                    <b-row>
                        <b-col>
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
