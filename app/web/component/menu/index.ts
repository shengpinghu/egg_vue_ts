import { Component, Vue } from 'vue-property-decorator'
import {
  Menu,
  MenuItem,
  Submenu,
  Row,
  Col,
  MenuItemGroup
} from 'element-ui'
@Component({
  components: {
    'el-menu': Menu,
    'el-menu-item': MenuItem,
    'el-submenu': Submenu,
    'el-row': Row,
    'el-col': Col,
    'el-menu-item-group': MenuItemGroup
  }
})
export default class Menulist extends Vue {

}
