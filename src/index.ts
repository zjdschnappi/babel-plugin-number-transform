import BabelCore, { PluginObj } from "@babel/core";
export default function ({ types }: typeof BabelCore): PluginObj<any> {
  return {
    name: "babel-plugin-number-transform",
    visitor: {
      BinaryExpression(path, state) {
        const { node } = path;
        const { left, right, operator } = node;
        if (
          (operator === "*" ||
            operator === "+" ||
            operator === "-" ||
            operator === "/") &&
          types.isMemberExpression(left)
        ) {
          console.log(left.property);

          console.log("匹配成功", state.file.opts.filename);
        }
      },
    },
  };
}
