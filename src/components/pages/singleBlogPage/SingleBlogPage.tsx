import { useState, useEffect } from 'react';
import { Header, Footer, BlogSidebar, BottomBanner } from '../../organisms';
import { Breadcrumb } from '../../molecules';
import { BLOG_CATEGORIES_MOCK, BLOG_TRENDING_MOCK, BLOG_GALLERY_MOCK, BLOG_TAGS_MOCK } from '../../../mocks/blogSideBarMocks';
import { BLOG_POSTS_MOCK } from '../../../mocks/blogPostsMocks';
import { useWishlist } from '../../../context/wishlistContext';
import { TRANSLATIONS } from '../../../constants/translations';
import bigHeroImg from '../../../assets/blog/singlepost/big.jpg';
import smallDownImg from '../../../assets/blog/singlepost/smalldown.jpg';
import member1Img from '../../../assets/about/ourTeam/member1.png';
import member2Img from '../../../assets/about/ourTeam/member2.png';
import facebookIcon from '../../../assets/about/ourTeam/facebook.svg';
import twitterIcon from '../../../assets/about/ourTeam/twitter.svg';
import instagramIcon from '../../../assets/about/ourTeam/instagram.svg';
import youtubeIcon from '../../../assets/about/ourTeam/youtube.svg';
import './singleBlogPage.css';

interface Comment {
  id: string;
  name: string;
  avatar: string;
  date: string;
  text: string;
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'c1',
    name: 'Sienna',
    avatar: member1Img,
    date: 'December 4, 2022 at 3:12 pm',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
  },
  {
    id: 'c2',
    name: 'Brenna',
    avatar: member2Img,
    date: 'December 4, 2022 at 3:12 pm',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
  },
  {
    id: 'c3',
    name: 'Gemma',
    avatar: member1Img,
    date: 'December 4, 2022 at 3:12 pm',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
  },
];

