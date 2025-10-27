import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function About() {
  return (
    <div className="py-12">
      <div className="container max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="aspect-video md:aspect-[21/9] overflow-hidden rounded-lg mb-8">
            <img
              src="/images/about-bg.jpg"
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Shooon</h1>
        </div>

        {/* Profile */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            こんにちは、Shooonです。フルスタックエンジニアとして、モダンなWeb技術を活用したアプリケーション開発に携わっています。
          </p>

          <h2>このブログについて</h2>
          <p>
            このブログでは、テクノロジー、デザイン、ライフスタイルに関する情報を発信しています。
            特に、Web開発のベストプラクティス、UI/UXデザインの原則、そして生産性を高めるためのツールやテクニックについて書いています。
          </p>

          <h2>専門分野</h2>
          <ul>
            <li><strong>フロントエンド開発</strong>: React、TypeScript、Tailwind CSS</li>
            <li><strong>バックエンド開発</strong>: Node.js、Python、データベース設計</li>
            <li><strong>UI/UXデザイン</strong>: ユーザー中心設計、プロトタイピング</li>
            <li><strong>DevOps</strong>: CI/CD、クラウドインフラストラクチャ</li>
          </ul>

          <h2>執筆の目的</h2>
          <p>
            技術は日々進化しています。このブログを通じて、最新のトレンドや実践的なノウハウを共有し、
            読者の皆さんと一緒に学び、成長していきたいと考えています。
          </p>

          <h2>趣味・興味</h2>
          <p>
            仕事以外では、写真撮影、読書、そして新しいガジェットを試すことが好きです。
            また、ミニマルなデザインとシンプルなライフスタイルに強い関心を持っています。
          </p>
        </div>

        {/* Contact */}
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-muted-foreground mb-6">
            ご質問やコラボレーションのご提案がありましたら、お気軽にご連絡ください。
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Twitter className="h-5 w-5" />
                Twitter
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:contact@example.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

