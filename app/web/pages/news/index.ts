import { Component, Vue } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import { getArticleType, saveArticle } from '../../framework/utils/API'
import {Button, Form, FormItem, Input, Select, Option, RadioGroup, Radio, Message} from 'element-ui'
import ImgUpLoad from '../../component/image-upload/index.vue'
const adminStore = namespace('admin')
@Component({
  components: {
    'el-button': Button,
    'el-form': Form,
    'el-form-item': FormItem,
    'el-select': Select,
    'el-option': Option,
    'el-input': Input,
    'el-radio-group': RadioGroup,
    'el-radio': Radio,
    'image-up-load': ImgUpLoad
  }
})
export default class News extends Vue {
  @State title
  @adminStore.State msg
  form = {
    categoryName: '',
    type: '',
    title: '',
    link: '',
    picture: '',
    mediaLogo: '',
    sortBy: 0
  }
  categoryType = [];
  async mounted () {
    try {
      const typeList = await getArticleType() as any
      this.categoryType = typeList.data
    } catch (e) {
      Message({
        type: 'error',
        message: e.message || '获取资讯分类失败~！'
      })
    }
  }

  async onSubmit () {
    try {
      await saveArticle(this.form)
    } catch (e) {
      Message({
        type: 'error',
        message: e.message || '添加资讯失败~！'
      })
    }
  }
  getImgUrl (item) {
    this.form.picture = item.url
  }
  getLogo (item) {
    this.form.mediaLogo = item.url
  }
}
