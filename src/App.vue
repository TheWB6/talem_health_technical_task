<template>
  <div id="app">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-2" label="Your Github User Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.userName"
          placeholder="Enter User Name"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <GithubUser :gitHubUser="gitHubUser" />
  </div>
</template>

<script>
import GithubUser from './components/GithubUser.vue'

export default {
  name: 'App',
  components: {
    GithubUser
  },
  data() {
    return {
      form: {
        userName: ''
      },
      gitHubUser: []
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      this.gitHubUser = await this.fetchGithubUser(this.form.userName)
    },
    async fetchGithubUser(userName='thewb6') {
      const res = await fetch(`https://api.github.com/search/users?q=${userName}`)

      const data = await res.json()
      console.log(data)
      return data.items
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
