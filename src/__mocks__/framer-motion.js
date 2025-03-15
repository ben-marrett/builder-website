// Helper function to filter out framer-motion specific props
const filterMotionProps = (props) => {
  const {
    initial, animate, exit, transition, variants, whileHover, whileTap, whileInView, 
    viewport, drag, dragConstraints, dragElastic, dragMomentum, layoutId, layout,
    ...filteredProps
  } = props;
  return filteredProps;
};

module.exports = {
  motion: {
    div: ({ children, ...props }) => (
      <div data-testid="motion-div" {...filterMotionProps(props)}>{children}</div>
    ),
    h1: ({ children, ...props }) => (
      <h1 data-testid="motion-h1" {...filterMotionProps(props)}>{children}</h1>
    ),
    p: ({ children, ...props }) => (
      <p data-testid="motion-p" {...filterMotionProps(props)}>{children}</p>
    ),
    section: ({ children, ...props }) => (
      <section data-testid="motion-section" {...filterMotionProps(props)}>{children}</section>
    ),
    span: ({ children, ...props }) => (
      <span data-testid="motion-span" {...filterMotionProps(props)}>{children}</span>
    ),
    button: ({ children, ...props }) => (
      <button data-testid="motion-button" {...filterMotionProps(props)}>{children}</button>
    ),
  },
  AnimatePresence: ({ children }) => children,
}; 