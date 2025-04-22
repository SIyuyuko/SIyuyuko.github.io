<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from 'vue';
import Icon from './icon.vue';
let selectedNavType = ref("contact");
let displayedText = ref("");
let greetingText = "Hi, I am SIyuyuko.";
const navList = ref([
    {
        name: 'Contact',
        type: "contact",
        link: false,
    },
    {
        name: 'Blog',
        type: "blog",
        link: '/docs',
    },
    {
        name: 'About me',
        type: "about",
        link: false,
    },
]);
const contactList = ref([
    {
        name: "osu!",
        link: 'https://osu.ppy.sh/users/9794030',
        icon: ['fas', 'gamepad'],
    },
    {
        name: "Github",
        link: 'https://github.com/SIyuyuko',
        icon: ['fab', 'github'],
    },
    {
        name: "X",
        link: 'https://x.com/SIyuyuko',
        icon: ['fab', 'twitter'],
    },
    {
        name: "Bilibili",
        link: 'https://space.bilibili.com/12868074',
        icon: ['fab', 'bilibili'],
    },
    {
        name: "QQ",
        link: 'https://qm.qq.com/q/wNrJd3X2Mw',
        icon: ['fab', 'qq'],
    },
    {
        name: "E-mail",
        link: "mailto:3228981717@qq.com",
        icon: ['fas', 'envelope']
    }

])
interface Nav {
    name: string;
    type: string;
    link: string | boolean;
}
function switchNavType(nav: Nav) {
    if (nav && typeof nav.link === 'string') {
        window.open(nav.link, '_self');
    } else {
        selectedNavType.value = nav.type;
    }
}
let typingIndex = 0;
function dynamicDisplayText() {
    if (typingIndex < greetingText.length) {
        displayedText.value += greetingText[typingIndex];
        typingIndex++;
        setTimeout(dynamicDisplayText, 100);
    }
}
onBeforeMount(() => {

});
onMounted(() => {
    dynamicDisplayText();
})
</script>

<template>
    <div
        class="card border-20px rounded-xl filter backdrop-blur-3xl bg-black/50 flex flex-col items-center p-4 text-#fff m-auto">
        <p class="greeting-text">{{ displayedText }}</p>
        <div class="nav flex items-center w-full m-auto gap-6">
            <ul class="menu flex flex-col gap-6 items-center justify-center">
                <li v-for="(item, index) in navList" :key="index" :value="item.type" @click="switchNavType(item)">
                    {{ item.name }}</li>
            </ul>
            <div class="w-full h-full border-lavender/50 border-1 rounded-xl">
                <div class="flex flex-wrap justify-between h-full gap-y-0.5" v-show="selectedNavType === 'contact'">
                    <a class="basis-1/2 m-auto" v-for="(item, index) in contactList" :key="index" :href="item.link"
                        target="_blank">
                        <Icon class="mr-1" :icon="item.icon" />{{ item.name }}
                    </a>
                </div>
                <div class="flex flex-col justify-center h-full" v-show="selectedNavType === 'about'">
                    <p>Born in 2001.11.30</p>
                    <p>Chinese</p>
                    <p>INFJ-T</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@layer components {
    .card {
        width: 300px;
        height: 200px;
    }

    .greeting-text {
        border-right: 1px solid #fff;
        animation: blink 0.7s steps(1) infinite;
    }

    @keyframes blink {
        50% {
            border-color: transparent;
        }
    }

    .nav {
        font-size: 12px;

        .menu {
            li {
                text-decoration: underline transparent;
                white-space: nowrap;
                text-wrap: nowrap;
            }

            li:hover {
                color: var(--color-lavender);
                cursor: pointer;
                text-decoration: underline;
                transition: all 0.2s ease-in-out;
            }

            li:active {
                color: var(--color-ghostwhite);
            }
        }
    }
}
</style>