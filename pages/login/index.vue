<template>
  <!-- eslint-disable vue/html-self-closing -->

  <form class="container">
    <div class="centralizer">
      <div class="label">
        Client Id
      </div>
      <input
        id="clientId"
        name="clientId"
        type="text"
        required
        :value="clientId"
      />
      <div class="label">
        Redirect Uri
      </div>
      <input
        id="redirectUri"
        name="redirectUri"
        type="text"
        class="mt-2"
        required
        :value="redirectUri"
      />
      <button class="mx-auto mt-8" @click="login()">
        Login
      </button>
    </div>
  </form>
</template>

<script>
/* eslint-disable space-before-function-paren, no-useless-escape */
export default {
  data: () => {
    return {
      clientId: '',
      redirectUri: ''
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('discord', {
        params: {
          client_id: this.clientId,
          redirect_uri: this.redirectUri,
          response_type: 'token'
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: rgb(88, 101, 242);
}

.centralizer {
  height: fit-content;
  max-width: 24rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 0px 0px 5px 0px rgb(88, 101, 242);
  padding: 2rem;
  border-radius: 0.5rem;
}

input {
  border: 1px solid rgba(88, 101, 242, 0.5);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: #000;
}

.label {
  color: rgb(88, 101, 242);
  margin-bottom: 0.25rem;
  padding-top: 0.5rem;
}

button {
  background-color: rgb(88, 101, 242);
  color: #fff;
  border: none;
  padding: 0.25rem 0.75rem;
  margin: 0.5rem auto;
  width: fit-content;
  border-radius: 0.25rem;
}
</style>
