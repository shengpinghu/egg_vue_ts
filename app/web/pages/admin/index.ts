import { Component, Vue } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import Menulist from '../../component/menu/index.vue'
import { getArticleType, saveArticle } from '../../framework/utils/API'
import { Container, Header, Footer, Aside, Main } from 'element-ui'
const adminStore = namespace('admin')
@Component({
  components: {
    'el-container': Container,
    'el-header': Header,
    'el-footer': Footer,
    'el-aside': Aside,
    'el-main': Main,
    'menu-list': Menulist
  }
})
export default class Admin extends Vue {
}
