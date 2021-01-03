<!-- 左右分布的表格 -->
<template>
  <u-table class="column-table table-collapse">
    <u-tr
      v-for="(value, key, mapIndex) in headerMapping"
      :key="key"
      class="column-table-tr">
      <!-- 递归菜单 -->
      <template v-if="value.collapse">
        <u-td
          v-for="(item, index) in collapseTransform(value.collapse)"
          :key="index"
          :rowspan="item.rowspan || 1"
          :colspan="item.colspan || 1"
          class="column-table-rowspan"
          :width="item.width || 'auto'">
          {{item.label}}
        </u-td>
      </template>
      <!-- 一级菜单（有递归菜单这就是最靠右的菜单） -->
      <u-td
        class="column-table-left"
        :rowspan="value.rowspan || 1"
        :colspan="value.colspan || 1"
        :width="value.width || 'auto'">
        {{value | label}}
      </u-td>
      <!-- 表格内容 -->
      <template v-if="data[0] != null && data.length">
        <u-td
          class="column-table-right"
          :width="value.valWidth || 'auto'"
          v-for="(item, index) in data"
          :key="(key + index)">
          <div v-if="!value.slot">{{parseByKey(value, key, item)}}</div>
          <!-- 内容插槽 -->
          <!-- <slot v-else :name="value.slot" :$row="item" :$index="index"></slot> -->
        </u-td>
      </template>
      <!-- 合并内容单元格 -->
      <template v-else>
        <u-td
          v-if="mapIndex === 0"
          class="column-table-right"
          :rowspan="Object.keys(headerMapping).length"
          :width="value.valWidth || 'auto'">
          <!-- 无数据插槽 -->
          <slot name="noContent">无</slot>
        </u-td>
      </template>
    </u-tr>
  </u-table>
</template>
<script>
/**
 * ! 左右分布的表格
 * * feature：可使用多级表头，水平、竖直合并单元格
 * @param {object} headerMapping  表头（required）
 * @param {array} data 表格数据
 * headerMapping示例：{
 *  name: {
 *    label: 'x1',
 *    slot: 'name',
 *    collapse: {
 *      label: 'y1',
 *      width: 100,
 *      rowspan: 3,
 *      collapse: {
 *        label: 'z1',
 *        rowspan: 4,
 *        collapse: ...
 *      }
 *    }
 *  },
 *  sex: 'x2',
 *  age: {
 *    label: 'x3',
 *    format(val) {return +val}
 *  },
 *  like: {
 *    label: 'x4',
 *    collapse: {
 *      label: 'y2',
 *      rowspan: 1
 *    }
 *  }
 * }
 */
import {parseByKey} from '@/utils/common'
export default {
  name: 'columnTable',
  props: {
    headerMapping: {
      required: true,
      type: Object
    },
    data: {
      default () {
        return []
      },
      type: Array
    }
  },
  filters: {
    label (val) {
      if (!val) {
        return ''
      } else if (Object.prototype.toString.call(val) === '[object Object]') {
        return val.label
      } else {
        return val
      }
    }
  },
  data () {
    return {
      parseByKey: parseByKey
    }
  },
  created () {
  },
  methods: {
    // 将层级嵌套的对象属性 collapse 展开，返回一个数组
    collapseTransform (collapse, arr = []) {
      if (Object.prototype.toString.call(collapse) !== '[object Object]') {
        throw new Error('参数类型错误')
      }
      arr.unshift(collapse)
      if (collapse.collapse) {
        return this.collapseTransform(collapse.collapse, arr)
      } else {
        return arr
      }
    }
  }
}
</script>
<style lang="scss">
.column-table {
  border-top: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  width: 100%;
  word-break: break-all;
  word-wrap: break-word;
  + .column-table {
    margin-top: -1px;
  }
  .column-table-tr {
    td {
      height: 34px;
      padding: 0 10px;
      border-left: 1px solid #e6e6e6;
      border-bottom: 1px solid #e6e6e6;
    }
    .column-table-rowspan, .column-table-left {
      color: #6B6B6B;
      background: #f6f8f9;
    }
  }
}
</style>