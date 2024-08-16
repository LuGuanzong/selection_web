<template>
  <div class="outer-content" style="background-image: url('src/assets/background.jpg');">
    <div class="box">
      <div class="content">
          <h2>登录</h2>
          <div>
              <input type="text" placeholder="请输入用户名" v-model="username">
          </div>
          <div>
              <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div>
              <input type="submit" value="登录" @click="handleLogin" :disabled="pwdDisabled">
          </div>
      </div>
      <a href="#" class="btns" @click="dialogVisible = !dialogVisible">忘记密码</a>
      <a href="#" class="btns register" @click="dialogVisible = !dialogVisible">注册</a>
    </div>
  </div>

  <el-dialog
      v-model="dialogVisible"
      style="background: transparent;text-align: center;gap: 10px;width: fit-content; padding: 0;"
      :show-close="false"
  >
    <el-image src="src/assets/myWechat.jpg" fit="contain" style="height: 40vh;min-height: 300px;">
      <template #placeholder>
        <span>Loading...</span>
      </template>
    </el-image>
    <el-image src="src/assets/myWechatPay.jpg" fit="contain" style="height: 40vh;min-height: 300px;margin-left: 10px;">
      <template #placeholder>
        <span>Loading...</span>
      </template>
    </el-image>
  </el-dialog>

</template>

<script lang="ts" setup>
import {ref} from "vue";
import {login} from "@/api/user";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";

const router = useRouter()

/**
 * 嘿嘿嘿小弹窗
 */
const dialogVisible = ref(false)

/**
 * 登录逻辑
 */
const username = ref('')
const password = ref('')

const pwdDisabled = ref(false)

const handleLogin = () => {
  if (!username.value || !password.value) {
    ElMessage.warning('请先补全账号密码')
    return
  }

  const params = {
    username: username.value,
    password: password.value
  }

  pwdDisabled.value = true
  login(params).then(() => router.push('/')).finally(() => pwdDisabled.value = false)
}

</script>

<style scoped lang="scss">
.outer-content {
  background-size: cover; /* 覆盖整个容器，图片可能会被裁剪以适配容器 */
  background-position: center; /* 图片居中显示 */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  color: var(--vt-c-white-soft);
}

.box {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 470px;
}

.box .content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 350px;
    height: 350px;
    padding: 60px 20px;
    box-shadow: inset 20px 20px 20px rgba(0, 0, 0, .05),
        25px 35px 20px rgba(0, 0, 0, .05),
        25px 30px 30px rgba(0, 0, 0, .05),
        inset -20px -20px 25px rgba(255, 255, 255, .9);
}

.box .content {
    transition: .5s;
    border-radius: 52% 48% 33% 67% / 38% 45% 55% 62%;
}

.box .content:hover {
    border-radius: 50%;
}

.box .content::before {
    content: '';
    position: absolute;
    top: 50px;
    left: 85px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.9;
}

.box .content::after {
    content: '';
    position: absolute;
    top: 90px;
    left: 110px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.9;
}

.box .content div {
    position: relative;
    width: 225px;
    border-radius: 25px;
    box-shadow:
        inset 2px 5px 10px rgba(0, 0, 0, .1),
        inset -2px -5px 10px rgba(255, 255, 255, .1),
        15px 15px 10px rgba(0, 0, 0, .05),
        15px 10px 15px rgba(0, 0, 0, .025);
}

.box .content input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    padding: 10px 15px;
    color: #fff;
}

.box .content input[type="submit"] {
    color: #fff;
    cursor: pointer;
}

.box .content div:last-child {
    width: 120px;
    background: #ff0f5b;
    transition: 0.5s;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, .1),
        15px 15px 10px rgba(0, 0, 0, .05),
        15px 10px 15px rgba(0, 0, 0, .025);
}

.box .content div:last-child:hover {
    width: 150px;
}

.box .content div::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 65%;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
}

.btns {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 120px;
    height: 120px;
    background: #c61dff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
}

.btns {
    border-radius: 44% 56% 65% 35% / 57% 58% 42% 43%;
    box-shadow: inset 10px 10px 10px rgba(190, 1, 254, .05),
        15px 25px 10px rgba(190, 1, 254, .1),
        15px 20px 20px rgba(190, 1, 254, .1),
        inset -10px -10px 15px rgba(255, 255, 255, .5);
}

.register {
    bottom: 150px;
    right: 0px;
    width: 80px;
    height: 80px;
    background: #01b4ff;
    border-radius: 49% 51% 52% 48% / 63% 59% 41% 37%;
    box-shadow: inset 10px 10px 10px rgba(1, 180, 255, .05),
        15px 25px 10px rgba(1, 180, 255, .1),
        15px 20px 20px rgba(1, 180, 255, .1),
        inset -10px -10px 15px rgba(255, 255, 255, .5);
}

.btns::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 30px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.45;
}

.register::before {
    left: 20px;
    width: 15px;
    height: 15px;
}

.btns {
    transition: 0.25s;
}

.btns:hover {
    border-radius: 50%;
}
</style>