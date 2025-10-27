import { useRoute } from "wouter";
import BlogCard from "@/components/BlogCard";
import { getPostsByCategory, categories } from "@/data/blogData";
import NotFound from "./NotFound";

export default function Category() {
  const [, params] = useRoute("/category/:slug");
  const categorySlug = params?.slug;
  
  const category = categories.find((c) => c.slug === categorySlug);
  const posts = categorySlug ? getPostsByCategory(
    categories.find((c) => c.slug === categorySlug)?.name || ""
  ) : [];

  if (!category) {
    return <NotFound />;
  }

  return (
    <div className="py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-muted-foreground">
            {category.description}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {category.count}件の記事
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
              このカテゴリには記事がありません。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

