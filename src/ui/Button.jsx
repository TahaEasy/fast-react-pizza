import { Link } from "react-router-dom";

const Button = ({
  children,
  className = "",
  type = "primary",
  disabled,
  to,
  onClick,
}) => {
  const base = `inline-block bg-yellow-400 tracking-wide uppercase font-semibold text-sm text-stone-800 rounded-full hover:bg-yellow-300 transition-colors duration-200 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 active:bg-yellow-500 active:ring-yellow-300 active:ring-offset-2 disabled:cursor-not-allowed disabled:hover:bg-yellow-400 ${className}`;

  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-5 py-2 md:px-6 md:py-2.5 text-xs",
    round: base + " px-3.5 py-2 text-sm",
    secondary: `inline-block px-4 py-2.5 sm:px-6 sm:py-3.5 border-2 border-stone-500 tracking-wide uppercase font-semibold text-sm text-stone-400 rounded-full hover:bg-stone-300 hover:text-stone-800 hover:ring hover:ring-stone-200 transition-colors duration-200 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:text-stone-800 focus:ring-offset-2 active:bg-yellow-500 active:ring-yellow-300 active:ring-offset-2 disabled:cursor-not-allowed disabled:hover:bg-yellow-400 ${className}`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
