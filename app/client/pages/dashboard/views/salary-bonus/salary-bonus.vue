<template>
    <viewTable :data="tableData"  :fields="fields" />
</template>

<script>
import viewTable from '$common/view-table/view-table.vue';
export default {
  name: 'salary-bonus',
  components: {
    viewTable,
  },
  data() {
      return {
        tableData: [],
        fields: [
           {
             prop: 'bonus',
             label: 'Bonus',
           },
           {
             prop: 'year',
             label: 'Year',
           }
        ],
      }
  },
  created() {
    this.$curl({
        url: '/api/salary/get_bonus',
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
              bonus: Number(record.bonus).toFixed(2),
            });
          });
      }).catch(error => {
        console.log(error);
    });
  }
}
</script>