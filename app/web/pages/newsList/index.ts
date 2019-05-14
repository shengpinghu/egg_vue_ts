import { Component, Vue } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import { getNewsList, offOrOn } from '../../framework/utils/API'
import { Button, Table, TableColumn, Pagination, MessageBox, Message } from 'element-ui'
import get from 'lodash/get'
const adminStore = namespace('admin')
@Component({
  components: {
    'el-button': Button,
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-pagination': Pagination
  }
})
export default class NewsList extends Vue {
  @State title
  @adminStore.State msg
  newsList:any = {};
  pages = {
    page: 1,
    size: 10
  }
  async mounted () {
    this.getData()
  }
  async handleNews (row) {
    try {
      const centent = row.status ? '上架' : '下架'
      const Btn = await MessageBox.confirm(`确定${centent}该条资讯吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      const url = row.status ? '/api/truck/assured-vehicle/article-maintenance/online' : '/api/truck/assured-vehicle/article-maintenance/offline'
      await offOrOn(url, { id: row.id })
      const res = await getNewsList(this.pages) as any
      this.newsList = get(res, 'data')
      Message({
        type: 'success',
        message: `${centent}成功！`
      })
    } catch (e) {
      if (e === 'cancel') return
      Message({
        type: 'info',
        message: e.message || e
      })
    }
  }
  async pageChange (page) {
    this.pages.page = page
    this.getData()
  }

  async getData () {
    try {
      const res = await getNewsList(this.pages) as any
      this.newsList = get(res, 'data')
    } catch (e) {
      Message({
        type: 'error',
        message: e.message || '获取数据失败~！'
      })
    }
  }
}
