  
<template>
  <div id="app">
    <h1>Registro de usuários</h1>
    <table border="1px" cellpadding="5px" cellspacing="0">
      <thead>
        <tr>
          <th width="200" span="1">Nome</th>
          <th width="200" scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in usuarios" :key="user.id">
          <td>
            <router-link :to="{path: `user/${user.id}`}">{{user.name}}</router-link>
          </td>
          <td>{{user.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "User",
    props: {
      msg: String
    },
    data() {
      return {
        usuarios: ""
      };
    },
    mounted() {
      axios
        .get("https://www.mocky.io/v2/5ebdbed93100008e00c5cd2d")
        .then(response => (this.usuarios = response.data.results));
    }
  };
</script>