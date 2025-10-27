import { BlogPost, Category } from "@/types/blog";

export const categories: Category[] = [
  {
    id: "1",
    name: "Technology",
    slug: "technology",
    description: "最新のテクノロジートレンドと開発技術",
    count: 5,
  },
  {
    id: "2",
    name: "Design",
    slug: "design",
    description: "UI/UXデザインとクリエイティブ",
    count: 3,
  },
  {
    id: "3",
    name: "Lifestyle",
    slug: "lifestyle",
    description: "日常生活とワークライフバランス",
    count: 2,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "モダンなWebアプリケーション開発のベストプラクティス",
    slug: "modern-web-development-best-practices",
    excerpt: "2025年における最新のWeb開発手法とツールチェーンについて解説します。React、TypeScript、そしてモダンなビルドツールの活用方法を学びましょう。",
    content: `# モダンなWebアプリケーション開発のベストプラクティス

Web開発の世界は常に進化しています。2025年の現在、開発者が知っておくべき重要なベストプラクティスをまとめました。

## TypeScriptの活用

TypeScriptは型安全性を提供し、大規模なアプリケーション開発において不可欠なツールとなっています。

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
}

const getUser = async (id: string): Promise<User> => {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
};
\`\`\`

## コンポーネント設計

再利用可能なコンポーネントを設計することで、保守性と開発効率が向上します。

## パフォーマンス最適化

- Code Splitting
- Lazy Loading
- Image Optimization
- Caching Strategy

これらの技術を適切に組み合わせることで、高速で快適なユーザー体験を提供できます。`,
    coverImage: "/images/post-1.jpg",
    author: {
      name: "Shooon",
      avatar: "/images/about-bg.jpg",
      bio: "フルスタックエンジニア、デザイナー",
    },
    publishedAt: "2025-01-15",
    readingTime: 8,
    category: "Technology",
    tags: ["Web Development", "TypeScript", "React"],
    featured: true,
  },
  {
    id: "2",
    title: "ミニマルデザインの美学：Less is More",
    slug: "minimalist-design-philosophy",
    excerpt: "シンプルさの中に宿る力強さ。ミニマルデザインの原則と、それを実践するための具体的なテクニックを紹介します。",
    content: `# ミニマルデザインの美学：Less is More

ミニマルデザインは単なる装飾の削減ではありません。本質を見極め、必要なものだけを残す哲学です。

## 余白の重要性

余白（ホワイトスペース）は、デザインにおいて最も重要な要素の一つです。適切な余白は、コンテンツに呼吸する空間を与え、視覚的な階層を明確にします。

## タイポグラフィ

フォント選びとタイポグラフィは、ミニマルデザインの成否を分ける重要な要素です。

## カラーパレット

限られた色数で最大の効果を生み出すことが、ミニマルデザインの真髄です。`,
    coverImage: "/images/post-2.jpg",
    author: {
      name: "Shooon",
      avatar: "/images/about-bg.jpg",
      bio: "フルスタックエンジニア、デザイナー",
    },
    publishedAt: "2025-01-10",
    readingTime: 6,
    category: "Design",
    tags: ["Design", "Minimalism", "UI/UX"],
    featured: true,
  },
  {
    id: "3",
    title: "生産性を高めるワークスペースの作り方",
    slug: "productive-workspace-setup",
    excerpt: "理想的なワークスペースは、創造性と生産性を最大化します。デスクセットアップから環境づくりまで、実践的なアドバイスをお届けします。",
    content: `# 生産性を高めるワークスペースの作り方

快適なワークスペースは、仕事の質と効率を大きく左右します。

## エルゴノミクス

長時間の作業でも疲れにくい環境を整えることが重要です。

- 適切な椅子とデスクの高さ
- モニターの位置と角度
- キーボードとマウスの配置

## 照明

自然光を最大限に活用しつつ、タスクライトで補完することで、目の疲れを軽減できます。

## 整理整頓

物理的な整理は、精神的な整理にもつながります。必要なものだけを手の届く範囲に配置しましょう。`,
    coverImage: "/images/post-3.png",
    author: {
      name: "Shooon",
      avatar: "/images/about-bg.jpg",
      bio: "フルスタックエンジニア、デザイナー",
    },
    publishedAt: "2025-01-05",
    readingTime: 5,
    category: "Lifestyle",
    tags: ["Productivity", "Workspace", "Lifestyle"],
    featured: false,
  },
  {
    id: "4",
    title: "React 19の新機能を徹底解説",
    slug: "react-19-new-features",
    excerpt: "React 19で導入された新機能と改善点を詳しく解説します。Server Componentsやアクションなど、開発体験を向上させる機能が満載です。",
    content: `# React 19の新機能を徹底解説

React 19は、開発者体験とパフォーマンスの両面で大きな進化を遂げました。

## Server Components

サーバーサイドでのレンダリングが、より簡単かつ効率的になりました。

## Actions

フォーム処理とデータ更新が、より直感的に書けるようになりました。

## Compiler Improvements

新しいコンパイラにより、パフォーマンスが大幅に向上しています。`,
    coverImage: "/images/post-1.jpg",
    author: {
      name: "Shooon",
      avatar: "/images/about-bg.jpg",
      bio: "フルスタックエンジニア、デザイナー",
    },
    publishedAt: "2024-12-20",
    readingTime: 10,
    category: "Technology",
    tags: ["React", "JavaScript", "Web Development"],
    featured: false,
  },
  {
    id: "5",
    title: "アクセシビリティを考慮したデザイン",
    slug: "accessible-design-principles",
    excerpt: "すべてのユーザーにとって使いやすいデザインを実現するための原則とテクニックを紹介します。",
    content: `# アクセシビリティを考慮したデザイン

アクセシビリティは、すべてのユーザーに平等な体験を提供するための重要な要素です。

## カラーコントラスト

十分なコントラスト比を確保することで、視覚に障害のあるユーザーでもコンテンツを読みやすくなります。

## キーボードナビゲーション

マウスを使わずに、キーボードだけで操作できることが重要です。

## スクリーンリーダー対応

適切なセマンティックHTMLとARIA属性の使用が不可欠です。`,
    coverImage: "/images/post-2.jpg",
    author: {
      name: "Shooon",
      avatar: "/images/about-bg.jpg",
      bio: "フルスタックエンジニア、デザイナー",
    },
    publishedAt: "2024-12-15",
    readingTime: 7,
    category: "Design",
    tags: ["Accessibility", "UI/UX", "Design"],
    featured: false,
  },
  {
    id: "6",
    title: "リモートワークで成功するための5つの習慣",
    slug: "remote-work-success-habits",
    excerpt: "リモートワークを成功させるための実践的な習慣とテクニックを紹介します。",
    content: `# リモートワークで成功するための5つの習慣

リモートワークには独自の課題がありますが、適切な習慣を身につけることで克服できます。

## 1. 明確な境界線を設定する

仕事とプライベートの時間を明確に区別しましょう。

## 2. 定期的なコミュニケーション

チームメンバーとの定期的なコミュニケーションが重要です。

## 3. 休憩を取る

定期的な休憩は、生産性を維持するために不可欠です。

## 4. 専用のワークスペース

仕事専用のスペースを確保することで、集中力が高まります。

## 5. 健康管理

運動と適切な食事で、心身の健康を保ちましょう。`,
    coverImage: "/images/post-3.png",
    author: {
      name: "Shooon",
      avatar: "/images/about-bg.jpg",
      bio: "フルスタックエンジニア、デザイナー",
    },
    publishedAt: "2024-12-10",
    readingTime: 6,
    category: "Lifestyle",
    tags: ["Remote Work", "Productivity", "Lifestyle"],
    featured: false,
  },
  {
    id: "7",
    title: "Tailwind CSS 4.0の新機能",
    slug: "tailwind-css-4-new-features",
    excerpt: "Tailwind CSS 4.0で導入された新機能と改善点を詳しく見ていきます。",
    content: `# Tailwind CSS 4.0の新機能

Tailwind CSS 4.0は、パフォーマンスと開発体験の両面で大きな進化を遂げました。

## 新しいエンジン

より高速なビルドプロセスを実現する新しいエンジンが導入されました。

## カスタマイズの簡素化

設定ファイルがよりシンプルになり、カスタマイズが容易になりました。

## 新しいユーティリティ

便利な新しいユーティリティクラスが多数追加されています。`,
    coverImage: "/images/post-1.jpg",
    author: {
      name: "Shooon",
      avatar: "/images/about-bg.jpg",
      bio: "フルスタックエンジニア、デザイナー",
    },
    publishedAt: "2024-12-05",
    readingTime: 8,
    category: "Technology",
    tags: ["CSS", "Tailwind", "Web Development"],
    featured: true,
  },
  {
    id: "8",
    title: "デザインシステムの構築方法",
    slug: "building-design-systems",
    excerpt: "スケーラブルなデザインシステムを構築するための戦略とベストプラクティスを紹介します。",
    content: `# デザインシステムの構築方法

デザインシステムは、一貫性のあるユーザー体験を提供するための基盤です。

## デザイントークン

色、タイポグラフィ、スペーシングなどの基本要素を定義します。

## コンポーネントライブラリ

再利用可能なコンポーネントを体系的に整理します。

## ドキュメント

使い方とガイドラインを明確に文書化することが重要です。`,
    coverImage: "/images/post-2.jpg",
    author: {
      name: "Shooon",
      avatar: "/images/about-bg.jpg",
      bio: "フルスタックエンジニア、デザイナー",
    },
    publishedAt: "2024-11-30",
    readingTime: 9,
    category: "Design",
    tags: ["Design Systems", "UI/UX", "Design"],
    featured: false,
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter((post) => post.category === category);
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter((post) => post.tags.includes(tag));
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter((post) => post.featured);
};

export const getRecentPosts = (limit: number = 6): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

