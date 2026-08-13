# Aj Workflow Designer Vue 3

这是旧版 `aj-workflow-designer` 的独立 Vue 3 迁移工程。旧工程代码未被修改。

## 技术结构

- Vue 3 + TypeScript + Vite
- Raphael 命令式画布
- 本地弹窗组件，不依赖 iView 或其他 UI 框架
- SVG/Raphael 对象不进入 Vue 响应式状态
- Vitest 单元测试

## 开发

```bash
npm install
npm run dev
npm run test
npm run build
npm run build:lib
```

## 当前能力

- 加载、显示和清空流程定义
- 单节点及多选节点整体拖动，连线同步更新
- 节点、连线选择和属性编辑
- JSON 编辑、校验、应用与下载
- 本地“关于”弹窗
- 支持 start、end、task、decision、fork、join、custom、subprocess 全部后端节点
- 支持通用拦截器、任务调度/字段、决策处理器、自定义执行和子流程属性
- 提供发布前完整校验：结构、连通性、起止节点、分支合并、判断规则、名称和节点特有属性
- 应用 JSON 和导出 JSON 前执行完整校验，校验失败时一次展示全部问题
- 创建、删除节点和连线，删除节点时级联删除关联连线
- 双击连线添加拐点、拖动拐点、双击拐点删除
- 撤销/重做、未保存提示和离开页面保护
- 滚轮缩放、Alt/中键平移和适应窗口
- 点击校验问题定位到对应节点或连线
- 选中节点后拖动四角控制点调整尺寸
- Shift/Cmd/Ctrl 点击多选节点，复制时包含节点间内部连线；开始节点不会进入剪贴板
- 画布空白区域拖动框选，支持左/顶对齐和水平/垂直等间距分布
- 方向键按 1 像素微调节点，Shift+方向键按 10 像素移动
- 多选整体拖动时同步平移选区内部连线的拐点
- Ctrl/Cmd+C、Ctrl/Cmd+V 或工具栏复制粘贴
- 连续粘贴使用递增偏移，避免副本完全重叠
- Start/End 缩放保持圆形，Decision/Fork/Join 保持初始比例，所有节点限制最小和最大尺寸
- 显示缩放百分比并支持一键恢复 100%
- 快捷键以获得焦点的设计器实例为作用域，同一页面可安全放置多个实例
- `readonly` 模式锁定全部写操作，保留查看、缩放、平移和校验

## 作为 Vue 3 组件使用

```vue
<script setup lang="ts">
import { ref } from "vue";
import { WorkflowDesigner, type WorkflowDefinition } from "@ajaxjs/aj-workflow-designer-vue3";
import "@ajaxjs/aj-workflow-designer-vue3/style.css";

const definition = ref<WorkflowDefinition>(initialDefinition);
const designer = ref<InstanceType<typeof WorkflowDesigner>>();
</script>

<template>
  <div style="height: 720px">
    <WorkflowDesigner
      ref="designer"
      v-model="definition"
      :readonly="false"
      @change="saveDraft"
      @dirty-change="handleDirtyChange"
    />
  </div>
</template>
```

组件属性与事件：

- `modelValue?: WorkflowDefinition`：初始及外部流程模型。
- `readonly?: boolean`：只读模式。
- `guardBeforeUnload?: boolean`：是否由组件注册页面离开提示，默认 `false`，建议宿主通过脏状态自行管理路由。
- `update:modelValue`：编辑后更新 `v-model`。
- `change`：流程发生编辑时返回完整模型副本。
- `dirty-change`：未保存状态发生变化。
- `load-error`：外部模型不满足安全绘制结构时触发，非法模型不会交给 Raphael。

外部替换 `modelValue` 会被视为新加载的干净基线；用户编辑才会进入脏状态。保存成功后，宿主可调用 `designer.value?.markClean()` 清除脏状态。组件还通过 `defineExpose()` 提供 `validate()`、`undo()`、`redo()`、`zoomIn()`、`zoomOut()`、`fitToContent()`、`focusNode(ref)`、`getSelection()` 和 `getWorkflow()` 命令。

运行 `npm run build:lib` 后，组件库输出到 `dist-lib/`。

Vue 由宿主提供，包中声明为 `peerDependency`，避免组件库打包第二份 Vue 运行时。
