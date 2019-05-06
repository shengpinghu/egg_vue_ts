import { Component, Vue } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import { Button } from 'element-ui'
const adminStore = namespace('admin')
@Component({
  components: {
    'el-button': Button
  }
})
export default class Home extends Vue {
  @State title
  @adminStore.State msg
}
