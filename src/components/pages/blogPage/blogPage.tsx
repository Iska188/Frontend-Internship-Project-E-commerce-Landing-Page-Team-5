import { Header, Footer, BlogSidebar, BlogPostsGrid, BlogBanner, AboutBottomBanner } from '../../organisms';
import { BLOG_CATEGORIES_MOCK, BLOG_TRENDING_MOCK, BLOG_GALLERY_MOCK, BLOG_TAGS_MOCK } from '../../../mocks/blogSideBarMocks';
import { BLOG_POSTS_MOCK } from '../../../mocks/blogPostsMocks';
import './blogPage.css';

export const BlogPage = () => {
  return (
    <>
      <Header />

      <main className="p-blog-page">
        <div className="p-blog-page__header">
          <BlogBanner/>
        </div>

        <div className="p-blog-page__container">
          <div className="p-blog-page__posts">
            <BlogPostsGrid posts={BLOG_POSTS_MOCK} />
          </div>

          <BlogSidebar
            categories={BLOG_CATEGORIES_MOCK}
            trending={BLOG_TRENDING_MOCK}
            gallery={BLOG_GALLERY_MOCK}
            tags={BLOG_TAGS_MOCK}
          />
        </div>
      </main>

      <AboutBottomBanner />

      <Footer />
    </>
  );
};