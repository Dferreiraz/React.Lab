import './style.css';
import Blog1 from '../../assets/images/blog-safeguarding.svg';
import Blog2 from '../../assets/images/blog-responsibilities.svg';
import Blog3 from '../../assets/images/blog-triathlon.svg';

const blogPosts = [
  {
    image: Blog1,
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    link: '#blog1'
  },
  {
    image: Blog2,
    title: 'What are your safeguarding responsibilities and how can you manage them?',
    link: '#blog2'
  },
  {
    image: Blog3,
    title: 'Revamping the Membership Model with Triathlon Australia',
    link: '#blog3'
  }
];

export const Blog = () => {
  return (
    <section className="blog section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2>Caring is the new marketing</h2>
          <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
        </div>
        <div className="blog-cards">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-img" />
              <div className="blog-content">
                <h4>{post.title}</h4>
                <a href={post.link} className="read-more">
                  Readmore <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};