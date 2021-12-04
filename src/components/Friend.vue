<template>
    <li>
        <h2>{{ name }} {{ isFav ? "(favorite)" : "" }}</h2>
        <button @click="toggleFav">Toggle</button>
        <button @click="toggleDetails">
            {{ detailsVisibles ? "Hide" : "Show" }} details
        </button>
        <ul v-if="detailsVisibles">
            <li>
                Phone:<strong>{{ phone }}</strong>
            </li>
            <li>
                Email:<strong>{{ email }}</strong>
            </li>
        </ul>
        <button @click="deleteFriend">delete</button>
    </li>
</template>

<script>
export default {
    // props: ["name", "phone", "email", "isFav"],
    props: {
        id: {
            type: String,
            // required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        isFav: {
            type: Boolean,
            required: false,
            default: false,
            // validator: function (value) {
            //     return value === "1" || value === "0";
            // },
        },
    },
    emits: ["toggle-fav", "deleteFriend"],
    // emits: {
    //     "toggle-fav": function (id) {
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn("id missing");
    //             return false;
    //         }
    //     },
    //},
    data() {
        return {
            detailsVisibles: false,
            // favoriteFriend: this.isFav,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisibles = !this.detailsVisibles;
        },
        toggleFav() {
            this.$emit("toggle-fav", this.id); //always kebap case
        },
        deleteFriend() {
            this.$emit("delete-friend", this.id);
        },
    },
};
</script>
