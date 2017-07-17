<template>
    <el-table
      :data="data"
      style="width: 100%"
    >
      <el-table-column
        v-for="field in fields"
        :prop="field.prop"
        :label="field.label"
      />
    </el-table>
</template>

<script>
export default {
  props: [
      'data',
      'fields',
  ],
}
</script>