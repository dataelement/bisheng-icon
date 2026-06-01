# bisheng-icons

Bisheng Design System 图标库 —— 独立可安装的 React 图标组件包。

源于 [bisheng-design-system](https://github.com/dataelement/bisheng-design-system)，图标由 Figma 设计源自动生成、按 semver 发版。使用方无需引入整个 design system，只装这个包即可使用图标。

## 安装

```bash
npm install bisheng-icons
```

> 需要宿主项目已安装 `react`（>= 17）。

也可以直接从 GitHub 仓库安装（需有访问权限）：

```bash
npm install github:dataelement/bisheng-icon
```

## 使用

图标按风格分为两个命名空间：`Outlined`（线性）和 `Filled`（填充）。

```tsx
import { Outlined, Filled } from 'bisheng-icons';

export function Demo() {
  return (
    <>
      <Outlined.Check size={24} />
      <Outlined.ArrowRight size={20} strokeWidth={3} color="#0066ff" />
      <Filled.CheckCircle size={24} color="#22c55e" />
    </>
  );
}
```

### Props

所有图标共享 `IconProps`：

| 属性          | 类型               | 默认值           | 说明                                               |
| ------------- | ------------------ | ---------------- | -------------------------------------------------- |
| `size`        | `number \| string` | `24`             | 同时设置 width 和 height                           |
| `color`       | `string`           | `'currentColor'` | 图标颜色（描边和填充同时着色）                     |
| `strokeWidth` | `number \| string` | 跟随 Figma       | 描边宽度，仅对有描边的元素生效                     |

也支持透传任意 `SVGProps<SVGSVGElement>`（如 `className`、`onClick`、`ref` 等）。

### 关于描边宽度

- 默认值跟随 Figma 设计稿里的实际线宽
- 缩放图标时，描边按比例同步缩放（`strokeWidth=2` 在 12×12 渲染时，实际线宽 1px）
- 想要在小尺寸下保持视觉粗细，传一个更大的 `strokeWidth` 覆盖即可：`<Outlined.Foo size={12} strokeWidth={3} />`
- `Filled` 命名空间下的纯填充图标不受 `strokeWidth` 影响

## 开发

```bash
npm install      # 安装依赖（会自动触发一次 build）
npm run build    # 打包：输出 ESM + CJS + .d.ts 到 dist/
npm run dev      # watch 模式
npm run typecheck
```

## License

MIT
