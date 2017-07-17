<template>
  <el-form :model="attendForm" :rules="rules" ref="attendForm" label-width="100px">
    <el-form-item label="type" prop="type" v-if="attendType === 0">
      <el-select v-model="attendForm.type" placeholder="Please select type" >
        <el-option label="Normal" :value="0"></el-option>
        <el-option label="Holiday" :value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="days" prop="days">
      <el-input-number v-model="attendForm.days"  :min="1" :max="10"></el-input-number>
    </el-form-item>
    <el-form-item label="time" required>
        <el-form-item prop="update_time">
          <el-date-picker type="date" placeholder="select time" v-model="attendForm.update_time" style="width: 100%;"></el-date-picker>
        </el-form-item>
    </el-form-item>
    <el-form-item label="reason" prop="detail">
      <el-input type="textarea" v-model="attendForm.detail"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('attendForm')">Submit</el-button>
      <el-button @click="resetForm('attendForm')">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: ['attendType'],
  data() {
    return {
      attendForm: {
        // 如果是请假,则type默认是2,否则默认是0；
        // attendType === 0 则代表是申请加班，则是代表请假
        type: 0,
        update_time: '',
        days:1,
        detail: ''
      },
      rules: {
        update_time: [
          { type: 'date', required: true, message: 'Please select time', trigger: 'change' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.handleSubmit();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleSubmit() {
      console.log(this.attendForm);
      this.$curl({
        url: '/api/attendance/create_attendance',
        data: Object.assign(
          this.attendForm, 
          {
            id: window.localStorage['id'],
            update_time: this.$date(this.attendForm.update_time),
          }
        ),
      }).then(({data}) => { if(data.affectedRows === 1)  {  
        this.$message({
            message: 'Success!',
            type: 'success'
        });} 
      })
      .catch(error => {console.log(error);})
    }
  }
}
</script>