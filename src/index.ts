import BabelCore, { PluginObj } from '@babel/core';
export default function({types}:typeof BabelCore):PluginObj<any>{

  return {
    name:'number-transform',
    visitor:{
      BinaryExpression(path,state){
        if(path.node.operator==='*'||path.node.operator==='+'||path.node.operator==='-'||path.node.operator==='/'){
          console.log('匹配成功',state.file.opts.filename);
          
        }
      }
    }
  }
}