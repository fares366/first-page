/* Brand.tsx */
import styles from './Verifiecode.module.css';

function Brand() {
  const brandContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '50px'
  };

  const logoCircle = {
    width: '35px',
    height: '35px',
    background: 'white',
    borderRadius: '50%'
  };

  return (
    <div style={brandContainer}>
      <div style={logoCircle}></div>
      <span className={styles.gradientText} style={{fontWeight: 900, fontSize: '24px', letterSpacing: '1px'}}>
        TRAJEKT
      </span>
    </div>
  );
}

export default Brand;