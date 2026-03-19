# Yaru 双后端一致性核查报告

生成时间: 2026-03-15T12:42:55.470Z

## 结论摘要

- 当前 Workers 配置中的 `BACKEND_ROUTING` 为 `vps`。
- 在线 `/api/health` 版本: public=2.0.0, origin=2.0.0。
- 公开入口如果返回 `X-Backend-Target: vps`，表示当前请求虽然先到 Workers，但业务处理仍由 VPS 完成。
- 对需要登录、副作用写入或真实 OAuth state 的链路，本次仅做静态依赖判定，未执行破坏性或需要凭据的操作。

## 系统接口

- 组级结论: 接口可达但实际都走 VPS
- Workers 独立执行判定: 接口可达但实际都走 VPS
- 依赖: Postgres, VPS fallback routing
- 静态说明: wrangler.toml 当前 BACKEND_ROUTING=vps；公开入口默认回源 VPS。

| Endpoint | Scope | Public | Origin | 结论 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `GET /api/health` | public_probe | 200 / vps | 200 | 接口可达但实际都走 VPS | 公开入口响应头显示 X-Backend-Target: vps |
| `GET /api/ping` | public_probe | 200 / vps | 200 | 接口可达但实际都走 VPS | 公开入口响应头显示 X-Backend-Target: vps |
| `GET /api/openapi.json` | public_probe | 200 / vps | 200 | 接口可达但实际都走 VPS | 公开入口响应头显示 X-Backend-Target: vps |
| `GET /api/update/channel` | public_probe | 200 / vps | 200 | 接口可达但实际都走 VPS | 公开入口响应头显示 X-Backend-Target: vps |

## 认证流

- 组级结论: 接口可达但实际都走 VPS
- Workers 独立执行判定: Workers 独立执行能力未证实
- 依赖: OAuth / auth secrets, Postgres, Session cache / rate limit
- 静态说明: wrangler.toml 当前 BACKEND_ROUTING=vps；公开入口默认回源 VPS。 仓库内未声明 Workers 数据库绑定值，仍需线上 secret 配置验证。 登录、登出、OAuth 回调需凭据和真实 state 才能做完整线上一致性验证。

| Endpoint | Scope | Public | Origin | 结论 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `GET /api/auth/session` | public_probe | 200 / vps | 200 | 接口可达但实际都走 VPS | 公开入口响应头显示 X-Backend-Target: vps；未登录只读探测；完整登录/登出/OAuth 回调链路仍需测试凭据。 |
| `GET /api/auth/desktop/status/:state` | static_only | - | - | 静态判定 | 该链路本次未做线上调用；静态判定使用 oauth-desktop.routes.ts；未对真实 state 做线上探测。 |

## 内容流

- 组级结论: 接口可达但实际都走 VPS
- Workers 独立执行判定: Workers 独立执行能力未证实
- 依赖: Postgres, R2 sync/object storage
- 静态说明: wrangler.toml 当前 BACKEND_ROUTING=vps；公开入口默认回源 VPS。 仓库内未声明 Workers 数据库绑定值，仍需线上 secret 配置验证。 组内部分路由依赖 R2，同组不保证所有接口在 Workers 上与 VPS 同语义。

| Endpoint | Scope | Public | Origin | 结论 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `GET /api/forum/sections` | public_probe | 200 / vps | 200 | 接口可达但实际都走 VPS | 公开入口响应头显示 X-Backend-Target: vps |
| `GET /api/forum/threads?limit=1` | public_probe | 200 / vps | 200 | 接口可达但实际都走 VPS | 公开入口响应头显示 X-Backend-Target: vps |
| `GET /api/problems?limit=1` | public_probe | 200 / vps | 200 | 接口可达但实际都走 VPS | 公开入口响应头显示 X-Backend-Target: vps |
| `GET /api/problems/subjects` | public_probe | 200 / vps | 200 | 接口可达但实际都走 VPS | 公开入口响应头显示 X-Backend-Target: vps |

## 学习流

- 组级结论: Workers 独立执行能力未证实
- Workers 独立执行判定: Workers 独立执行能力未证实
- 依赖: Postgres, R2 sync/object storage
- 静态说明: wrangler.toml 当前 BACKEND_ROUTING=vps；公开入口默认回源 VPS。 仓库内未声明 Workers 数据库绑定值，仍需线上 secret 配置验证。 组内部分路由依赖 R2，同组不保证所有接口在 Workers 上与 VPS 同语义。

| Endpoint | Scope | Public | Origin | 结论 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `GET /api/practice/random` | public_probe | 0 | 0 | 探测失败 | public=AbortError: This operation was aborted; origin=AbortError: This operation was aborted；随机题目接口只比较响应形状，不比较具体题目内容。 |
| `GET /api/exams?limit=1` | public_probe | 200 / vps | 200 | 接口可达但实际都走 VPS | 公开入口响应头显示 X-Backend-Target: vps |
| `GET /api/practice/sessions/sync` | static_only | - | - | 静态判定 | 该链路本次未做线上调用；鉴权 + R2 同步接口，仅做静态依赖判定。 |

## 社交流

- 组级结论: 接口可达但实际都走 VPS
- Workers 独立执行判定: Workers 独立执行能力未证实
- 依赖: Postgres
- 静态说明: wrangler.toml 当前 BACKEND_ROUTING=vps；公开入口默认回源 VPS。 仓库内未声明 Workers 数据库绑定值，仍需线上 secret 配置验证。

| Endpoint | Scope | Public | Origin | 结论 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `GET /api/social/stats/00000000-0000-0000-0000-000000000000` | public_probe | 200 / vps | 200 | 接口可达但实际都走 VPS | 公开入口响应头显示 X-Backend-Target: vps |
| `GET /api/social/followers/00000000-0000-0000-0000-000000000000?limit=1` | public_probe | 200 / vps | 200 | 接口可达但实际都走 VPS | 公开入口响应头显示 X-Backend-Target: vps |

## AI 流

- 组级结论: 接口可达但实际都走 VPS
- Workers 独立执行判定: Workers 独立执行能力未证实
- 依赖: Postgres, AI provider secrets, Forced external AI routing, Rate limit / cache
- 静态说明: wrangler.toml 当前 BACKEND_ROUTING=vps；公开入口默认回源 VPS。 仓库内未声明 Workers 数据库绑定值，仍需线上 secret 配置验证。 AI_FORCE_NEWAPI=true，AI 路由存在强制外部推理服务依赖。

| Endpoint | Scope | Public | Origin | 结论 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `POST /api/math/solve` | public_probe | 200 / vps | 200 | 接口可达但实际都走 VPS | 公开入口响应头显示 X-Backend-Target: vps |
| `GET /api/ai/chat/sessions` | static_only | - | - | 静态判定 | 该链路本次未做线上调用；鉴权聊天会话链路仅做静态依赖判定。 |

## 代码路由一致性

- `src/lib/backend-routing.ts` 规定 `BACKEND_ROUTING` 只有 `workers` 才会本地执行，默认值回落为 `vps`。
- `src/worker-entry.ts` 在 `resolveBackendTarget(...) === "vps"` 时直接代理到 `VPS_API_ORIGIN`。
- 当前 `wrangler.toml` 将 `api.asaka.moe/*` 指向 Workers，但默认变量仍是 `BACKEND_ROUTING = "vps"`。

## 备注

- 本报告是脚本自动生成，可通过 `pnpm --filter yaru-api audit:dual-backend` 重新采集。
- 若要验证完整登录后业务流，需要提供测试账号或临时令牌，再追加只读鉴权探测。
