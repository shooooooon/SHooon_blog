# SHooon_blog - 技術ドキュメント

## 概要

**SHooon_blog**は、Manusによって構築されたモダンな個人ブログプラットフォームです。React 19とTypeScriptをベースに、2025年時点で最新のWeb技術スタックを採用し、高速でレスポンシブ、SEOに最適化されたブログ体験を提供します。

### プロジェクトの特徴

- **静的サイト生成（SSG）**: Viteを使用した高速ビルドとデプロイ
- **モダンUI/UX**: Tailwind CSS 4 + shadcn/uiによる洗練されたデザインシステム
- **完全レスポンシブ**: モバイルファーストのアプローチで全デバイスに対応
- **ダークモード対応**: システム設定に応じた自動切り替え
- **SEO最適化**: メタタグ、OGP、構造化データの実装
- **高速パフォーマンス**: LazyLoading、画像最適化、Core Web Vitals対応

---

## 技術スタック

### フロントエンド

| カテゴリ | 技術 | バージョン | 用途 |
|---------|------|-----------|------|
| **フレームワーク** | React | 18.3.1 | UIライブラリ |
| **言語** | TypeScript | 5.6.3 | 型安全な開発 |
| **ビルドツール** | Vite | 7.1.7 | 高速開発サーバー・ビルド |
| **スタイリング** | Tailwind CSS | 4.1.14 | ユーティリティファーストCSS |
| **UIコンポーネント** | shadcn/ui | - | Radix UI + Tailwind |
| **ルーティング** | Wouter | 3.3.5 | 軽量クライアントサイドルーター |
| **アイコン** | Lucide React | 0.453.0 | アイコンライブラリ |
| **アニメーション** | Framer Motion | 12.23.22 | スムーズなアニメーション |

### 開発ツール

| ツール | バージョン | 用途 |
|--------|-----------|------|
| **パッケージマネージャー** | pnpm | 10.4.1 | 高速・効率的な依存管理 |
| **型チェック** | TypeScript | 5.6.3 | 静的型検査 |
| **コードフォーマット** | Prettier | 3.6.2 | コード整形 |
| **ビジュアル編集** | jsx-loc-plugin | 0.1.1 | ブラウザ上でのビジュアル編集 |

### デプロイ環境

- **ホスティング**: Manus Platform（または任意の静的ホスティング）
- **対応プラットフォーム**: Cloudflare Pages、Vercel、Netlify、GitHub Pages等

---

## システムアーキテクチャ

### 構成図（テキストベース）

```
┌─────────────────────────────────────────────────────────────┐
│                     SHooon_blog Architecture                 │
└─────────────────────────────────────────────────────────────┘

┌──────────────┐
│   Browser    │
│  (Client)    │
└──────┬───────┘
       │
       │ HTTP/HTTPS
       ▼
┌──────────────────────────────────────────────────────────────┐
│                    Static Hosting (CDN)                       │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  HTML + CSS + JS (Vite Build Output)                  │  │
│  │  - index.html                                          │  │
│  │  - assets/*.js (React App Bundle)                     │  │
│  │  - assets/*.css (Tailwind Styles)                     │  │
│  │  - images/* (Optimized Images)                        │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                    React Application Layer                    │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐             │
│  │   Pages    │  │ Components │  │  Contexts  │             │
│  │            │  │            │  │            │             │
│  │ - Home     │  │ - Header   │  │ - Theme    │             │
│  │ - Blog     │  │ - Footer   │  └────────────┘             │
│  │ - BlogPost │  │ - BlogCard │                              │
│  │ - About    │  │ - SEO      │                              │
│  │ - Category │  │ - UI (*)   │                              │
│  │ - Tag      │  └────────────┘                              │
│  │ - Privacy  │                                               │
│  │ - Terms    │  ┌────────────┐  ┌────────────┐             │
│  └────────────┘  │   Data     │  │   Hooks    │             │
│                  │            │  │            │             │
│                  │ - blogData │  │ - useMobile│             │
│                  └────────────┘  └────────────┘             │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                    Routing & Navigation                       │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  Wouter (Client-side Router)                          │  │
│  │  - /              → Home                              │  │
│  │  - /blog          → Blog List                         │  │
│  │  - /blog/:slug    → Blog Post Detail                  │  │
│  │  - /category/:slug → Category Posts                   │  │
│  │  - /tag/:slug     → Tag Posts                         │  │
│  │  - /about         → About Page                        │  │
│  │  - /privacy       → Privacy Policy                    │  │
│  │  - /terms         → Terms of Service                  │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

### データフロー

```
┌─────────────┐
│  blogData.ts│  ← サンプルデータ（静的JSON）
└──────┬──────┘
       │
       │ import
       ▼
