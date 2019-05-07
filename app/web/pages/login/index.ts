import { Component, Vue } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import { Input, Form, FormItem, Button } from 'element-ui'
const adminStore = namespace('admin')
@Component({
  components: {
    'el-input': Input,
    'el-form': Form,
    'el-form-item': FormItem,
    'el-button': Button
  }
})
export default class Home extends Vue {
  form: Object = {
    name: 'admin',
    password: '123'
  };
  loading: Boolean = false

  onSubmit () {
    this.loading = true
    this.$router.push('/home')
  }
}
