import "./Button.css";

export const Button = ({ title, addClassName }) => {
  const combinedClassName = `button ${addClassName || ""}`;

  return <button className={combinedClassName}>{title}</button>;
};
