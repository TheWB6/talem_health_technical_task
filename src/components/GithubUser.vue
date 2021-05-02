<template>
    <div>
        <div :key="user.id" v-for="user in gitHubUser">
            <b-card
                :title=user.login
                style="max-width: 20rem;"
                class="mb-2"
            >
                <img :src="user.avatar_url" alt="">
                <b-button :href=user.html_url target="_blank" variant="primary">
                    View Profile
                </b-button>
            </b-card>
        </div>
    </div>
</template>

<script>

export default {
    name: 'GitHub',
    props: {
        gitHubUser: Array
    },
}
</script>
