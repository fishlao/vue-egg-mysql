<template>
  <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="Actor" prop="actor">
      <el-select 
        v-model="ruleForm.id" 
        placeholder="Please select actors" 
      >
        <el-option 
          v-for="actor in actors" 
          :label="actor.literal" 
          :value="actor.value" 
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Level" prop="level">
      <el-select v-model="ruleForm.level" placeholder="Please select level" >
        <el-option label="Normal" :value="1"></el-option>
        <el-option label="Manager" :value="2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Salary" prop="salary">
      <el-input-number v-model="ruleForm.salary"  :min="1000" ></el-input-number>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
      <el-button @click="resetForm('ruleForm')">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    props: ['attendType'],
    data() {
      return {
        ruleForm: {
          id: '',
          level: 1,
          salary: 1000
        },
        actors: [],
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
        this.$curl({
          url: '/api/salary/set_salary',
          data: this.ruleForm, 
        }).then(({data}) => { if(data.affectedRows === 1)  console.log('success'); })
        .catch(error => {console.log(error);})
      }
    },
    created(){
      this.$curl({
          url: '/api/actor/get_all_actors',
          method: 'get',
      }).then(({data}) => {
          this.actors = data.map((record, index) => {
              return {
                value: record.id,
                literal: record.name,
              };
          }).filter((record)=> { console.log(record); return record.value != '3'}); //去除设定CEO的显示
          this.$message({
            message: 'Success!',
            type: 'success'
          });
          
      }).catch(error => {console.log(error);})
    }
  }
</script>