import React from 'react';
import MovingElements from './MovingElements';

function Home() {
  return (
    <div>
      <MovingElements />
      <section>
        <h3>Your Marketing, Our Expertise</h3>
        <p>
          Eagle Rock Design LLC specializes in providing small businesses with powerful and affordable marketing solutions. 
          From custom website designs to effective SEO strategies, we help you create a lasting online presence that drives growth and increases engagement.
        </p>
      </section>
      <section>
        <h3>Why Choose Us?</h3>
        <p>
          With years of experience in web development and digital marketing, our team understands the unique challenges faced by small businesses. 
          We work closely with you to develop marketing strategies that not only align with your goals but also deliver measurable results.
        </p>
      </section>
      <section>
        <h3>Our Commitment</h3>
        <p>
          At Eagle Rock Design LLC, we’re committed to transparency, affordability, and success. We believe every business deserves a strong digital presence, and we're here to make that happen.
        </p>
      </section>
    </div>
  );
}

export default Home;