┌─────────────────────────────────────────────┐
│  Pages (Home, Blog, BlogPost, etc.)         │
│  - getFeaturedPosts()                       │
│  - getRecentPosts()                         │
│  - getPostBySlug()                          │
│  - getPostsByCategory()                     │
│  - getPostsByTag()                          │
└──────┬──────────────────────────────────────┘
       │
       │ render
       ▼
┌─────────────────────────────────────────────┐
│  Components (BlogCard, etc.)                │
│  - Display post data                        │
│  - Handle user interactions                 │
└─────────────────────────────────────────────┘
```

**現在の実装**: 静的データ（`blogData.ts`）からコンテンツを取得

**拡張可能性**: 
- Headless CMS（Contentful、Strapi、Sanity）との統合
- Supabase/Firebase等のバックエンド連携
- Markdown/MDXファイルからの動的生成
- n8n等の自動化ツールによるコンテンツ投稿フロー

---

## ディレクトリ構造

```
shooon-blog/
├── client/                      # フロントエンドソースコード
│   ├── public/                  # 静的アセット（ビルド時にそのままコピー）
│   │   └── images/              # 画像ファイル
│   │       ├── hero-bg.png      # ヒーローセクション背景
│   │       ├── about-bg.jpg     # Aboutページ背景
│   │       ├── post-1.jpg       # 記事サムネイル1
│   │       ├── post-2.jpg       # 記事サムネイル2
│   │       └── post-3.png       # 記事サムネイル3
│   ├── src/                     # Reactアプリケーションソース
│   │   ├── components/          # 再利用可能なコンポーネント
│   │   │   ├── ui/              # shadcn/uiコンポーネント
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── sheet.tsx
│   │   │   │   └── ... (その他30+コンポーネント)
│   │   │   ├── BlogCard.tsx     # ブログカードコンポーネント
│   │   │   ├── Header.tsx       # ヘッダー（ナビゲーション）
│   │   │   ├── Footer.tsx       # フッター
│   │   │   ├── SEO.tsx          # SEOメタタグ管理
│   │   │   ├── ErrorBoundary.tsx # エラーハンドリング
│   │   │   └── ManusDialog.tsx  # Manus統合ダイアログ
│   │   ├── contexts/            # Reactコンテキスト
│   │   │   └── ThemeContext.tsx # テーマ管理（ライト/ダーク）
│   │   ├── data/                # データソース
│   │   │   └── blogData.ts      # ブログ記事データ（8記事）
│   │   ├── hooks/               # カスタムReactフック
│   │   │   ├── useMobile.tsx    # モバイル検出
│   │   │   ├── usePersistFn.ts  # 関数メモ化
│   │   │   └── useComposition.ts # コンポジション管理
│   │   ├── lib/                 # ユーティリティ関数
│   │   │   └── utils.ts         # clsx + tailwind-merge
│   │   ├── pages/               # ページコンポーネント
│   │   │   ├── Home.tsx         # トップページ
│   │   │   ├── Blog.tsx         # 記事一覧
│   │   │   ├── BlogPost.tsx     # 記事詳細
│   │   │   ├── Category.tsx     # カテゴリ別記事
│   │   │   ├── Tag.tsx          # タグ別記事
│   │   │   ├── About.tsx        # プロフィール
│   │   │   ├── Privacy.tsx      # プライバシーポリシー
│   │   │   ├── Terms.tsx        # 利用規約
│   │   │   └── NotFound.tsx     # 404ページ
│   │   ├── types/               # TypeScript型定義
│   │   │   └── blog.ts          # ブログ関連の型
│   │   ├── App.tsx              # ルートコンポーネント（ルーティング）
│   │   ├── main.tsx             # エントリーポイント
│   │   ├── index.css            # グローバルスタイル + Tailwind設定
│   │   └── const.ts             # 定数定義
│   └── index.html               # HTMLテンプレート
├── server/                      # サーバーサイド（プレースホルダー）
│   └── index.ts                 # Express基本設定（静的テンプレート用）
├── shared/                      # クライアント・サーバー共有コード
│   └── const.ts                 # 共有定数
├── patches/                     # pnpmパッチ
│   └── wouter@3.7.1.patch       # Wouterカスタマイズ
├── components.json              # shadcn/ui設定
├── package.json                 # 依存関係・スクリプト
├── pnpm-lock.yaml               # ロックファイル
├── tsconfig.json                # TypeScript設定
├── tsconfig.node.json           # Node用TypeScript設定
├── vite.config.ts               # Vite設定
├── todo.md                      # プロジェクトタスク管理
└── README.md                    # プロジェクト概要
```

### 主要ファイルの役割

#### `client/src/App.tsx`
- アプリケーションのルートコンポーネント
- Wouterによるクライアントサイドルーティング設定
- ThemeProvider、TooltipProviderなどのグローバルプロバイダー配置
- Header/Footerのレイアウト統合

#### `client/src/data/blogData.ts`
- ブログ記事のサンプルデータ（8記事）
- カテゴリ・タグ・著者情報を含む
- 記事取得用のヘルパー関数を提供：
  - `getFeaturedPosts()`: 注目記事取得
  - `getRecentPosts(limit)`: 最新記事取得
  - `getPostBySlug(slug)`: スラッグから記事取得
  - `getPostsByCategory(slug)`: カテゴリ別記事取得
  - `getPostsByTag(slug)`: タグ別記事取得

#### `client/src/index.css`
- Tailwind CSSの`@layer`ディレクティブ
- カスタムCSS変数（テーマカラー）
- グローバルスタイル（フォント、コンテナ等）
- ダークモード対応のカラーパレット

#### `vite.config.ts`
- Viteビルド設定
- エイリアス設定（`@`, `@shared`, `@assets`）
- 開発サーバー設定（ポート3000、ホスト許可）
- Tailwind CSS、React、jsx-locプラグイン統合

---

## コンポーネント設計

### ページコンポーネント

#### Home.tsx
**役割**: トップページ

**構成**:
- ヒーローセクション（グラデーション背景 + キャッチコピー）
- Featured Posts（注目記事3件）
- Latest Posts（最新記事6件）
- CTAセクション（ニュースレター登録）

**データフロー**:
```tsx
const featuredPosts = getFeaturedPosts(); // 注目記事取得
const recentPosts = getRecentPosts(6);    // 最新6件取得
```

#### Blog.tsx
**役割**: 記事一覧ページ

**機能**:
- 全記事のカードグリッド表示
- 検索ボックス（タイトル・本文検索）
- カテゴリ・タグフィルタリング
- レスポンシブグリッド（1列→2列→3列）

**状態管理**:
```tsx
const [searchQuery, setSearchQuery] = useState("");
const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
const [selectedTag, setSelectedTag] = useState<string | null>(null);
```

#### BlogPost.tsx
**役割**: 記事詳細ページ

**構成**:
- 記事ヘッダー（タイトル、日付、著者、カテゴリ、タグ）
- 本文コンテンツ（Markdown風レンダリング）
- SNSシェアボタン（Twitter、Facebook、LinkedIn）
- 関連記事セクション（同カテゴリ3件）

**データフロー**:
```tsx
const { slug } = useParams();
const post = getPostBySlug(slug);
const relatedPosts = getPostsByCategory(post.category.slug)
  .filter(p => p.slug !== slug)
  .slice(0, 3);
