<template>
    <section>
        <header>
            <h1>Friends' list</h1>
        </header>
        <ul>
            <friend
                v-for="friend in friends"
                :key="friend.id"
                :id="friend.id"
                :name="friend.name"
                :phone="friend.phone"
                :email="friend.email"
                :is-fav="friend.isFavorite"
                @toggle-fav="toggleFavorite"
                @delete-friend="deleteFriend"
            >
            </friend>
        </ul>
        <add-friend @add-new-friend="addFriend"></add-friend>
    </section>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: "first",
                    name: "Jane Doe",
                    phone: "01258963",
                    email: "jane@gmail.com",
                    isFavorite: true,
                },
                {
                    id: "second",
                    name: "John Doe",
                    phone: "06934852",
                    email: "john@gmail.com",
                    isFavorite: false,
                },
            ],
        };
    },
    methods: {
        toggleFavorite(friendId) {
            const foundFriend = this.friends.find(
                (friend) => friend.id === friendId
            );
            foundFriend.isFavorite = !foundFriend.isFavorite;
        },
        addFriend(name, phone, email) {
            const newFriend = {
                id: Date.now(),
                name: name,
                phone: phone,
                email: email,
                isFavorite: false,
            };
            this.friends.push(newFriend);
        },
        deleteFriend(friendId) {
            this.friends = this.friends.filter((el) => el.id !== friendId);
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@300&family=Raleway:wght@300&display=swap");
* {
    box-sizing: border-box;
}

html {
    font-family: "Raleway", sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #2c3e50;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li,
#app form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 2rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #2c3e50;
    margin: 0 0 1rem 0;
}

#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #815b6d;
    background-color: #815b6d;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
    background-color: #815b6d;
    border-color: #815b6d;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
    font: inherit;
    padding: 0.15rem;
}
#app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
}
#app form div {
    margin: 1rem 0;
}
</style>
