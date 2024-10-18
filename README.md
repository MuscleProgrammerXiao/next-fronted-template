# next-fronted-template 前端服务端渲染模板

## （一）准备开始，前端工程化配置，引入组件库

> 这是 **[Next-fronted-template](https://github.com/MuscleProgrammerXiao/next-fronted-template/tree/main)**（前端服务端渲染万能模板）的第一部分，主要内容是prettier安装，引入ant-design，ant-desgin-procomponnets高阶组件。
> **灵感来源：[编程导航](https://www.code-nav.cn/)，项目细节推荐看完整内容。**

##### 1）创建目录`next-frontend-template`，进入目录安装next.js

```shell
npx create-next-app@latest .
```

```shell
√ Would you like to use TypeScript? ...  Yes
√ Would you like to use ESLint? ...  Yes
√ Would you like to use Tailwind CSS? ... No
√ Would you like to use `src/` directory? ...  Yes
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias (@/*)? ... No
```

##### 2）前端工程化配置

a）git初始化（方便出现问题时版本回退）

```shell
git init
```

b）安装prettier（代码自动格式化插件，跟着官方文档做能避免ESlint和Prettier可能会存在的校验规则冲突，[next.js参考文档](https://nextjs.org/docs/app/building-your-application/configuring/eslint#prettier)，[prettier参考文档](https://prettier.io/docs/en/install)）

```shell
npm install --save-dev eslint-config-prettier
```

```shell
npm install --save-dev --save-exact prettier
```

```json
// 修改.eslintrc.json配置：
{
	"extends": ["next", "prettier"]
}
```

> 最后，在idea中开启代码自动化格式插件即可，在vscode上可能存在自动格式化没有生效的问题，以下是我目前的解决方法，有更好的方案欢迎分享！

```js
// 根目录新建.prettierrc.js加入配置文件
module.exports = {
	// 一行最多多少个字符
	printWidth: 150, // 指定每个缩进级别的空格数
	tabWidth: 2, // 使用制表符而不是空格缩进行
	useTabs: true, // 在语句末尾打印分号
	semi: true, // 使用单引号而不是双引号
	singleQuote: true, // 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
	quoteProps: 'as-needed', // 在JSX中使用单引号而不是双引号
	jsxSingleQuote: false, // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
	trailingComma: 'es5', // 在对象文字中的括号之间打印空格
	bracketSpacing: true, // jsx 标签的反尖括号需要换行
	jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
	bracketSameLine: false, // 在单独的箭头函数参数周围包括括号 always：(x) => x \ avoid：x => x
	arrowParens: 'always', // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码
	rangeStart: 0,
	rangeEnd: Infinity, // 指定要使用的解析器，不需要写文件开头的 @prettier
	requirePragma: false, // 不需要自动在文件开头插入 @prettier
	insertPragma: false, // 使用默认的折行标准 always\never\preserve
	proseWrap: 'preserve', // 指定HTML文件的全局空格敏感度 css\strict\ignore
	htmlWhitespaceSensitivity: 'css', // Vue文件脚本和样式标签缩进
	vueIndentScriptAndStyle: false, // 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
	endOfLine: 'lf',
};
```

##### 3）引入[Ant Design](https://ant-design.antgroup.com/docs/react/use-with-next-cn)组件库

a）安装antd

```shell
npm install antd --save
```

b）针对App Router 模式的Next.js，需要处理引入ant design后页面闪动问题

```shell
npm install @ant-design/nextjs-registry --save
```

c）修改页面全局布局文件

```tsx
// app\layout.tsx
import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="cn">
			<body>
				<AntdRegistry>{children}</AntdRegistry>   
			</body>
		</html>
	);
}
```

##### 4）引入[Ant Design Procomponents](https://procomponents.ant.design/docs)组件库

a）基础布局，表格，表单等组件都可以直接使用antd提供的高阶组件

```shell
npm i @ant-design/pro-components --save
```

##### 5）清理`app/globals.css`中样式

a）删除不必要的代码，减少样式冲突

```css
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

html,
body {
	max-width: 100vw;
	max-height: 100vh;
}
```
