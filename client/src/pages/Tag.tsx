import { useRoute } from "wouter";
import BlogCard from "@/components/BlogCard";
import { getPostsByTag } from "@/data/blogData";

export default function Tag() {
  const [, params] = useRoute("/tag/:slug");
  const tagSlug = params?.slug;
  
  const tag = tagSlug?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const posts = tag ? getPostsByTag(tag) : [];

  return (
    <div className="py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            タグ: {tag}
          </h1>
          <p className="text-sm text-muted-foreground">
            {posts.length}件の記事
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              このタグには記事がありません。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

