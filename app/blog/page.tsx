import { sanityClient } from "@/app/lib/sanity";

const query = `*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  author,
  publishedAt,
  excerpt,
  mainImage
}`;

export default async function BlogPage() {
  const posts = await sanityClient.fetch(query);

  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm text-purple-400 uppercase tracking-widest mb-3">
          AI • SEO • Performance Marketing • Analytics
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Deepraj&apos;s Blog
        </h1>

        <p className="text-gray-400 max-w-2xl mb-12">
          Practical insights on AI-powered Digital Marketing, SEO, Performance
          Marketing, Marketing Analytics, and using data to drive measurable
          business growth.
        </p>

        {posts.length === 0 ? (
          <div className="border border-white/10 rounded-2xl p-8 text-gray-400">
            No blog posts published yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {posts.map((post: any) => (
              <article
                key={post.slug}
                className="group border border-white/10 bg-white/5 rounded-2xl p-6 hover:border-purple-500/50 transition"
              >
                <div className="h-40 rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-600/20 mb-5" />

                <p className="text-xs text-purple-400 mb-2">
                  {post.author || "Deepraj Srivastav"}
                </p>

                <h2 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition">
                  {post.title}
                </h2>

                <p className="text-gray-400 text-sm leading-6">
                  {post.excerpt || "Read this article to learn more."}
                </p>

                <a
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-5 text-sm font-medium text-white hover:text-purple-400"
                >
                  Read Article →
                </a>
              </article>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}