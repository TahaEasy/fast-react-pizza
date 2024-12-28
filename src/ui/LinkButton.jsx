import { Link, useNavigate } from "react-router-dom";

const LinkButton = ({ children, className = "", to }) => {
  const navigate = useNavigate();
  const buttonClassNames = `text-sm text-blue-500 hover:text-blue-700 hover:underline ${className}`;
  if (to === -1)
    return (
      <button onClick={() => navigate(-1)} className={buttonClassNames}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={buttonClassNames}>
      {children}
    </Link>
  );
};

export default LinkButton;
