<script lang="ts" setup>
  const router = useRouter();
  const username = ref("admin");
  const password = ref("123456");
  const onSubmit = (values: api.LOGIN) => {
    console.log("submit", values);
    router.push({ path: "/home" });
  };
</script>
<template>
  <div class="loginBox">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          :rules="[{ required: true, message: '请填写用户名' }]"
          label="用户名"
          name="用户名"
          placeholder="用户名"
        />
        <van-field
          v-model="password"
          :rules="[{ required: true, message: '请填写密码' }]"
          label="密码"
          name="密码"
          placeholder="密码"
          type="password"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button block native-type="submit" round type="primary"> 提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<style lang="scss" scoped>
  .loginBox {
    @include wh(100%, 100vh);
    padding-top: 40%;
    background-color: #fff;
  }
</style>
