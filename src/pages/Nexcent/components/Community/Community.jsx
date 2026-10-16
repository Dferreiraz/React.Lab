import './style.css';

const communityData = [
  {
    icon: 'Icon.svg',
    title: 'Membership Organisations',
    desc: 'Our membership management software provides full automation of membership renewals and payments'
  },
  {
    icon: 'Icon(1).svg',
    title: 'National Associations',
    desc: 'Our membership management software provides full automation of membership renewals and payments'
  },
  {
    icon: 'Icon(2).svg',
    title: 'Clubs And Groups',
    desc: 'Our membership management software provides full automation of membership renewals and payments'
  }
];

export const Community = () => {
  return (
    <section className="community section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2>Manage your entire community <br /> in a single system</h2>
          <p>Who is Nextcent suitable for?</p>
        </div>
        <div className="community-cards">
          {communityData.map((item, index) => (
            <div key={index} className="card">
              <div className="card-icon">
                <img src={`/src/assets/images/${item.icon}`} alt="Icon" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};