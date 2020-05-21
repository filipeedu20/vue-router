<template>
  <div>
    <h1>{{usuarios.name}}</h1>
     <table border="1px" cellpadding="5px" cellspacing="0">
      <tr>
        <td>ID</td>
        <td>{{usuarios.id}}</td>
      <tr>
      <tr>
        <td>E-mail</td>
        <td>{{usuarios.email}}</td>
      </tr>
       <tr>
        <td>Biografia</td>
        <td>{{usuarios.bio}}</td>
      </tr>
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
      .then(
        response =>
          (this.usuarios = response.data.results.find(
            user => user.id == this.$route.params.id
          ))
      );
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>