```

### 共通コンポーネント

#### Header.tsx
**機能**:
- Stickyナビゲーションバー
- ロゴ（グラデーションテキスト）
- デスクトップメニュー（Home、Blog、About）
- モバイルハンバーガーメニュー（Sheet使用）
- 検索アイコン、テーマ切り替えボタン

**レスポンシブ**:
- デスクトップ: 横並びナビゲーション
- モバイル: ハンバーガーメニュー + スライドアウト

#### Footer.tsx
**構成**:
- ブランド情報 + 説明文
- Quick Links（Blog、About、Privacy、Terms）
- Newsletter登録フォーム（プレースホルダー）
- SNSアイコン（Twitter、GitHub、LinkedIn、YouTube）
- コピーライト表示

#### SEO.tsx
**機能**:
- 動的メタタグ管理（`useEffect`でDOM操作）
- Open Graph（OGP）タグ設定
- Twitter Cardタグ設定
- ページタイトル・説明文・画像のカスタマイズ

**使用例**:
```tsx
<SEO
  title="記事タイトル - SHooonブログ"
  description="記事の説明文"
  image="/images/post-1.jpg"
  type="article"
/>
```

#### BlogCard.tsx
**機能**:
- 記事カード表示（サムネイル、タイトル、抜粋、メタ情報）
- ホバーアニメーション
- カテゴリバッジ表示
- 日付・読了時間表示

---

## スタイリング戦略

### Tailwind CSS 4 設定

**カラーパレット**（`index.css`）:
```css
:root {
  --primary: 262 83% 58%;        /* パープル */
  --secondary: 220 14% 96%;
  --accent: 262 83% 58%;
  --muted: 220 14% 96%;
  --card: 0 0% 100%;
  --border: 220 13% 91%;
  /* ... */
}

