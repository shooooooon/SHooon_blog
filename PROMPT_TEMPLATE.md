# SHooonブログサイト作成プロンプト

## 基本プロンプト（シンプル版）

```
モダンな個人ブログサイト「SHooon Blog」を作成してください。

【要件】
- React 19 + TypeScript + Tailwind CSS 4
- レスポンシブデザイン（モバイルファースト）
- ダークモード対応
- 以下のページを含む：
  * トップページ（ヒーローセクション + 注目記事 + 最新記事）
  * ブログ一覧ページ（検索・フィルタリング機能付き）
  * 記事詳細ページ（関連記事・SNSシェアボタン付き）
  * カテゴリページ
  * タグページ
  * Aboutページ
  * プライバシーポリシー・利用規約ページ

【デザイン】
- カラー: パープル系のアクセントカラー
- フォント: Inter（本文）、Playfair Display（見出し）
- ミニマル・クリーンなレイアウト
- Stickyナビゲーションバー

【機能】
- 記事検索
- カテゴリ・タグフィルタリング
- SEOメタタグ・OGP対応
- LazyLoading
- 8件程度のサンプル記事データ

【技術スタック】
- shadcn/ui（UIコンポーネント）
- Wouter（ルーティング）
- Vite（ビルドツール）
```

---

## 詳細プロンプト（完全版）

```markdown
# プロジェクト概要

モダンでシンプル、読みやすい個人ブログサイト「SHooon Blog」を構築してください。
2025年時点で最新のWeb技術を使用し、高速でレスポンシブ、SEOに最適化されたブログプラットフォームを作成します。

---

## 技術要件

### 必須技術スタック

| カテゴリ | 技術 | バージョン |
|---------|------|-----------|
| フレームワーク | React | 18.3.1以上 |
| 言語 | TypeScript | 5.6.3以上 |
| ビルドツール | Vite | 7.x |
| スタイリング | Tailwind CSS | 4.x |
| UIライブラリ | shadcn/ui | 最新 |
| ルーティング | Wouter | 3.3.5以上 |
| アイコン | Lucide React | 最新 |
| パッケージマネージャー | pnpm | 10.x |

### プロジェクト構造

```
shooon-blog/
├── client/
│   ├── public/
│   │   └── images/          # 画像アセット
│   ├── src/
│   │   ├── components/      # 再利用コンポーネント
│   │   │   ├── ui/          # shadcn/uiコンポーネント
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   └── SEO.tsx
│   │   ├── contexts/        # Reactコンテキスト
│   │   │   └── ThemeContext.tsx
│   │   ├── data/
│   │   │   └── blogData.ts  # サンプル記事データ
│   │   ├── hooks/           # カスタムフック
│   │   ├── lib/             # ユーティリティ
│   │   ├── pages/           # ページコンポーネント
│   │   │   ├── Home.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── BlogPost.tsx
│   │   │   ├── Category.tsx
│   │   │   ├── Tag.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Privacy.tsx
│   │   │   ├── Terms.tsx
│   │   │   └── NotFound.tsx
│   │   ├── types/
│   │   │   └── blog.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## デザイン仕様

### カラーパレット

**プライマリカラー**: パープル系（`#8B5CF6`）

**カラー変数**（Tailwind CSS）:
```css
:root {
  --primary: 262 83% 58%;        /* パープル */
  --secondary: 220 14% 96%;
  --accent: 262 83% 58%;
  --muted: 220 14% 96%;
  --card: 0 0% 100%;
  --border: 220 13% 91%;
}

.dark {
  --primary: 263 70% 50%;
  --secondary: 217 33% 17%;
  --accent: 263 70% 50%;
  --muted: 217 33% 17%;
  --card: 224 71% 4%;
  --border: 216 34% 17%;
}
```

### タイポグラフィ

- **本文フォント**: Inter（Google Fonts）
- **見出しフォント**: Playfair Display（Google Fonts）
- **コードフォント**: JetBrains Mono

### レイアウト原則

1. **ミニマリズム**: 余白を広く取り、コンテンツを際立たせる
2. **階層構造**: 明確な視覚的ヒエラルキー
3. **一貫性**: 統一されたスペーシング・カラー・タイポグラフィ
4. **レスポンシブ**: モバイルファーストのアプローチ

