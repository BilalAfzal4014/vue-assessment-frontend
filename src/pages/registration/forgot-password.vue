<template>
  <div>
    <form>
      <div>
        <label>email:</label>
        <input type="text" v-model="user.email" placeholder="enter email">
      </div>
      <button type="button" v-on:click="sendEmail">send email</button>
    </form>
  </div>
</template>


<script>
import Joi from "joi";
import * as toastr from "toastr";
import {forgotPassword} from "../../api/registration";

export default {
  name: "forgot-password",
  data(){
    return {
      user:{
        email: ""
      }
    }
  },
  methods:{
    sendEmail(){
      if (!this.validateUser())
        return;

      //forgotPassword
    },
    validateUser() {
      const schema = Joi.object({
        "email": Joi.string().email({tlds: {allow: false}}).required()
      }).unknown(true);

      const {error} = schema.validate(this.user);

      if (error) {
        toastr.error(error);
        return false;
      }
      return true;
    }
  }
}
</script>
