import React from 'react';
import './SectionTitle.css';

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = '',
}) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
      {centered && <div className="title-separator"></div>}
    </div>
  );
}