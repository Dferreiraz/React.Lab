import './style.css';

const statsData = [
  { icon: 'members.svg', value: '2,245,341', label: 'Members' },
  { icon: 'clubs.svg', value: '46,328', label: 'Clubs' },
  { icon: 'eventbookings.svg', value: '828,867', label: 'Event Bookings' },
  { icon: 'payments.svg', value: '1,926,436', label: 'Payments' }
];

export const Stats = () => {
  return (
    <section className="stats bg-silver section-padding">
      <div className="container stats-container">
        <div className="stats-text">
          <h2>Helping a local <br /> <span className="text-primary">business reinvent itself</span></h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <img src={`/src/assets/images/${stat.icon}`} alt={stat.label} />
              <div className="stat-info">
                <h4>{stat.value}</h4>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};