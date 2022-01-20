<template>
  <h1>Projet Compta</h1>
  <button @click="test">Click</button>
  <div v-for="client in clients">
    <p>{{ client.id }} {{client.nom}} {{client.prenom}}</p>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'App',
  components: {
  },
  data: function () {
    return {
      clients: [],
    };
  },
  methods: {
    test: function () {
      axios.get('http://localhost:8081/test').then(response => {
        console.log(response.status); // 200
        console.log(response.data); // { toto: "tata" }
        this.clients = response.data;
      }).catch(e => {
            console.log(e);
      });
    }
  }
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
