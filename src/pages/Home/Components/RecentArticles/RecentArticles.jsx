import Section from "../Section/Section.jsx";
import ArticleCard from "./ArticleCard.jsx";

function RecentArticles() {
  const recentPosts = [
    {
      id: 4,
      title: "TypeScript 5.0: What's New and Exciting",
      description:
        "A comprehensive look at the latest features and improvements in TypeScript 5.0.",
      author: "David Kim",
      date: "2025-06-12",
      readTime: 6,
      category: "TypeScript",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop",
    },
    {
      id: 5,
      title: "Optimizing React Performance",
      description:
        "Advanced techniques for making your React applications lightning fast.",
      author: "Lisa Park",
      date: "2025-06-11",
      readTime: 10,
      category: "Performance",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    },
    {
      id: 6,
      title: "The Rise of Edge Computing",
      description:
        "How edge computing is changing the landscape of web applications.",
      author: "James Wilson",
      date: "2025-06-09",
      readTime: 7,
      category: "Infrastructure",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop",
    },
    {
      id: 7,
      title: "Building Scalable APIs with GraphQL",
      description:
        "A guide to creating efficient and scalable APIs using GraphQL.",
      author: "Emily Johnson",
      date: "2025-06-08",
      readTime: 8,
      category: "APIs",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop",
    },
  ];
  return (
    <Section section_title="Recent Articles">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {recentPosts.map((post) => (
          <ArticleCard
            key={post.id}
            article_title={post.title}
            article_description={post.description}
            article_thumbnail={post.image}
            article_link={`/articles/${post.id}`}
            article_date={post.date}
            article_read_time={post.readTime}
            article_views="1K"
            article_author={post.author}
          />
        ))}
      </div>
    </Section>
  );
}

export default RecentArticles;
