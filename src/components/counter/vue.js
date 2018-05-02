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
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    }
};
