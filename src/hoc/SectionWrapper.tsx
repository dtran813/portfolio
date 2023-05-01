import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const style = {
  minHeight: '100vh',
  margin: '0 auto',
  marginTop: '1px', // to enable  initial="hidden" on section
  maxWidth: '80rem', // 1280px
};

const SectionWrapper = (Component: React.ElementType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer()}
        className="sectionWrapperPadding"
        style={style}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
