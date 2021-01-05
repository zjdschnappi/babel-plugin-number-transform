import BabelCore, { PluginObj } from "@babel/core";
import generator from "@babel/generator";
const fs = require("fs");
export default function ({ types }: typeof BabelCore): PluginObj<any> {
  return {
    name: "babel-plugin-number-transform",
    visitor: {
      BinaryExpression(path, state) {
        const { node } = path;
        const { left, right, operator, loc } = node;
        if (
          ((operator === "*" ||
            operator === "+" ||
            operator === "-" ||
            operator === "/") &&
            types.isOptionalMemberExpression(left) &&
            !types.isStringLiteral(right)) ||
          (types.isMemberExpression(left) &&
            !types.isStringLiteral(right) &&
            (operator === "*" ||
              operator === "+" ||
              operator === "-" ||
              operator === "/"))
        ) {
          if (!state.file.opts.filename.includes("mock/")) {
            fs.appendFile(
              "demo.txt",
              `${state.file.opts.filename}:${generator(node).code}\n`,
              () => {}
            );
          }
        }
      },
    },
  };
}
