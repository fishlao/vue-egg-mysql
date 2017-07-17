<template>
    <viewTable :data="tableData"  :fields="fields" />
</template>

<script>
import viewTable from '$common/view-table/view-table.vue';
export default {
  name: 'salary-company',
  components: {
    viewTable,
  },
  data() {
      return {
        tableData: [],
        fields: [
          {
           prop: 'total_salary',
           label: 'Total',
          },
          {
           prop: 'date',
           label: 'Date',
          },
        ],
      }
  },
  created() {
    this.$curl({
        url: '/api/salary/get_company_salary',
        method: 'get',
      }).then(({ data, metadata }) => {
        let wrap = [];
        // 判断data是否是数组;
        if (Array.isArray(data)) {
          wrap = data;
        } else {
          wrap.push(data);
        }
        this.tableData = data;
      }).catch(error => {
        console.log(error);
    });
  }
}
</script>