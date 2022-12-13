
const template = "<div><span>>Vue</span><p>Vue Compiler<<</p></div>";
// 有限状态机
function limitedStatus(template) {
  // 1 初始状态; 2 标签开始状态; 3 标签名称状态; 4 文本状态; 5 标签结束状态; 6结束标签名称装填
  let status = 1;
  const tokens = []

  const len = template.length;
  let tokenName = ""; // tag; tagEnd; text
  for (let i = 0; i < len; i++) {
    const letter = template[i];
    switch (letter) {
      case "<":
        // <> 开始标签
        if (status === 1) {
          status = 2
        } else if (status === 4) {
          if (template[i + 1] === "/") {
            // <</p>
            status = 2
            tokens.push({
              type: "text",
              name: tokenName
            })
            tokenName = ""
          } else {
            tokenName += template[i];
          }
        } else {
          tokenName += template[i];
        }
        break;
      case "/":
        // </ 结束标签
        if (status === 2) {
          status = 5
        } else {
          tokenName += template[i];
        }
        break;
      case ">":
        if (status === 3) {
          tokens.push({
            type: "tag",
            name: tokenName
          })
          status = 1
          tokenName = ""
        } else if (status === 6) {
          status === 6
          tokens.push({
            type: "tagEnd",
            name: tokenName
          })
          status = 1
          tokenName = ""
        } else {
          tokenName += template[i];
        }
        break;
      default:
        if (status === 1) {
          status = 4
        } else if (status === 2) {
          status = 3
        } else if (status === 5) {
          status = 6
        }
        tokenName += template[i];

    }
  }
  return tokens;
}
function tokensToAst(tokens) {
  const root = {
    type: "root",
    children: []
  }
  const stack = [root]
  while (tokens.length) {
    const parent = stack[stack.length - 1];
    const token = tokens[0]
    switch (token.type) {
      case "tag":
        const eleNode = {
          type: "Element",
          tag: token.name,
          children: []
        }
        parent.children.push(eleNode)
        stack.push(eleNode)
        break;
      case "text":
        const textNode = {
          type: "Text",
          content: token.name
        }
        parent.children.push(textNode)
        break;
      case "tagEnd":
        stack.pop()
        break;
    }
    tokens.shift()
  }
  return root
}
function parse(template) {
  const tokens = limitedStatus(template)
  console.log("tokens:", tokens)
  const templateAst = tokensToAst(tokens)
  console.log("templateAst:", templateAst);
  return templateAst
}
const templateAst = parse(template)