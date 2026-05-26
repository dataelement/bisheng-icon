# bisheng-icons

Bisheng Design System 图标库 —— 独立可安装的 React 图标组件包。

从 [bisheng-design-system](https://github.com/dataelement/bisheng-design-system) 中拆分而来，使用方无需引入整个 design system，只装这个包即可使用图标。

## 安装

从 GitHub 直接安装（无需 npm 账号）：

```bash
npm install github:dataelement/bisheng-icon
```

或从 npm registry 安装（发布后）：

```bash
npm install bisheng-icons
```

> 需要宿主项目已安装 `react`（>= 17）。

## 使用

```tsx
import { Outlined } from 'bisheng-icons';

export function Demo() {
  return <Outlined.Check size={24} color="currentColor" strokeWidth={2} />;
}
```

也可以按需引入单个图标：

```tsx
import { Check, Copy } from 'bisheng-icons/dist/index.mjs';
```

### Props

所有图标共享 `IconProps`：

| 属性          | 类型               | 默认值           | 说明                                 |
| ------------- | ------------------ | ---------------- | ------------------------------------ |
| `size`        | `number \| string` | `24`             | 同时设置 width 和 height             |
| `color`       | `string`           | `currentColor`   | 图标颜色（colored 类型图标不支持）   |
| `strokeWidth` | `number \| string` | `2`              | 描边宽度，仅 outlined 类型生效       |

也支持透传任意 `SVGProps<SVGSVGElement>`（如 `className`、`onClick` 等）。

## 开发

```bash
npm install      # 安装依赖（会自动触发一次 build）
npm run build    # 打包：输出 ESM + CJS + .d.ts 到 dist/
npm run dev      # watch 模式
npm run typecheck
```

## 图标来源

图标由 Figma 设计源生成，本仓库是图标的唯一真实源（source of truth）。
