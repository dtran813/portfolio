import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  const animation = {
    animate: {
      opacity: [0, 0.5, 1],
      y: [-25, 0],
    },
    transition: {
      duration: 0.5,
    },
  };
  return (
    <section id="hero" className={styles.heroWrapper}>
      <motion.p
        animate={animation.animate}
        transition={animation.transition}
        className={styles.mdText}
      >
        Hi, my name is &nbsp;
      </motion.p>
      <div>
        <h1
          className={styles.name}
          role="heading"
          aria-label="Hoa Tran."
          aria-level={1}
        >
          <SplitText text={"Hoa Tran."} />
        </h1>
      </div>
      <motion.p
        animate={animation.animate}
        transition={animation.transition}
        className={styles.lgText}
      >
        I enjoy discovering the beauty of the web.
      </motion.p>
      <motion.p
        animate={animation.animate}
        transition={animation.transition}
        className={styles.lgText}
      >
        Join me on this journey to make the digital world better.
      </motion.p>

      <a href="#contact" className={styles.btn}>
        Contact Me
      </a>
    </section>
  );
}

interface Props {
  text: string;
}

function SplitText({ text }: Props) {
  return (
    <span>
      {text.split("").map((char, index) => {
        return (
          <motion.span
            key={index}
            aria-hidden={true}
            animate={{
              opacity: [0, 1, 1],
              y: [25, -25, 0],
            }}
            transition={{
              duration: 0.75,
              delay: 0.5 + index / 10,
            }}
            style={{
              display: char === " " ? "inline" : "inline-block",
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
}
