import React from "react";
import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div className={styles.errorMessage}>
      {message}
    </div>
  );
};
 export default ErrorMessage;