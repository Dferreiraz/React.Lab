import './style.css';

import membersIcon from '../../assets/images/members.svg';
import clubsIcon from '../../assets/images/clubs.svg';
import eventbookingsIcon from '../../assets/images/eventbookings.svg';
import paymentsIcon from '../../assets/images/payments.svg';

const statsData = [
  { icon: membersIcon, value: '2,245,341', label: 'Members' },
  { icon: clubsIcon, value: '46,328', label: 'Clubs' },
  { icon: eventbookingsIcon, value: '828,867', label: 'Event Bookings' },
  { icon: paymentsIcon, value: '1,926,436', label: 'Payments' }
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
              <img src={stat.icon} alt={stat.label} />
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