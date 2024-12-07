import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ title, description, image }) {
  return (
    <div className={styles.card}>
      <Image 
        src={image} 
        alt={title} 
        width={300} 
        height={200} 
        style={{ borderRadius: '4px' }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}