.dark {
  --primary: 263 70% 50%;
  --secondary: 217 33% 17%;
  --accent: 263 70% 50%;
  --muted: 217 33% 17%;
  --card: 224 71% 4%;
  --border: 216 34% 17%;
  /* ... */
}
```

**カスタムクラス**:
- `.container`: 自動センタリング + レスポンシブパディング
- `.prose`: タイポグラフィプラグイン（記事本文用）

### デザイントークン

| トークン | 用途 | 値 |
|---------|------|-----|
| `font-sans` | 本文フォント | Inter |
| `font-serif` | 見出しフォント | Playfair Display |
| `text-primary` | アクセントカラー | パープル系 |
| `bg-gradient-to-r from-primary to-purple-600` | グラデーション | プライマリ→パープル |

### レスポンシブブレークポイント

| ブレークポイント | 幅 | 用途 |
|----------------|-----|------|
| `sm` | 640px | スマートフォン横向き |
| `md` | 768px | タブレット |
| `lg` | 1024px | デスクトップ |
| `xl` | 1280px | 大画面 |
| `2xl` | 1536px | 超大画面 |

---

## ビルド・デプロイ

### 開発環境

```bash
# 依存関係インストール
pnpm install

# 開発サーバー起動（ホットリロード有効）
pnpm dev
# → http://localhost:3000

# 型チェック
pnpm check

# コードフォーマット
pnpm format
```

### プロダクションビルド

```bash
# ビルド実行
pnpm build

# 出力先: dist/public/
# - index.html
# - assets/*.js (バンドル済みJavaScript)
# - assets/*.css (最適化済みCSS)
# - images/* (コピーされた画像)
```

### ビルドプロセス

1. **Viteビルド**:
   - `client/`ディレクトリをビルド
   - React + TypeScriptをトランスパイル
   - Tailwind CSSを最適化・パージ
   - 静的アセットをコピー
   - 出力: `dist/public/`

2. **サーバービルド**（オプション）:
   - `server/index.ts`をesbuildでバンドル
   - 出力: `dist/index.js`
   - 注: 静的テンプレートでは不要

### デプロイ方法

#### Manus Platform（推奨）

1. Management UIで**Publishボタン**をクリック
2. 自動的に`xxx.manus.space`ドメインで公開
3. Settings > Domainsでカスタムドメイン設定可能

#### Cloudflare Pages

```bash
# Cloudflare Pagesプロジェクト作成
wrangler pages project create shooon-blog

# ビルド設定
# Build command: pnpm build
# Build output directory: dist/public

# デプロイ
wrangler pages deploy dist/public
```

#### Vercel

```bash
# Vercelプロジェクト作成
vercel

# ビルド設定
# Framework Preset: Vite
# Build Command: pnpm build
# Output Directory: dist/public
```

#### Netlify

```toml
# netlify.toml
[build]
  command = "pnpm build"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## コンテンツ管理

### 現在の実装（静的データ）

記事データは`client/src/data/blogData.ts`で管理されています。

**記事追加手順**:

1. `blogData.ts`を開く
2. `blogPosts`配列に新しい記事オブジェクトを追加:

