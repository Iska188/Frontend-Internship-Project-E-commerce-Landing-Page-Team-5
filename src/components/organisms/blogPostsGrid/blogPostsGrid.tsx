import { BlogPostCard } from '../../molecules';
import './blogPostsGrid.css';

interface PostData {
  id: string;
  imageSrc: string;
  badge: string;
  category: string;
  title: string;
  date: string;
  views: string;
  readTime: string;
}

interface BlogPostsGridProps {
  posts: PostData[];
}

export const BlogPostsGrid = ({ posts }: BlogPostsGridProps) => {
  return (
    <div className="o-blog-posts-grid">
      {posts.map((post) => (
        <BlogPostCard
          key={post.id}
          imageSrc={post.imageSrc}
          badge={post.badge}
          category={post.category}
          title={post.title}
          date={post.date}
          views={post.views}
          readTime={post.readTime}
        />
      ))}
    </div>
  );
};