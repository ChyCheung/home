import { createApp } from "vue";
import "@/style/style.scss";
import App from "@/App.vue";
// 引入 pinia
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// swiper
import "swiper/css";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.mount("#app");

// PWA
navigator.serviceWorker.addEventListener("controllerchange", () => {
  // 弹出更新提醒
  console.log("站点已更新，刷新后生效");
  ElMessage("站点已更新，刷新后生效");
});

let getResume = () => {
  let items = [...document.querySelector(".name.text-hidden")];
  for (let i of items) {
    if (i.textContent === "简历") {
      return i.previousElementSibling;
    }
  }
}

let resume = getResume();
resume.links.addEventListener("onclick", () => {
  let pwSet = 2002;
  let pwInput = prompt("查看简历请输入密码：", "");
  if (pwInput === null && pwInput !== pwSet) {
    alert('密码错误');
    window.location.href = 'https://sova.org.cn';
  } else {
    window.open("https://chycheung.me", '_blank');
  }
});
