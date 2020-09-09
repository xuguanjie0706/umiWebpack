/*
 * @Author: xgj
 * @since: 2020-08-14 11:48:34
 * @lastTime: 2020-09-09 14:49:39
 * @LastAuthor: xgj
 * @FilePath: /app1/.umirc.ts
 * @message: 
 */
import { defineConfig } from 'umi';
import childProcess from 'child_process'
const branch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString()
const version = branch.replace(/\s+/, '').split('/')[1]
console.log(branch, version);

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});


