import { createApp } from "vue";
import App from "./App.vue";
import Friend from "./components/Friend.vue";
import AddFriend from "./components/AddFriend.vue";

const app = createApp(App);

app.component("friend", Friend);
app.component("add-friend", AddFriend);

app.mount("#app");
