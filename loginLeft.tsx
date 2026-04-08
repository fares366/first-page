import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

import styles from "./loginleft.module.css"; 

function LoginLeft() {
  const [part1Text, setPart1Text] = useState("");
  const [part2Text, setPart2Text] = useState("");
  const [gradText, setGradText] = useState("");

  useEffect(() => {
    const part1 = "Welcome";
    const part2 = "back to your";
    const partGrad = "career journey";

    async function typeSentence(text: string, setText: Dispatch<SetStateAction<string>>, delay: number = 100) {
      for (let i = 0; i < text.length; i++) {
        setText(prev => prev + text.charAt(i));
        await new Promise(r => setTimeout(r, delay));
      }
    }

    async function startAnimation() {
      await typeSentence(part1, setPart1Text, 100);
      await typeSentence(part2, setPart2Text, 80);
      await typeSentence(partGrad, setGradText, 120);
    }

    const timeout = setTimeout(startAnimation, 500);
    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div className={styles["login-left"]}> {/* استخدام styles["name"] للأسماء التي تحتوي على شرطة */}
      <div className={styles.brand}>
        <div className={styles["logo-circle"]}></div>
        <span className={styles["brand-name"]}>Traject</span>
      </div>

      <h1 className={styles["welcome-text"]}>
        <span>{part1Text}</span><br/>
        <span>{part2Text}</span><br/>
        <span className={styles["gradient-text"]}>{gradText}</span>
        <span className={styles.cursor}>|</span>
      </h1>
    </div>
  );
}

export default LoginLeft;