```typescript
{
  id: 9,
  slug: "new-post-slug",
  title: "新しい記事タイトル",
  excerpt: "記事の抜粋（150文字程度）",
  content: `
    <h2>見出し</h2>
    <p>本文...</p>
  `,
  author: {
    name: "SHooon",
    avatar: "/images/avatar.jpg",
  },
  date: "2025/01/27",
  readTime: "5分",
  category: {
    name: "Technology",
    slug: "technology",
  },
  tags: [
    { name: "React", slug: "react" },
    { name: "TypeScript", slug: "typescript" },
  ],
  image: "/images/new-post.jpg",
  featured: false,
}
```

3. 画像を`client/public/images/`に配置
4. ビルド・デプロイ

### 拡張オプション

#### 1. Headless CMS統合（推奨）

**Contentful / Strapi / Sanity等**:

```typescript
// client/src/lib/cms.ts
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export async function getPosts() {
  const response = await client.getEntries({
    content_type: 'blogPost',
    order: '-sys.createdAt',
  });
  return response.items;
}
```

#### 2. Markdown/MDXファイル

**Viteプラグイン使用**:

```bash
pnpm add -D vite-plugin-mdx @mdx-js/rollup
```

```typescript
// vite.config.ts
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    react(),
    mdx(),
    // ...
  ],
});
```

記事を`client/src/posts/*.mdx`に配置し、動的インポート。

#### 3. n8n自動投稿フロー（高度）

**構成例**:
```
[Googleドキュメント] → [n8n Webhook]
  → [記事パース] → [画像アップロード]
  → [Supabase/CMS API] → [デプロイトリガー]
```

**n8nワークフロー**:
1. Googleドキュメントの変更を検知
2. Markdown変換
3. 画像をCloudflare R2/S3にアップロード
4. CMSに記事データをPOST
5. Vercel/Netlifyのデプロイフックを呼び出し

---

## カスタマイズガイド

### テーマカラー変更

`client/src/index.css`を編集:

```css
:root {
  --primary: 200 100% 50%;  /* ブルー系に変更 */
  --accent: 200 100% 50%;
}
```

### フォント変更

`client/index.html`のGoogle Fontsリンクを変更:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

`client/src/index.css`:

```css
:root {
  --font-sans: 'Roboto', sans-serif;
}
```

### ロゴ変更

`client/src/components/Header.tsx`と`Footer.tsx`で:

```tsx
<span className="...">
  Your Brand Name
</span>
```

または画像ロゴを使用:

```tsx
<img src="/images/logo.svg" alt="Logo" className="h-8" />
```

### ページ追加

1. `client/src/pages/NewPage.tsx`を作成
2. `client/src/App.tsx`にルート追加:

```tsx
import NewPage from "./pages/NewPage";

// Router内
<Route path="/new-page" component={NewPage} />
```

3. ナビゲーションリンク追加（Header.tsx）

### UIコンポーネント追加

shadcn/uiから新しいコンポーネントを追加:

```bash
pnpm dlx shadcn@latest add dialog
```

使用例:

```tsx
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>Content</DialogContent>
</Dialog>
```

---

## SEO最適化

### 実装済み機能

1. **動的メタタグ**:
   - `<SEO>`コンポーネントで各ページのメタ情報を管理
   - Open Graph（Facebook、LinkedIn等）
   - Twitter Card

2. **構造化データ**（今後実装予定）:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "BlogPosting",
     "headline": "記事タイトル",
     "author": {
       "@type": "Person",
       "name": "SHooon"
     },
     "datePublished": "2025-01-27"
   }
   ```

3. **サイトマップ生成**（今後実装予定）:
   - `vite-plugin-sitemap`使用
   - ビルド時に自動生成

4. **RSS Feed**（今後実装予定）:
   - `/rss.xml`エンドポイント
   - 最新記事を配信

### 推奨設定

#### robots.txt

`client/public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

#### OGP画像

各記事に専用のOGP画像を設定:

```tsx
<SEO
  image={`https://yourdomain.com${post.image}`}
