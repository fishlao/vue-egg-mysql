<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="OverTime" name="overTime"><viewTable :data="tableData"  :fields="overTime_fields" /></el-tab-pane>
    <el-tab-pane label="Leave" name="Leave"><viewTable :data="tableData"  :fields="leave_fields" /></el-tab-pane>
  </el-tabs>
</template>
<script>
import viewTable from '$common/view-table/view-table.vue';
  export default {
    name: 'query-attendance',
    components: {
        viewTable,
    },
    data() {
      return {
        activeName: 'overTime',
        tableData: [],
        overTime_fields: [
           {
             prop: 'days',
             label: 'Days',
           },
           {
             prop: 'type',
             label: 'Type',
           },
           {
             prop: 'update_Time',
             label: 'Update_Time',
           },
           {
             prop: 'detail',
             label: 'Detail',
           }
        ],
        leave_fields: [
           {
             prop: 'days',
             label: 'Days',
           },
           {
             prop: 'update_Time',
             label: 'Update_Time',
           },
           {
             prop: 'detail',
             label: 'Detail',
           }
        ],
      };
    },
    created() {
      this.$curl({
        url: '/api/attendance/get_attendance',
        method:'get',
        query: {
            id: window.localStorage['id'],
        },
      }).then(({data}) => { 
        this.tableData = data.map(
          (record, index) => {
            const { update_Time, type } = record;
            return Object.assign(record, {
              update_Time: this.$date(update_Time),
              type: this.getType(type),
            });
          });
        })
      .catch(error => {console.log(error);})
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getType(type) {
        if (type === 0) 
          return 'Normal'; 
        else if(type === 1)
          return 'Holiday';
      },
    }
  };
</script>