// pages/BlogPost.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const blogContent: Record<string, { title: string; content: string; date: string }> = {
  'why-every-small-business-needs-a-website': {
    title: 'Why Every Small Business Needs a Website',
    date: 'March 1, 2025',
    content: `In today’s digital-first world, having a website is no longer a luxury—it's a necessity. Whether you're a local service provider, a restaurant, or a startup, your website serves as your digital storefront.

Here’s why a website is essential for your business:

1. **Builds Credibility:** A professionally designed website gives your business legitimacy and helps customers trust you. Most consumers will research a business online before making a purchase or scheduling a service.

2. **Available 24/7:** Unlike a physical store, your website is always open. Potential clients can learn about your services, contact you, or even purchase online—at any time.

3. **Showcases Your Work:** A website gives you the opportunity to highlight your products, services, testimonials, and portfolio to demonstrate the quality and value you offer.

4. **Boosts Visibility:** With proper SEO, your website can appear in local and global search results, driving new traffic and customers to your business.

5. **Competitive Advantage:** Many small businesses still lack strong web presence. A well-built site gives you an edge in today’s competitive marketplace.

If you're looking to establish or upgrade your online presence, let Eagle Rock Design LLC help you build a website that truly represents your brand and vision.`
  },
  'tips-for-boosting-your-local-seo-in-2025': {
    title: 'Tips for Boosting Your Local SEO in 2025',
    date: 'March 15, 2025',
    content: `If you're a local business, showing up on search engines when someone types “plumber near me” or “best bakery in [Your City]” can be the difference between gaining or losing a customer.

Here are 5 actionable tips to improve your local SEO in 2025:

1. **Claim and Optimize Your Google Business Profile:** Fill out your profile completely, upload photos, choose the right business categories, and ensure your contact info is accurate.

2. **Get Customer Reviews:** Encourage happy customers to leave positive reviews. Reply to all reviews (even the negative ones) to show you're engaged and care about customer feedback.

3. **Use Location-Specific Keywords:** Include your city, neighborhood, or region in your page titles, headings, and content. For example: “Website Design in Evanston, WY”.

4. **Keep Your Name, Address, and Phone Number (NAP) Consistent:** Make sure your business info is identical across your website, directories, and social media profiles.

5. **Create Local Content:** Blog about local events, projects, partnerships, or news. This helps Google connect your site to your local area and builds community authority.

Investing in local SEO helps people nearby find and choose your business. At Eagle Rock Design LLC, we specialize in building websites and SEO strategies that help you stand out locally.`
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogContent[slug as string];

  if (!post) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" color="error">Post not found</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h3" gutterBottom>{post.title}</Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>{post.date}</Typography>
      <Typography variant="body1" paragraph style={{ whiteSpace: 'pre-line' }}>{post.content}</Typography>
    </Container>
  );
};

export default BlogPost;