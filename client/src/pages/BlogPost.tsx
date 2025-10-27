import { useRoute, Link } from "wouter";
import { getPostBySlug, blogPosts } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { toast } from "sonner";
import NotFound from "./NotFound";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params?.slug ? getPostBySlug(params.slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {
        toast.error("共有に失敗しました");
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("URLをコピーしました");
    }
  };

  return (
    <div className="py-12">
      <article className="container max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/blog">
            <a className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              記事一覧に戻る
            </a>
          </Link>
        </Button>

        {/* Cover Image */}
        <div className="aspect-video overflow-hidden rounded-lg mb-8">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Badge variant="secondary">{post.category}</Badge>
          {post.tags.map((tag) => (
            <Link key={tag} href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
              <a>
                <Badge variant="outline">{tag}</Badge>
              </a>
            </Link>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Author and Date */}
        <div className="flex items-center justify-between mb-8 pb-8 border-b">
          <div className="flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime}分</span>
                </div>
              </div>
            </div>
          </div>
          <Button variant="outline" size="icon" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('# ')) {
              return <h1 key={index}>{paragraph.slice(2)}</h1>;
            } else if (paragraph.startsWith('## ')) {
              return <h2 key={index}>{paragraph.slice(3)}</h2>;
            } else if (paragraph.startsWith('### ')) {
              return <h3 key={index}>{paragraph.slice(4)}</h3>;
            } else if (paragraph.startsWith('```')) {
              const codeBlock = post.content.split('```')[index / 2 + 1];
              if (codeBlock) {
                return (
                  <pre key={index} className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{codeBlock.trim()}</code>
                  </pre>
                );
              }
            } else if (paragraph.startsWith('- ')) {
              return <li key={index}>{paragraph.slice(2)}</li>;
            } else if (paragraph.trim()) {
              return <p key={index}>{paragraph}</p>;
            }
            return null;
          })}
        </div>

        {/* Author Bio */}
        <div className="bg-muted/50 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-lg mb-2">{post.author.name}</h3>
              <p className="text-muted-foreground">{post.author.bio}</p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">関連記事</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

