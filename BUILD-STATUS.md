# Build status

项目源码、页面、图标、favicon、Logo、本地 JPG 图片以及 Cloudflare/Astro 配置均已放入项目。

当前执行环境无法访问 npm registry，因此无法在本次会话环境中下载 pnpm/依赖，也就不能诚实地生成可验证的 `pnpm-lock.yaml` 或声称 `--frozen-lockfile`、`pnpm check`、`pnpm build` 已成功执行。

在可访问 npm registry 的环境中，应执行：

```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install
pnpm check
pnpm build
```

首次成功安装后请提交生成的 `pnpm-lock.yaml`，此后 CI 改用：

```bash
CI=1 pnpm install --frozen-lockfile
pnpm check
pnpm build
```
