import React from 'react';
import { Carousel } from 'react-bootstrap'; // Assuming you are using react-bootstrap for the carousel
import { FaStar } from 'react-icons/fa';
import '../styles.css';

const feedbacks = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    feedback: 'Great products! Fast shipping and excellent customer service.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    feedback: 'Quality is good, but the delivery was a bit delayed.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    rating: 5,
    feedback: 'Absolutely love my new shoes! Highly recommend this store.',
  },
  {
    id: 4,
    name: 'Michael Brown',
    rating: 4,
    feedback: 'Nice clothes, will buy again.',
  },
  {
    id: 5,
    name: 'Emily Davis',
    rating: 5,
    feedback: 'Fantastic quality and stylish designs!',
  },
  {
    id: 6,
    name: 'Chris Wilson',
    rating: 3,
    feedback: 'Good but not what I expected.',
  },
];

function Feedback() {
  return (
    <div className="feedback-container">
      <h2>Customer Feedback</h2>
      <Carousel>
        {Array.from({ length: Math.ceil(feedbacks.length / 3) }).map((_, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              {feedbacks.slice(index * 3, index * 3 + 3).map((feedback) => (
                <div className="col-12 col-md-4" key={feedback.id}>
                  <div className="feedback-card">
                    <h3>{feedback.name}</h3>
                    <p className="feedback-text">{feedback.feedback}</p>
                    <div className="rating">
                      {[...Array(5)].map((_, starIndex) => (
                        <FaStar key={starIndex} color={starIndex < feedback.rating ? 'gold' : 'lightgray'} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Feedback;
