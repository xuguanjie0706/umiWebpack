/*
 * @Author: xgj
 * @since: 2020-08-14 11:48:34
 * @lastTime: 2020-09-09 16:19:22
 * @LastAuthor: xgj
 * @FilePath: /app1/.umirc.js
 * @message: 
 */
import { defineConfig } from 'umi';
import childProcess from 'child_process'
const branch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '')
const version = branch.split('-')[1]
console.log(branch, version);

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  // dynamicImport: {
  // loading: '@/components/PageLoading/index',
  // },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: "/app1",
      microApp: 'app1',
    }
  ],
  // publicPath: `./${version}/`,
  qiankun: {
    master: {
      apps: [
        {
          name: "app1",
          entry: '//localhost:8001',
        }
      ]
    }
  }
});


