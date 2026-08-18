import { useState } from 'react';
import { BlogPostCard, Pagination } from '../../molecules';
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
  postsPerPage?: number;
}

export const BlogPostsGrid = ({ posts, postsPerPage = 15 }: BlogPostsGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const visiblePosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="o-blog-posts-grid-wrapper">
      <div className="o-blog-posts-grid">
        {visiblePosts.map((post) => (
          <BlogPostCard
            key={post.id}
            id={post.id}
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

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};