<template>
    <viewTable :data="tableData"  :fields="fields" />
</template>

<script>
import viewTable from '$common/view-table/view-table.vue';
export default {
  name: 'salary-basic',
  components: {
    viewTable,
  },
  data() {
      return {
        tableData: [],
        fields: [
           {
             prop: 'disable_salary',
             label: 'Disable',
           },
           {
             prop: 'basic_salary',
             label: 'Basic',
           },
           {
             prop: 'update_time',
             label: 'Update_time',
           },
           {
             prop: 'allowance',
             label: 'Allowance'
           },
           {
             prop: 'update_time',
             label: 'Update_time',
           },
           {
             prop: 'sum',
             label: 'Sum',
           }
        ],
      }
  },
  created() {
      this.$curl({
          url: '/api/salary/get_basic_salary',
          method: 'get',
          query: { id: window.localStorage['id'] },
        }).then(({ data, metadata }) => {
          let wrap = [];
          // 判断data是否是数组;
          if (Array.isArray(data)) {
            wrap = data;
          } else {
            wrap.push(data);
          }
          this.tableData = wrap.map((record, index) => {
              return Object.assign(record, {
                update_time: this.$date(record.update_time),
              });
          });
          console.log(this.tableData);
        }).catch(error => {
          console.log(error);
      });
  }
}
</script>