/>
```

---

## パフォーマンス最適化

### 実装済み

1. **LazyLoading**:
   - 画像に`loading="lazy"`属性
   - Intersection Observer（必要に応じて）

2. **コード分割**:
   - Viteの自動コード分割
   - 動的インポート（必要に応じて）

3. **画像最適化**:
   - WebP形式推奨
   - レスポンシブ画像（`srcset`）

### 今後の改善案

1. **画像CDN**:
   - Cloudflare Images
   - Imgix
   - 自動リサイズ・最適化

2. **キャッシング戦略**:
   - Service Worker（PWA化）
   - CDNエッジキャッシング

3. **バンドルサイズ削減**:
   - Tree-shaking確認
   - 不要な依存関係削除

---

## 制約事項・注意点

### 現在の制限

1. **静的データのみ**:
   - 記事データは`blogData.ts`にハードコード
   - 動的コンテンツ管理には別途CMS統合が必要

2. **コメント機能なし**:
   - 実装予定なし（外部サービス統合可能）
   - Disqus、Utterances等を検討

3. **検索機能**:
   - クライアントサイドのシンプルな文字列検索
   - 全文検索にはAlgolia等の統合が必要

4. **ページネーション**:
   - 未実装（全記事を一度に表示）
   - 記事数増加時に実装推奨

5. **多言語対応**:
   - 現在は日本語のみ
   - i18n対応には`react-i18next`等が必要

### セキュリティ考慮事項

1. **XSS対策**:
   - Reactのデフォルトエスケープに依存
   - `dangerouslySetInnerHTML`は使用していない

2. **環境変数**:
   - `.env`ファイルはGitに含めない
   - `VITE_`プレフィックスのみクライアントに公開

3. **依存関係**:
   - 定期的な`pnpm update`推奨
   - セキュリティ監査: `pnpm audit`

---

## トラブルシューティング

### よくある問題

#### ビルドエラー: "Cannot find module '@/...'"

**原因**: エイリアス設定の問題

**解決策**:
```bash
# tsconfig.jsonを確認
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./client/src/*"]
    }
  }
}
```

#### ダークモードが動作しない

**原因**: ThemeProviderの設定ミス

**解決策**:
- `App.tsx`で`<ThemeProvider switchable>`を確認
- `index.css`の`.dark`クラス定義を確認

#### 画像が表示されない

**原因**: パスの誤り

**解決策**:
- `public/`内のファイルは`/images/xxx.jpg`でアクセス
- ビルド後に`dist/public/images/`に存在するか確認

#### ルーティングが404になる

**原因**: SPAのクライアントサイドルーティング

**解決策**:
- Netlify: `_redirects`ファイル追加
- Vercel: `vercel.json`で`rewrites`設定
- Cloudflare Pages: 自動対応

---

## 今後の拡張計画

### Phase 1: コンテンツ管理強化

- [ ] Headless CMS統合（Contentful推奨）
- [ ] Markdown/MDXサポート
- [ ] 記事下書き・プレビュー機能

### Phase 2: 機能追加

- [ ] ページネーション実装
- [ ] 全文検索（Algolia）
- [ ] コメント機能（Utterances）
- [ ] ニュースレター登録（Mailchimp API）

### Phase 3: パフォーマンス

- [ ] PWA化（Service Worker）
- [ ] 画像CDN統合
- [ ] Core Web Vitals最適化

### Phase 4: 分析・SEO

- [ ] Google Analytics 4統合
- [ ] サイトマップ自動生成
- [ ] RSS Feed生成
- [ ] 構造化データ（JSON-LD）

### Phase 5: 自動化

- [ ] n8n自動投稿フロー
- [ ] CI/CDパイプライン（GitHub Actions）
- [ ] 画像自動最適化

---

## 参考リンク

### 公式ドキュメント

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Wouter](https://github.com/molefrog/wouter)

### ツール・サービス

- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Contentful](https://www.contentful.com/)
- [n8n](https://n8n.io/)

---

## ライセンス

MIT License

© 2025 SHooon Blog. All rights reserved.

---

## 変更履歴

| 日付 | バージョン | 変更内容 |
|------|-----------|---------|
| 2025-01-27 | 1.0.0 | 初回リリース |
| 2025-01-27 | 1.0.1 | ブランド名を「Shooon」から「SHooon」に統一 |

---

**製作者**: Manus AI  
**プロジェクト**: SHooon_blog  
**最終更新**: 2025年1月27日

