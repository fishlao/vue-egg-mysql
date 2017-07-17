<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="OverTime" name="first"><attendanceForm :attendType='0' /></el-tab-pane>
    <el-tab-pane label="Leave" name="second"><attendanceForm :attendType='1'/></el-tab-pane>
  </el-tabs>
</template>
<script>
import attendanceForm from './attendance-form/attendance-form.vue';
  export default {
    name: 'add-attendance',
    components: {
        attendanceForm,
    },
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>