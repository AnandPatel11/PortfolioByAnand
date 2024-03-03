import React from 'react';

const experiences = [
  {
    title: 'API Automation Intern',
    period: 'Jan 2024 – Present',
    company: 'Markham Group',
    details: 'Collaborated in QuickBase development and engineered AI solutions.',
    image: '/path/to/image1.jpg', // Replace with your image paths
  },
  {
    title: 'Web Developer Intern',
    period: 'Jul 2023 – Nov 2023',
    company: 'Sayap Africa',
    details: 'Revamped WordPress website, boosting user engagement.',
    image: '/path/to/image2.jpg',
  },
  // ...add other experiences
];

export default function ExperiencesPage() {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <img src={exp.image} alt={exp.title} className="timeline-image" />
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <p>{exp.period}</p>
              <p>{exp.company}</p>
              <p>{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