### デザイントークン

| トークン | 値 | 用途 |
|---------|-----|------|
| `container` | max-width: 1280px | コンテンツ幅 |
| `spacing-section` | py-20 | セクション間隔 |
| `rounded-card` | rounded-lg | カード角丸 |
| `shadow-card` | shadow-md | カード影 |

---

## ページ仕様

### 1. トップページ（Home.tsx）

**セクション構成**:

1. **ヒーローセクション**
   - 大きなグラデーション背景
   - キャッチコピー: "モダンでシンプル、読みやすいブログ"
   - サブテキスト: "テクノロジー、デザイン、ライフスタイルについて発信する個人ブログ。2025年のモダンなWeb体験をお届けします。"
   - CTAボタン: "記事を読む" → /blog

2. **Featured Posts（注目記事）**
   - 3件の注目記事をカードグリッドで表示
   - 各カード: サムネイル画像 + タイトル + 抜粋 + カテゴリバッジ + 日付

3. **Latest Posts（最新記事）**
   - 6件の最新記事をカードグリッドで表示
   - レスポンシブグリッド: 1列（モバイル）→ 2列（タブレット）→ 3列（デスクトップ）
   - "すべて見る" リンク → /blog

4. **CTAセクション**
   - グラデーション背景
   - テキスト: "最新記事をメールで受け取る"
   - ボタン: "ニュースレターに登録"（プレースホルダー）

### 2. ブログ一覧ページ（Blog.tsx）

**機能**:
- 全記事のカードグリッド表示
- 検索ボックス（タイトル・本文の全文検索）
- カテゴリフィルター（ドロップダウン）
- タグフィルター（複数選択可能）
- レスポンシブグリッド

**状態管理**:
```typescript
const [searchQuery, setSearchQuery] = useState("");
const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
const [selectedTag, setSelectedTag] = useState<string | null>(null);
```

### 3. 記事詳細ページ（BlogPost.tsx）

**構成**:
1. **ヘッダー**
   - タイトル（大きく目立つ）
   - メタ情報: 日付、著者名、読了時間
   - カテゴリバッジ
   - タグリスト

2. **本文**
   - Markdown風のレンダリング
   - 見出し、段落、リスト、引用、コードブロック対応
   - 画像のLazyLoading

3. **SNSシェアボタン**
   - Twitter、Facebook、LinkedIn
   - アイコン + テキスト

4. **関連記事**
   - 同じカテゴリの記事3件
   - カードグリッド表示

### 4. カテゴリページ（Category.tsx）

- URLパラメータからカテゴリスラッグ取得
- カテゴリ名を表示
- 該当カテゴリの記事一覧をカードグリッド表示

### 5. タグページ（Tag.tsx）

- URLパラメータからタグスラッグ取得
- タグ名を表示
- 該当タグの記事一覧をカードグリッド表示

### 6. Aboutページ（About.tsx）

**内容**:
- ヘッダー画像（背景）
- プロフィール写真（円形）
- 自己紹介文
- スキル・専門分野
- SNSリンク（Twitter、GitHub、LinkedIn、YouTube）
- "このブログについて" セクション

### 7. プライバシーポリシー（Privacy.tsx）

**セクション**:
- 個人情報の収集について
- 個人情報の利用目的
- 個人情報の第三者への開示
- Cookie（クッキー）について
- アクセス解析ツールについて
- 免責事項
- プライバシーポリシーの変更
- お問い合わせ

### 8. 利用規約（Terms.tsx）

**セクション**:
- はじめに
- 著作権について
- リンクについて
- 免責事項
- コメントについて
- プライバシーについて
- 規約の変更
- お問い合わせ

### 9. 404ページ（NotFound.tsx）

- 大きな404テキスト
- "ページが見つかりません" メッセージ
- ホームへ戻るボタン

---

## コンポーネント仕様

### Header.tsx

**機能**:
- Stickyナビゲーションバー（`sticky top-0 z-50`）
- ロゴ（グラデーションテキスト: "SHooon"）
- デスクトップメニュー: Home、Blog、About
- モバイルハンバーガーメニュー（shadcn/ui Sheet使用）
- 検索アイコン（プレースホルダー）
- ダークモード切り替えボタン

