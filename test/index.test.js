const pluginTester = require('babel-plugin-tester').default;
const plugin = require('../dist');

pluginTester({
  plugin: plugin,
  tests: {
    'changes this code': {
      code: 'const a=b*c',
      output: 'console.log("匹配成功")',
    },
    // 'using fixtures files': {
    //   fixture: 'changed.js',
    //   outputFixture: 'changed-output.js',
    // },
    // 'using jest snapshots': {
    //   code: `
    //     function sayHi(person) {
    //       return 'Hello ' + person + '!'
    //     }
    //   `,
    //   snapshot: true,
    },
  })