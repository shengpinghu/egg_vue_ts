'use strict'
const tsImportPluginFactory = require('ts-import-plugin')
const path = require('path')
const camel2Dash = require('camel-2-dash')
const upyun = require('upyun')
const fs = require('fs')
const UPLOAD_CDN = process.env.UPLOAD_CDN
module.exports = {
  entry: {
    'main': 'app/web/main.ts'
  },
  /* lib: ['vue', 'vuex', 'vue-router', 'vuex-router-sync', 'axios'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.json', '.less']
  }, */
  loaders: {
    babel: false,
    ts: true,
    less: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory([
                {
                  libraryName: 'vant',
                  libraryDirectory: 'lib',
                  style: true
                },
                {
                  libraryName: 'element-ui',
                  libraryDirectory: 'lib',
                  camel2DashComponentName: true,
                  style: pathname =>
                    path.join('element-ui', 'lib', 'theme-chalk', `${camel2Dash(path.basename(pathname, '.js'))}.css`)
                }
              ])
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        }
      }
    ]
  },
  plugins: {
    copy: [{
      from: 'app/web/asset',
      to: 'asset'
    }]
  },
  done () {
    if (UPLOAD_CDN) {
      const service = new upyun.Service('image-qtkache', 'upyun', 'Q1w2e3r4')
      const client = new upyun.Client(service)
      uploadRecursively('public', '/frontend', client)
    }
  }
}
const uploadRecursively = (localPath, remotePath, client) => {
  // 读取目录文件
  fs.readdir(localPath, (err, files) => {
    if (err) {
      return console.warn(err)
    }
    files.forEach(file => {
      const filePath = `${localPath}/${file}`
      const remoteFilePath = `${remotePath}/${file}`
      // 获取信息
      fs.stat(filePath, (error, stat) => {
        if (error) {
          return console.warn(error)
        }
        // 文件夹则递归
        if (stat.isDirectory()) {
          uploadRecursively(filePath, remoteFilePath, client)
          // 文件则上传cdn
        } else if (stat.isFile()) {
          client
            .putFile(remoteFilePath, fs.createReadStream(filePath))
            .then(res => {
              // console.log(res);
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
    })
  })
}
