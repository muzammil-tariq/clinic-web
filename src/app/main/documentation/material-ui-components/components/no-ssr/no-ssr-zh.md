---
title: 非SSR React组件
components: NoSsr
---

# No SSR 非SSR

<p class="description">NoSsr 故意在服务器端渲染（SSR）模式中删除组件。</p>

该组件可用于各种情况：

- 对于不支持SSR的依赖项进行语义填充。
- 通过仅在首屏上呈现来改善客户端上的首次绘制时间。
- 减少服务器上的渲染时间。
- 在过重的服务器负载下，您可以打开服务降级。
- 通过仅渲染重要内容（使用 `defer` 属性）来改善交互时间。

## 客户端推迟

{{"demo": "pages/components/no-ssr/SimpleNoSsr.js"}}

## 帧推迟

在其核心中，NoSr 组件的目的是 **推迟渲染**。 正如在前一个演示中所展示的那样，您可以使用它来将渲染从服务器推迟到客户端。

但你也可以使用它来推迟客户端的渲染。 您可以使用 `defer` 属性来 **等待一个屏幕帧** 后渲染子组件。 React 会做 [2 次提交](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects) 而不是 1 次。

{{"demo": "pages/components/no-ssr/FrameDeferring.js"}}