import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import BlogCard from "@/components/BlogCard";
import { getFeaturedPosts, getRecentPosts } from "@/data/blogData";
import SEO from "@/components/SEO";

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(6);

  return (
    <>
      <SEO />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/hero-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              モダンで
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                シンプル
              </span>
              、<br />
              読みやすいブログ
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              テクノロジー、デザイン、ライフスタイルについて発信する個人ブログ。
              2025年のモダンなWeb体験をお届けします。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/blog">
                  <a className="flex items-center gap-2">
                    記事を読む
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Featured Posts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Latest Posts</h2>
            <Button variant="ghost" asChild>
              <Link href="/blog">
                <a className="flex items-center gap-2">
                  すべて見る
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-purple-600/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            最新記事をメールで受け取る
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            週に1回、厳選された記事をお届けします。
          </p>
          <Button size="lg" asChild>
            <a href="#newsletter" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}>
              ニュースレターに登録
            </a>
          </Button>
        </div>
      </section>
    </div>
    </>
  );
}

