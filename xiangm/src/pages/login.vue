<template>
<el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">   <!--标识-->
    <el-form-item prop="email" label="邮箱" :rules="[
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
    <el-input v-model="dynamicValidateForm.email" class='u-input'></el-input>
    </el-form-item>
    <el-form-item  label="密码" :prop="password"
    :rules="{
        required: true, message: '请输入8位数密码', trigger: 'blur' }">
    	<el-input v-model="dynamicValidateForm.password" class='u-input'></el-input>
    </el-form-item>
    <el-form-item>
    	<el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
    	<el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
            password:'',
            email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('/');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.password.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
</script>

<style>
    .demo-dynamic{
        position:absolute;
        top:50%;
        left:50%;
        margin-left:-150px;
        margin-top:-95px;
    }
    .u-input{
        width:200px;
    }



</style>