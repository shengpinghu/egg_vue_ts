import { Component, Prop, Vue } from 'vue-property-decorator'
import { Upload, Dialog, Message } from 'element-ui'
import { uploadFiles } from '../../framework/utils/util'
import { uploadImg } from '../../framework/utils/API'
@Component({
  components: {
    'el-upload': Upload,
    'el-dialog': Dialog
  }
})
export default class ImgUpLoad extends Vue {
  configObj: any = {
    uploadUrl: '',
    uploadParams: {}
  }
  dialogVisible = false
  handleRemove (file, fileList) {
    console.log(file, fileList)
  }
  async handlePicture (item) {
    try {
      const { uploadUrl, uploadParams } = await uploadFiles() as any
      let formData = new FormData()
      formData.append('file', item.file)
      formData.append('signature', uploadParams.signature)
      formData.append('policy', uploadParams.policy)
      const imgItem = await uploadImg(uploadUrl, formData)
    } catch (e) {
      if (e.url) {
        this.$emit('uploadFinish', e)
      } else {
        Message({
          type: 'error',
          message: e.message || '图片上传失败~！'
        })
      }
    }
  }
}
