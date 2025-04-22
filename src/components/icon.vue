<template>
    <font-awesome-icon v-if="icon.length > 0" :icon="[icon[0], icon[1]]" />
</template>

<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBilibili, faGithub, faQq, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { onBeforeMount } from 'vue';

library.add(faBilibili, faGithub, faQq, faTwitter, faGamepad, faEnvelope);

defineProps({
    icon: {
        type: Array,
        required: true,
        default: () => ['fab', 'github'],
    },
});
onBeforeMount(() => {

})
</script>

<style scoped></style>