<template>
  <div class="container">
    <h2>请输入 Shell 脚本</h2>
    <a-textarea
      v-model="value"
      placeholder="Please enter shell script"
      :auto-size="{ minRows: 5, maxRows: 10 }"
    />
    <a-button
      type="primary"
      size="large"
      class="m-t-15"
      @click="submitData"
    >
      提交
    </a-button>
    <div class="m-t-15">
      <a-card title="Windows 系统关机命令参考">
        <p>1小时后关机：shutdown -s -t 3600</p>
        <p>取消关机：shutdown -a</p>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 'shutdown -s -t 3600'
    }
  },
  methods: {
    submitData () {
      this.$axios.post('/api/exec', {
        commands: this.value
      }).then((res) => {
        // eslint-disable-next-line no-console
        console.log(res)
      })
    }
  }
}
</script>

<style>
.container {
  max-width: 960px;
  margin: 0 auto;
  padding-top: 50px;
}

.m-t-15 {
  margin-top: 15px;
}
</style>
