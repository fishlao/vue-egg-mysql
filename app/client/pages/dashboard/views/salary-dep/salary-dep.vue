<template>
    <viewTable :data="tableData"  :fields="fields" />
</template>

<script>
import viewTable from '$common/view-table/view-table.vue';
export default {
  name: 'salary-dep',
  components: {
    viewTable,
  },
  data() {
      return {
        tableData: [],
        fields: [
          {
           prop: 'name',
           label: 'Name',
          },
          {
           prop: 'total_salary',
           label: 'Total',
          },
          {
           prop: 'average_salary',
           label: 'Average',
          },
          {
           prop: 'max_salary',
           label: 'Max',
          },
          {
           prop: 'min_salary',
           label: 'Min',
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
        url: '/api/salary/get_dep_salary',
        method: 'get',
        // 员工id
        query: { id: window.localStorage['id'] },
      }).then(({ data, metadata }) => {
        let wrap = [];
        // 判断data是否是数组;
        if (Array.isArray(data)) {
          wrap = data;
        } else {
          wrap.push(data);
        }
        this.tableData = wrap;
      }).catch(error => {
        console.log(error);
    });
  }
}
</script>