**レスポンシブ**:
- デスクトップ: 横並びナビゲーション
- モバイル: ハンバーガーメニュー + スライドアウト

### Footer.tsx

**構成**:
- 3カラムレイアウト（モバイルは1カラム）
  1. **ブランド情報**
     - ロゴ（グラデーションテキスト）
     - 説明文
     - SNSアイコン（Twitter、GitHub、LinkedIn、YouTube）
  2. **Quick Links**
     - Blog
     - About
     - Privacy Policy
     - Terms of Service
  3. **Newsletter**
     - 登録フォーム（プレースホルダー）
     - メールアドレス入力 + 登録ボタン
- コピーライト: "© 2025 SHooon Blog. All rights reserved."

### BlogCard.tsx

**Props**:
```typescript
interface BlogCardProps {
  post: BlogPost;
}
```

**表示内容**:
- サムネイル画像（aspect-ratio: 16/9）
- カテゴリバッジ（左上に配置）
- タイトル（2行で切り捨て）
- 抜粋（3行で切り捨て）
- メタ情報: 日付、読了時間
- ホバーアニメーション（影・スケール）

### SEO.tsx

**Props**:
```typescript
interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}
```

**機能**:
- `useEffect`でメタタグを動的に更新
- Open Graph（OGP）タグ設定
- Twitter Cardタグ設定
- デフォルト値: サイト全体の情報

---

## データ構造

### BlogPost型定義（types/blog.ts）

```typescript
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: {
    name: string;
    slug: string;
  };
  tags: Array<{
    name: string;
    slug: string;
  }>;
  image: string;
  featured: boolean;
}
```

### サンプルデータ（data/blogData.ts）

**記事数**: 8件

**カテゴリ**:
- Technology
- Design
- Lifestyle

**タグ**:
- React
- TypeScript
- Tailwind CSS
- UI/UX
- Productivity
- Minimal
- Workspace

**ヘルパー関数**:
```typescript
export function getFeaturedPosts(): BlogPost[];
export function getRecentPosts(limit: number): BlogPost[];
export function getPostBySlug(slug: string): BlogPost | undefined;
export function getPostsByCategory(categorySlug: string): BlogPost[];
export function getPostsByTag(tagSlug: string): BlogPost[];
export function getAllCategories(): Array<{ name: string; slug: string }>;
export function getAllTags(): Array<{ name: string; slug: string }>;
```

---

## 機能要件

### 1. ルーティング（Wouter使用）

```typescript
<Route path="/" component={Home} />
<Route path="/blog" component={Blog} />
<Route path="/blog/:slug" component={BlogPost} />
<Route path="/category/:slug" component={Category} />
<Route path="/tag/:slug" component={Tag} />
<Route path="/about" component={About} />
<Route path="/privacy" component={Privacy} />
<Route path="/terms" component={Terms} />
<Route path="/404" component={NotFound} />
<Route component={NotFound} /> {/* Fallback */}
```

### 2. テーマ管理（ThemeContext）

**機能**:
- ライト/ダークモード切り替え
- システム設定に応じた自動切り替え（オプション）
- `localStorage`で設定を永続化

**実装**:
```typescript
const ThemeContext = createContext<{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}>();
```

### 3. 検索機能

**実装**:
- クライアントサイドの全文検索
- タイトル・本文・タグ・カテゴリを対象
- 大文字小文字を区別しない

```typescript
const filteredPosts = allPosts.filter(post => {
  const searchLower = searchQuery.toLowerCase();
  return (
    post.title.toLowerCase().includes(searchLower) ||
    post.excerpt.toLowerCase().includes(searchLower) ||
    post.content.toLowerCase().includes(searchLower)
  );
});
```

### 4. フィルタリング

**カテゴリフィルター**:
- ドロップダウンで選択
- "すべて" オプション

**タグフィルター**:
- 複数選択可能（チェックボックス）
- OR条件で絞り込み

### 5. SEO対策

**実装項目**:
- [ ] 各ページに適切な`<title>`
- [ ] メタディスクリプション
- [ ] OGPタグ（`og:title`, `og:description`, `og:image`, `og:url`）
- [ ] Twitter Cardタグ
- [ ] 構造化データ（JSON-LD、今後実装）
- [ ] サイトマップ生成（今後実装）
- [ ] RSS Feed（今後実装）

