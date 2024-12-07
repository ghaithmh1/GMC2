export default function Footer() {
    return (
      <footer style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #ddd', marginTop: '2rem' }}>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    );
  }