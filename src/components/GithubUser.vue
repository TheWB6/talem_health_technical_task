<template>
    <div id="userCard">
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
    name: 'GithubUser',
    props: {
        gitHubUser: Array
    },
}
</script>

<style scoped>
    #userCard > :first-child {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
</style>