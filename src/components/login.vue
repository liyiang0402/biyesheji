<template lang="html">
  <div class="login">
    <div class="modal-container">
      <div class="modal-header">
        <el-button type="button" @click="toggleSignIn">登陆</el-button>
        <el-button type="button" @click="toggleSignUp">注册</el-button>
      </div>
      <div class="modal-body">
        <transition name="fade">
          <el-form :model="user" status-icon :rules="rules2" ref="user"  v-show="signInShow" label-width="100px" class="signInForm">
            <el-form-item label="用户名" prop="userName">
              <el-input type="input" v-model="user.userName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="user.password" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
        </transition>
        <transition name="fade">
          <el-form :model="userUp" status-icon :rules="rules3" ref="userUp"  v-show="signUpShow" label-width="100px" class="signInForm">
            <el-form-item label="用户名" prop="userName">
              <el-input type="input" v-model="userUp.userName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="userUp.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="userUp.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phoneNumber">
              <el-input type="input" v-model="userUp.phoneNumber" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
        </transition>
      </div>
      <div class="modal-footer">
        <el-button id="signBtn" type="button" @click="submitForm(formName)">登陆</el-button>
        <el-button type="danger" @click="resetForm(formName)">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Bus from '../eventBus.js'

  export default {
    data() {
      var checkUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        }
          callback();
      };
      var checkPhoneNumber = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号码'));
        }
          callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
          callback();

      };
      var validatePass11 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.userUp.checkPass !== '') {
            this.$refs.userUp.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass22 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.userUp.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        userId:'',
        signUpShow: false,
        signInShow: true,
        user: {
          userName: '',
          password: ''
        },
        userUp:{
          userName: '',
          password: '',
          checkPass: '',
          phoneNumber: ''
        },
        rules2: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          userName: [
            { validator: checkUserName, trigger: 'blur' }
          ]
        },
        rules3: {
          password: [
            { validator: validatePass11, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass22, trigger: 'blur' }
          ],
          userName: [
            { validator: checkUserName, trigger: 'blur' }
          ],
          phoneNumber:[
            { validator: checkPhoneNumber, trigger: 'blur'}
          ]
        },
        getUser:{}
      };
    },
    methods: {
      toggleSignIn: function () {
         this.signUpShow = false
         this.signInShow = true
         let btn = document.getElementById('signBtn')
         btn.innerHTML = '登陆'
         this.$refs['userUp'].resetFields()
       },
       toggleSignUp: function () {
         this.signInShow = false
         this.signUpShow = true
         let btn = document.getElementById('signBtn')
         btn.innerHTML = '注册'
         this.$refs['user'].resetFields()
       },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if(this.signInShow){
            if (valid) {
              this.getUser.userName = this.user.userName;
              this.getUser.password = this.user.password;
              this.$axios.post('/api/getPassword',this.getUser).then((res)=>{
                if (res.data.data.length!==0) {
                  this.userId = res.data.data[0].uid
                  localStorage.setItem('uid',this.userId)
                  this.$router.push('/home')
                }else {
                  this.$message.error('请输入正确的用户名和密码');
                }
              })
            }
          } else {
            if (valid) {
              this.getUser.userName = this.userUp.userName;
              this.getUser.password = this.userUp.password;
              this.getUser.phoneNumber = this.userUp.phoneNumber;
              this.$axios.post('/api/addUser',this.getUser).then((res)=>{
                  this.$message('注册成功');
                  this.toggleSignIn();
              })
            }
          }
        });

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    computed: {
      formName(){
        if (this.signInShow && !this.signUpShow) {
          return 'user';
        }else {
          return 'userUp';
        }
      }
    }
  }
</script>

<style lang="css" scoped>
.login{
  height: 100%;
  background-size:100% 100%;
  background-repeat: no-repeat;
  background-image: url('../assets/loginbg.jpg');
}
.signInForm {
  vertical-align: middle;
}
.modal-container {
  position: fixed;
  left: 50%;
  top: 100px;
  width: 30%;
  vertical-align: middle;
  margin-left: -15%;
  padding: 20px 30px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  opacity: 0.7;
}

.modal-header {
  width: 41%;
  margin: 0 auto;
}
.modal-header .el-button{
  margin-top: 0;
  color: #42b983;
  margin-left: 0px;
  margin-right: 0px;
}
.modal-body {
  margin: 20px 0;
  width: 100%;
  height: 60%;
}
.modal-footer {
  width: 50%;
  margin: 0 auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity ;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
