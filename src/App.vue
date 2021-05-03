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
    <div id="userCard">
      <div :key="user.id" v-for="user in gitHubUser">
          <b-card
            :title=user.login
            style="max-width: 20rem;"
            class="mb-2"
          >
            <img :src="user.avatar_url" alt="" style="width: 250px">
            <b-button :href=user.html_url target="_blank" variant="primary">
                View Profile
            </b-button>
          </b-card>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
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

#input-group-2 > div {
  display: flex;
  justify-content: center;
}

#input-2 {
  width: 50%;
}

#userCard > :first-child {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
</style>
