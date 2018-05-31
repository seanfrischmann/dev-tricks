<template>
    <highlight-code lang="html" class="text-left" v-pre>
        &lt;template>
            &lt;b-col class="header">
                &lt;h1>{{ title }}&lt;/h1>
                &lt;!-- You can also use the v-text directive -->
                &lt;h1 v-text="title">&lt;/h1>
            &lt;/b-col>
            &lt;b-btn-group>
                &lt;b-btn
                    v-for="button in buttons"
                    :key="'button-' + button.id"
                    :pressed="
                        currentSection == button.id
                    "
                    :variant="button.variant"
                    @click="changeSection(button.id)"
                >{{ button.label }}&lt;/b-btn>
            &lt;/b-btn-group>
            &lt;div class="notes">
                &lt;p v-show="currentSection == 'instance'">
                    A few notes about Vue:
                    &lt;ul>
                        &lt;li>Vue uses declaritive rendering&lt;/li>
                        &lt;li>Templating syntax&lt;/li>
                        &lt;li>Directive Bindings&lt;/li>
                    &lt;/ul>
                &lt;/p>
            &lt;/div>
        &lt;/template>
        &lt;script src="./vue.js">&lt;/script>
        &lt;style src="./style.scss" lang="scss" scoped>&lt;/style>
    </highlight-code>
</template>

<script>
    import Vue from "vue";
    import VueHighlightJS from "vue-highlight.js";
    Vue.use(VueHighlightJS);

    export default {
      name: "Template"
    };
</script>
