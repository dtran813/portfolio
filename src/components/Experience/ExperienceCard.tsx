import styles from './Experience.module.css';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface ExperienceCardProps {
  experience: Experience;
}

interface Experience {
  position: string;
  companyName: string;
  icon: string;
  date: string;
  points: string[];
}

const contentStyle = {
  background: 'var(--bg-secondary)',
  color: 'var(--text-primary)',
};

const contentArrowStyle = { borderRight: '8px solid var(--bg-secondary)' };

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <VerticalTimelineElement
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={experience.date}
      iconStyle={{ background: 'var(--text-secondary)' }}
      icon={
        <CompanyIcon
          icon={experience.icon}
          companyName={experience.companyName}
        />
      }
    >
      <h3 className={styles.positionText}>{experience.position}</h3>
      <h4 className={styles.companyNameText}>{experience.companyName}</h4>

      <ul className={styles.pointWrapper}>
        {experience.points.map((point: string, index: number) => (
          <li key={`experience-point-${index}`} className={styles.pointText}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

interface CompanyIconProps {
  icon: string;
  companyName: string;
}

function CompanyIcon({ icon, companyName }: CompanyIconProps) {
  return (
    <div className={styles.iconWrapper}>
      <img src={icon} alt={companyName} className={styles.icon} />
    </div>
  );
}