### 6. パフォーマンス最適化

**実装項目**:
- [ ] 画像のLazyLoading（`loading="lazy"`）
- [ ] コード分割（Viteの自動分割）
- [ ] Tailwind CSSのパージ（未使用クラス削除）
- [ ] 画像最適化（WebP推奨）
- [ ] Core Web Vitals対応

---

## UI/UXガイドライン

### アニメーション

**ホバーエフェクト**:
- カード: `hover:shadow-lg hover:scale-105 transition-all duration-300`
- ボタン: `hover:bg-primary/90 transition-colors`
- リンク: `hover:text-primary transition-colors`

**ページ遷移**:
- スムーズスクロール: `scroll-behavior: smooth`

### アクセシビリティ

**必須対応**:
- [ ] セマンティックHTML（`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`）
- [ ] 適切な見出し階層（`<h1>`は1つ、`<h2>`〜`<h6>`は階層的に）
- [ ] `alt`属性を全画像に設定
- [ ] フォーカス可能な要素に視覚的フィードバック
- [ ] キーボードナビゲーション対応
- [ ] ARIA属性（必要に応じて）

### レスポンシブデザイン

**ブレークポイント**:
- モバイル: `< 640px`
- タブレット: `640px - 1024px`
- デスクトップ: `> 1024px`

**グリッドレイアウト**:
```css
/* モバイル */
grid-cols-1

/* タブレット */
md:grid-cols-2

/* デスクトップ */
lg:grid-cols-3
```

---

## 開発ワークフロー

### 1. プロジェクト初期化

```bash
# Manusプラットフォームで自動生成
# または手動でVite + Reactプロジェクト作成
pnpm create vite shooon-blog --template react-ts
cd shooon-blog
pnpm install
```

### 2. 依存関係追加

```bash
# Tailwind CSS
pnpm add -D tailwindcss@next @tailwindcss/vite autoprefixer

# shadcn/ui
pnpm dlx shadcn@latest init

# ルーティング
pnpm add wouter

# アイコン
pnpm add lucide-react

# その他
pnpm add clsx tailwind-merge class-variance-authority
```

### 3. shadcn/uiコンポーネント追加

```bash
pnpm dlx shadcn@latest add button card input badge sheet
```

### 4. 開発サーバー起動

```bash
pnpm dev
# → http://localhost:3000
```

### 5. ビルド

```bash
pnpm build
# 出力: dist/public/
```

---

## デプロイ手順

### Manus Platform（推奨）

1. Management UIで**Publishボタン**をクリック
2. 自動的に`xxx.manus.space`ドメインで公開
3. Settings > Domainsでカスタムドメイン設定

### Cloudflare Pages

```bash
# ビルド設定
Build command: pnpm build
Build output directory: dist/public

# デプロイ
wrangler pages deploy dist/public
```

### Vercel

```bash
# ビルド設定
Framework Preset: Vite
Build Command: pnpm build
Output Directory: dist/public
```

---

## カスタマイズオプション

### テーマカラー変更

`client/src/index.css`の`:root`セクションを編集:

```css
:root {
  --primary: 200 100% 50%;  /* ブルー系に変更 */
}
```

### フォント変更

`client/index.html`のGoogle Fontsリンクを変更し、`index.css`で適用。

### ロゴ変更

`Header.tsx`と`Footer.tsx`でブランド名またはロゴ画像を変更。

### 記事追加

`client/src/data/blogData.ts`の`blogPosts`配列に新しい記事オブジェクトを追加。

---

## 注意事項

1. **画像最適化**: 画像は事前にWebP形式に変換し、適切なサイズにリサイズすること
2. **コンテンツ管理**: 静的データのため、記事数が増えた場合はHeadless CMS（Contentful等）の統合を検討
3. **ページネーション**: 記事数が20件を超える場合は実装推奨
4. **環境変数**: `.env`ファイルはGitに含めず、`.gitignore`に追加
5. **セキュリティ**: 依存関係は定期的に更新（`pnpm update`）

---

## 成果物チェックリスト

