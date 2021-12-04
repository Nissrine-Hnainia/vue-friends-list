<template>
    <form @submit.prevent="addNewFriend">
        <div>
            <label>Name</label>
            <input type="text" v-model="newName" />
        </div>
        <div>
            <label>Phone</label>
            <input type="text" v-model="newPhone" />
        </div>
        <div>
            <label>Email</label>
            <input type="email" v-model="newEmail" />
        </div>
        <button>add</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            newName: "",
            newPhone: "",
            newEmail: "",
        };
    },
    methods: {
        addNewFriend() {
            this.$emit(
                "add-new-friend",
                this.newName,
                this.newPhone,
                this.newEmail
            );
        },
    },
    emits: ["add-new-friend"],
};
</script>