export const SingleBlogPage = () => {
  const getPostIdFromHash = () => {
    const hash = window.location.hash;
    if (hash.includes('?')) {
      const queryString = hash.split('?')[1];
      const params = new URLSearchParams(queryString);
      return params.get('id') || undefined;
    }
    return undefined;
  };

  const [postId, setPostId] = useState<string | undefined>(getPostIdFromHash);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [newCommentText, setNewCommentText] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newWebsite, setNewWebsite] = useState('');
  const [formSubmittedToast, setFormSubmittedToast] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      setPostId(getPostIdFromHash());
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const currentPost = BLOG_POSTS_MOCK.find((p) => p.id === postId) || {
    id: 'healthy-food-guide',
    imageSrc: bigHeroImg,
    badge: 'New',
    category: 'Recipes',
    title: 'Best smartwatch 2022: the top wearables you can buy today',
    date: '25 April 2022',
    views: '126k',
    readTime: '8 mins read',
  };

  const isPostWishlisted = isInWishlist(currentPost.id);

  const handleToggleLike = () => {
    if (hasLiked || isPostWishlisted) {
      setHasLiked(false);
      removeFromWishlist(currentPost.id);
    } else {
      setHasLiked(true);
      addToWishlist({
        id: currentPost.id,
        title: currentPost.title,
        price: 0,
        image: bigHeroImg,
        category: currentPost.category,
        vendor: 'Sugar Rosie',
      });
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim() || !newName.trim()) return;

    const newComment: Comment = {
      id: `c-${Date.now()}`,
      name: newName,
      avatar: member1Img,
      date: 'Just now',
      text: newCommentText,
    };

    setComments((prev) => [newComment, ...prev]);
    setNewCommentText('');
    setNewName('');
    setNewEmail('');
    setNewWebsite('');
    setFormSubmittedToast(true);
    setTimeout(() => setFormSubmittedToast(false), 3000);
  };

  return (
    <div className="p-single-blog-page">
      <Header currentPage="blog" />

      <div className="p-single-blog__breadcrumb-wrapper">
        <Breadcrumb
          items={[
            { label: 'Home', href: '#/' },
            { label: 'Recipes', href: '#/blog' },
            { label: 'Best Smartwatch 2022: The Top Wearables You Can Buy Today' },
          ]}
        />
      </div>

      <main className="p-single-blog__container">
        <article className="p-single-blog__content">
          <div className="p-single-blog__header">
            <span className="p-single-blog__category-label">Recipes</span>
            <h1 className="p-single-blog__main-title">
              Best smartwatch 2022: the top wearables you can buy today
            </h1>

            <div className="p-single-blog__meta-bar">
              <div className="p-single-blog__author-group">
                <img
                  src={member1Img}
                  alt="Sugar Rosie"
                  className="p-single-blog__author-avatar"
                />
                <span className="p-single-blog__author-name">By Sugar Rosie</span>
                <span className="p-single-blog__meta-dot">•</span>
                <span className="p-single-blog__meta-time">2 hours ago</span>
                <span className="p-single-blog__meta-dot">•</span>
                <span className="p-single-blog__meta-duration">8 mins read</span>
              </div>

              <div className="p-single-blog__action-buttons">
                <button
                  type="button"
                  className={`p-single-blog__action-btn ${isBookmarked ? 'p-single-blog__action-btn--active' : ''}`}
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  title="Bookmark"
                  aria-label="Bookmark post"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill={isBookmarked ? 'var(--color-primary)' : 'none'} stroke="currentColor" strokeWidth="1.8">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className={`p-single-blog__action-btn ${(hasLiked || isPostWishlisted) ? 'p-single-blog__action-btn--liked' : ''}`}
                  onClick={handleToggleLike}
                  title="Like / Wishlist"
                  aria-label="Like post"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill={(hasLiked || isPostWishlisted) ? '#f74b81' : 'none'}
                    stroke={(hasLiked || isPostWishlisted) ? '#f74b81' : 'currentColor'}
                    strokeWidth="1.8"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="p-single-blog__hero-media">
            <img
              src={bigHeroImg}
              alt="Best smartwatch 2022"
              className="p-single-blog__hero-img"
            />
          </div>

          <div className="p-single-blog__body">
            <p className="p-single-blog__lead-paragraph">
              Helping everyone live happier, healthier lives at home through their kitchen. Kitchn is a daily food magazine on the Web celebrating life in the kitchen through home cooking and kitchen intelligence.
            </p>

            <p>
              We've reviewed and ranked all of the best smartwatches on the market right now, and we've made a definitive list of the top 10 devices you can buy today. One of the 10 picks below may just be your perfect next smartwatch.
            </p>

            <p>
              Those top-end wearables span from the Apple Watch to Fitbits, Garmin watches to Tizen-sporting Samsung watches. There's also Wear OS which is Google's own wearable operating system in the vein of Apple's watchOS - you'll see it show up in a lot of these devices.
            </p>

            <h2 className="p-single-blog__section-title">Lorem ipsum dolor sit amet cons</h2>

            <p>
              Throughout our review process, we look at the design, features, battery life, spec, price and more for each smartwatch, rank it against the competition and enter it into the list you'll find below.
            </p>

            <div className="p-single-blog__mid-media">
              <img
                src={smallDownImg}
                alt="Fresh organic cooking"
                className="p-single-blog__mid-img"
              />
            </div>

            <p>
              Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque ullamcorper eu neque. Augue quam quis lacus pretium eros est amet turpis nunc in turpis massa et eget facilisis ante molestie penatibus dolor volutpat, porta pellentesque scelerisque at ornare dui tincidunt cras feugiat tempor lectus.
            </p>

            <div className="p-single-blog__blockquote-box">
              <p>
                Integer eu faucibus <span className="p-single-blog__quote-highlight">dolor<sup>[5]</sup></span>. Ut venenatis tincidunt diam elementum imperdiet. Etiam accumsan semper nisl eu congue. Sed aliquam magna erat, ac eleifend lacus rhoncus in.
              </p>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras elementum libero convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec sed sed. Tincidunt morbi scelerisque lectus non. At leo mauris, vel augue. Facilisi diam consequat amet, commodo lorem nisl, odio malesuada cras. Tempus lectus sed libero viverra ut. Facilisi rhoncus elit sit sit.
            </p>
          </div>

          <div className="p-single-blog__footer-tags-share">
            <div className="p-single-blog__tags-list">
              <span className="p-single-blog__tag-solid">deer</span>
              <span className="p-single-blog__tag-solid">nature</span>
              <span className="p-single-blog__tag-solid">conserve</span>
            </div>

            <div className="p-single-blog__share-box">
              <span className="p-single-blog__share-label">Share this:</span>
              <div className="p-single-blog__share-icons">
                <a href="#/" className="p-single-blog__share-link" aria-label="Share on Facebook">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="#/" className="p-single-blog__share-link" aria-label="Share on Twitter">
                  <img src={twitterIcon} alt="Twitter" />
                </a>
                <a href="#/" className="p-single-blog__share-link" aria-label="Share on Instagram">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="#/" className="p-single-blog__share-link" aria-label="Share on YouTube">
                  <img src={youtubeIcon} alt="YouTube" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-single-blog__author-box">
            <img
              src={member2Img}
              alt="Barbara Cartland"
              className="p-single-blog__author-box-avatar"
            />
            <div className="p-single-blog__author-box-details">
              <h4 className="p-single-blog__author-box-name">Barbara Cartland</h4>
              <span className="p-single-blog__author-box-meta">306 posts • Since 2012</span>
              <p className="p-single-blog__author-box-bio">
                Hi there, I am a veteran food blogger sharing my daily all kinds of healthy and fresh recipes. I find inspiration in nature, on the streets and almost everywhere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras elementum libero
              </p>
            </div>
          </div>

          <section className="p-single-blog__comment-form-section">
            <div className="p-single-blog__comment-form-header">
              <h3 className="p-single-blog__comment-form-title">Leave a Comment</h3>
              <span className="p-single-blog__comment-form-count">★</span>
            </div>

            {formSubmittedToast && (
              <div className="p-single-blog__comment-toast">
                ✓ {TRANSLATIONS.singleBlogPage.commentSuccess}
              </div>
            )}

            <form onSubmit={handleCommentSubmit} className="p-single-blog__form">
              <div className="p-single-blog__form-group">
                <textarea
                  className="p-single-blog__textarea"
                  placeholder="Write Comment"
                  rows={6}
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  required
                />
              </div>

              <div className="p-single-blog__form-row">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-single-blog__input"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-single-blog__input"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>

              <div className="p-single-blog__form-group">
                <input
                  type="text"
                  placeholder="Website"
                  className="p-single-blog__input"
                  value={newWebsite}
                  onChange={(e) => setNewWebsite(e.target.value)}
                />
              </div>

              <button type="submit" className="p-single-blog__submit-btn">
                Post Comment
              </button>
            </form>
          </section>

          <section className="p-single-blog__comments-list-section">
            <h3 className="p-single-blog__comments-heading">Comments</h3>
            <div className="p-single-blog__comments-list">
              {comments.map((comment) => (
                <div key={comment.id} className="p-single-blog__comment-card">
                  <div className="p-single-blog__comment-author-info">
                    <img
                      src={comment.avatar}
                      alt={comment.name}
                      className="p-single-blog__comment-avatar"
                    />
                    <h5 className="p-single-blog__comment-name">{comment.name}</h5>
                  </div>
                  <div className="p-single-blog__comment-content">
                    <div className="p-single-blog__comment-meta">
                      <span className="p-single-blog__comment-date">{comment.date}</span>
                      <span className="p-single-blog__comment-star">★</span>
                    </div>
                    <p className="p-single-blog__comment-text">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        <aside className="p-single-blog__sidebar">
          <BlogSidebar
            categories={BLOG_CATEGORIES_MOCK}
            trending={BLOG_TRENDING_MOCK}
            gallery={BLOG_GALLERY_MOCK}
            tags={BLOG_TAGS_MOCK}
          />
        </aside>
      </main>

      <BottomBanner />
      <Footer />
    </div>
  );
};
