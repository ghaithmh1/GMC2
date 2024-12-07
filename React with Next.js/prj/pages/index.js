import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Image 
          src="/images/profile.jpg" 
          alt="Profile Picture" 
          width={150} 
          height={150} 
          style={{ borderRadius: '50%' }}
        />
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a full-stack developer specializing in Next.js and React.</p>
        <Link href="/projects">See My Projects</Link>
      </div>
    </div>
  );
}