### 必須項目

- [ ] 全ページが正常に表示される
- [ ] レスポンシブデザインが機能する（モバイル・タブレット・デスクトップ）
- [ ] ダークモード切り替えが動作する
- [ ] 検索機能が正常に動作する
- [ ] カテゴリ・タグフィルタリングが動作する
- [ ] 記事詳細ページで関連記事が表示される
- [ ] SNSシェアボタンが機能する
- [ ] SEOメタタグが各ページに設定されている
- [ ] 404ページが表示される
- [ ] ビルドエラーがない

### 推奨項目

- [ ] 画像がLazyLoadingされる
- [ ] ホバーアニメーションがスムーズ
- [ ] フォーカス状態が視覚的に分かる
- [ ] キーボードナビゲーションが可能
- [ ] ページ読み込み速度が3秒以内
- [ ] Lighthouse スコア90点以上

---

## 参考資料

- [React公式ドキュメント](https://react.dev/)
- [Tailwind CSS公式](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Wouter](https://github.com/molefrog/wouter)
- [Vite](https://vite.dev/)

---

**このプロンプトを使用して、高品質なモダンブログサイトを構築してください。**
```

---

## カスタマイズ可能なプロンプト（変数版）

```markdown
# 【プロジェクト名】ブログサイト作成プロンプト

## 基本情報

- **プロジェクト名**: [プロジェクト名を入力]
- **ブログタイトル**: [ブログタイトルを入力]
- **テーマカラー**: [カラー名またはHEXコードを入力]
- **フォント**: 
  - 本文: [フォント名を入力]
  - 見出し: [フォント名を入力]

## カスタマイズ指示

以下の要件でモダンな個人ブログサイトを作成してください：

### 技術スタック
- React 19 + TypeScript
- Tailwind CSS 4
- shadcn/ui
- Wouter（ルーティング）
- Vite（ビルドツール）

### ページ構成
1. トップページ（ヒーロー + 注目記事 + 最新記事）
2. ブログ一覧（検索・フィルタリング）
3. 記事詳細（関連記事・SNSシェア）
4. カテゴリページ
5. タグページ
6. Aboutページ
7. プライバシーポリシー
8. 利用規約

### デザイン
- **カラー**: [指定したテーマカラー]
- **スタイル**: ミニマル・クリーン
- **レスポンシブ**: モバイルファースト
- **ダークモード**: 対応

### 機能
- 記事検索
- カテゴリ・タグフィルタリング
- SEO最適化（メタタグ・OGP）
- LazyLoading
- [追加機能があれば記載]

### サンプルデータ
- 記事数: [数を指定]件
- カテゴリ: [カテゴリ名をカンマ区切りで列挙]
- タグ: [タグ名をカンマ区切りで列挙]

### その他の要望
[追加の要望があれば記載]
```

---

## 使用例

### 例1: テクノロジーブログ

```
プロジェクト名: TechInsights
ブログタイトル: TechInsights - 最新技術を深掘りする
テーマカラー: ブルー系（#3B82F6）
フォント: 
  - 本文: Roboto
  - 見出し: Montserrat

カテゴリ: AI, Web Development, Cloud, DevOps
タグ: Python, JavaScript, AWS, Docker, Kubernetes, React, TypeScript
記事数: 10件
```

### 例2: デザインブログ

```
プロジェクト名: DesignDaily
ブログタイトル: Design Daily - 毎日のデザインインスピレーション
テーマカラー: ピンク系（#EC4899）
フォント: 
  - 本文: Inter
  - 見出し: Poppins

カテゴリ: UI/UX, Graphic Design, Typography, Color Theory
タグ: Figma, Adobe XD, Illustrator, Photoshop, Branding
記事数: 8件
```

---

## プロンプト使用時のヒント

1. **明確な指示**: 曖昧な表現を避け、具体的な要件を記載
2. **優先順位**: 必須機能と推奨機能を分ける
3. **参考資料**: 既存サイトのURLを提示すると理解が早い
4. **段階的実装**: 複雑な機能は後から追加する方針も可
5. **フィードバック**: 初回生成後、細かい調整を依頼

---

**このプロンプトテンプレートを使用して、あなただけのブログサイトを作成してください！**

