import React, { useState } from 'react';
import { Button, Input } from '../../atoms';
import type { ReviewItem } from '../../../mocks/productDetailsMock';
import './productTabs.css';

interface DescriptionData {
  paragraphs: string[];
  keySpecs: { label: string; value: string }[];
  bodyAfterSpecs: string[];
  packaging: string[];
  suggestedUse: string[];
  otherIngredients: string[];
  warnings: string[];
}

interface VendorData {
  name: string;
  rating: number;
  reviewsCount: number;
  address: string;
  phone: string;
  description: string;
}

interface ProductTabsProps {
  description: DescriptionData;
  additionalInfo: { label: string; value: string }[];
  vendor: VendorData;
  initialReviews: ReviewItem[];
}

export const ProductTabs: React.FC<ProductTabsProps> = ({
  description,
  additionalInfo,
  vendor,
  initialReviews,
}) => {
  const [activeTab, setActiveTab] = useState<'description' | 'additional' | 'vendor' | 'reviews'>('description');
  const [reviews, setReviews] = useState<ReviewItem[]>(initialReviews);

  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [authorComment, setAuthorComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !authorComment.trim()) return;

    const newReview: ReviewItem = {
      id: Date.now(),
      name: authorName,
      avatar: 'src/assets/blog/posts/post1.png',
      date: 'Just now',
      rating: newRating,
      comment: authorComment,
    };

    setReviews([newReview, ...reviews]);
    setAuthorName('');
    setAuthorEmail('');
    setAuthorComment('');
    setReviewSubmitted(true);
    setTimeout(() => setReviewSubmitted(false), 3000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`m-product-tabs__star ${i < rating ? 'm-product-tabs__star--filled' : 'm-product-tabs__star--empty'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="m-product-tabs">
      <div className="m-product-tabs__nav">
        <Button
          variant="tab"
          isActive={activeTab === 'description'}
          onClick={() => setActiveTab('description')}
        >
          Description
        </Button>
        <Button
          variant="tab"
          isActive={activeTab === 'additional'}
          onClick={() => setActiveTab('additional')}
        >
          Additional info
        </Button>
        <Button
          variant="tab"
          isActive={activeTab === 'vendor'}
          onClick={() => setActiveTab('vendor')}
        >
          Vendor
        </Button>
        <Button
          variant="tab"
          isActive={activeTab === 'reviews'}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews ({reviews.length})
        </Button>
      </div>

      <div className="m-product-tabs__content-box">
        {activeTab === 'description' && (
          <div className="m-product-tabs__pane m-product-tabs__pane--description">
            {description.paragraphs.map((p, idx) => (
              <p key={idx} className="m-product-tabs__paragraph">
                {p}
              </p>
            ))}

            {description.keySpecs && description.keySpecs.length > 0 && (
              <ul className="m-product-tabs__specs-list">
                {description.keySpecs.map((spec, idx) => (
                  <li key={idx} className="m-product-tabs__spec-bullet">
                    <span className="m-product-tabs__bullet-dot">•</span>
                    <strong>{spec.label}:</strong> {spec.value}
                  </li>
                ))}
              </ul>
            )}

            {description.bodyAfterSpecs &&
              description.bodyAfterSpecs.map((p, idx) => (
                <p key={idx} className="m-product-tabs__paragraph">
                  {p}
                </p>
              ))}

            <h3 className="m-product-tabs__section-title">Packaging & Delivery</h3>
            {description.packaging &&
              description.packaging.map((p, idx) => (
                <p key={idx} className="m-product-tabs__paragraph">
                  {p}
                </p>
              ))}

            <h3 className="m-product-tabs__section-title">Suggested Use</h3>
            {description.suggestedUse &&
              description.suggestedUse.map((p, idx) => (
                <p key={idx} className="m-product-tabs__sub-text">
                  {p}
                </p>
              ))}

            <h3 className="m-product-tabs__section-title">Other Ingredients</h3>
            {description.otherIngredients &&
              description.otherIngredients.map((p, idx) => (
                <p key={idx} className="m-product-tabs__sub-text">
                  {p}
                </p>
              ))}

            <h3 className="m-product-tabs__section-title">Warnings</h3>
            {description.warnings &&
              description.warnings.map((p, idx) => (
                <p key={idx} className="m-product-tabs__sub-text">
                  {p}
                </p>
              ))}
          </div>
        )}

        {activeTab === 'additional' && (
          <div className="m-product-tabs__pane m-product-tabs__pane--additional">
            <table className="m-product-tabs__table">
              <tbody>
                {additionalInfo.map((row, idx) => (
                  <tr key={idx} className="m-product-tabs__tr">
                    <td className="m-product-tabs__td m-product-tabs__td--label">{row.label}</td>
                    <td className="m-product-tabs__td m-product-tabs__td--value">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'vendor' && (
          <div className="m-product-tabs__pane m-product-tabs__pane--vendor">
            <div className="m-product-tabs__vendor-header">
              <div className="m-product-tabs__vendor-title-group">
                <h3 className="m-product-tabs__vendor-name">{vendor.name}</h3>
                <div className="m-product-tabs__vendor-rating">
                  {renderStars(Math.round(vendor.rating))}
                  <span>({vendor.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>
            <p className="m-product-tabs__vendor-desc">{vendor.description}</p>
            <div className="m-product-tabs__vendor-meta">
              <div>
                <strong>Address:</strong> {vendor.address}
              </div>
              <div>
                <strong>Contact:</strong> {vendor.phone}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="m-product-tabs__pane m-product-tabs__pane--reviews">
            <div className="m-product-tabs__reviews-list">
              <h3 className="m-product-tabs__section-title">Customer questions & answers</h3>
              {reviews.map((rev) => (
                <div key={rev.id} className="m-product-tabs__review-item">
                  <img src={rev.avatar} alt={rev.name} className="m-product-tabs__review-avatar" />
                  <div className="m-product-tabs__review-body">
                    <div className="m-product-tabs__review-header">
                      <h4 className="m-product-tabs__review-author">{rev.name}</h4>
                      <span className="m-product-tabs__review-date">{rev.date}</span>
                      <div className="m-product-tabs__review-stars">{renderStars(rev.rating)}</div>
                    </div>
                    <p className="m-product-tabs__review-comment">{rev.comment}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="m-product-tabs__review-form-wrap">
              <h3 className="m-product-tabs__section-title">Add a review</h3>
              {reviewSubmitted && (
                <div className="m-product-tabs__form-success">
                  ✓ Thank you! Your review has been submitted.
                </div>
              )}
              <form onSubmit={handleReviewSubmit} className="m-product-tabs__form">
                <div className="m-product-tabs__form-rating-picker">
                  <span className="m-product-tabs__form-label">Your Rating:</span>
                  <div className="m-product-tabs__stars-picker">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        className={`m-product-tabs__star-btn ${star <= newRating ? 'm-product-tabs__star-btn--active' : ''}`}
                        onClick={() => setNewRating(star)}
                        aria-label={`${star} star`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div className="m-product-tabs__form-field">
                  <textarea
                    className="m-product-tabs__textarea"
                    placeholder="Write your review here..."
                    rows={4}
                    value={authorComment}
                    onChange={(e) => setAuthorComment(e.target.value)}
                    required
                  />
                </div>

                <div className="m-product-tabs__form-row">
                  <Input
                    placeholder="Your Name"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={authorEmail}
                    onChange={(e) => setAuthorEmail(e.target.value)}
                  />
                </div>

                <Button variant="primary" type="submit" className="m-product-tabs__submit-btn">
                  Submit Review
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
