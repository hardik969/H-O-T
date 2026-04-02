import { useState } from "react";
import "./Reviews.css";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const reviewsData = [
  {
    id: 1,
    name: "VIKRAM KHANNA",
    text: "House of Thrill is on another level. The industrial vibe combined with the luxury service made our corporate team-building event the talk of the office for weeks. The axe throwing lanes are premium and the atmosphere is electric.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/14072170/pexels-photo-14072170.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Guests celebrating inside an axe throwing lane",
  },
  {
    id: 2,
    name: "SARAH JENKINS",
    text: "I hosted my kitty party here and it was the best decision ever. We traded tea for adrenaline. The staff was incredibly helpful, and the Chamber of the Heart escape room was challenging yet so much fun!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/29483111/pexels-photo-29483111.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Hands solving an escape room puzzle with timer and lock props",
  },
  {
    id: 3,
    name: "ARJUN MEHTA",
    text: "Finally, a place that gets the Luxury Adrenaline concept right. The forged steel decor and the dark, moody lighting set the perfect stage for a competitive night out with the boys. Bragging rights were claimed!",
    rating: 5,
    image:
      "https://source.unsplash.com/1400x1800/?industrial,neon,interior,dark&sig=303",
    alt: "Dark industrial interior with neon lighting",
  },
  {
    id: 4,
    name: "PRIYA SHARMA",
    text: "Unbelievable experience. We tried the VR arena and the Archery. Everything feels high-end, from the equipment to the lounge area. It's the perfect mix of raw excitement and sophisticated design.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/34987121/pexels-photo-34987121.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Group experiencing virtual reality indoors",
  },
  {
    id: 5,
    name: "MARCUS REED",
    text: "The best adrenaline venue I've visited globally. The attention to detail in the industrial design is stunning. It's not just a game center; it's an experience. Will be coming back for the RC battles next!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/14041255/pexels-photo-14041255.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Guest holding an axe in a premium indoor throwing facility",
  },
];

export default function Reviews() {
  const [activeTab, setActiveTab] = useState(0);
  const activeReview = reviewsData[activeTab];

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-container">
        <div className="reviews-image-side">
          <div className="review-image-frame" key={activeReview.id}>
            <img
              src={activeReview.image}
              alt={activeReview.alt}
              className="main-review-img"
            />
            <div className="review-image-overlay" />
          </div>
        </div>

        <div className="reviews-content-side">
          <header className="reviews-header">
            <p className="reviews-eyebrow">Testimonials</p>
            <h2 className="reviews-heading">
              Don't Take <span className="dimmed">Our Word for it.</span>
            </h2>
          </header>

          <div className="reviews-navigation">
            {reviewsData.map((review, index) => (
              <button
                key={review.id}
                className={`nav-circle ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
                aria-label={`Show review ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="review-body" key={activeReview.id}>
            <FaQuoteRight className="quote-icon" />
            <div className="review-copy-anim">
              <p className="review-text">"{activeReview.text}"</p>

              <div className="review-footer">
                <span className="author-name">{activeReview.name}</span>
                <span className="divider">/</span>
                <div className="star-rating">
                  {[...Array(activeReview.rating)].map((_, index) => (
                    <FaStar key={index} className="star-icon" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
