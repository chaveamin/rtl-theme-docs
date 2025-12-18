import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

// Define your custom admonition types
const admonitionTypes = {
  success: {
    label: "rtnote",
    icon: "📝",
    className: "rtnote",
  },
  error: {
    label: "rtwarn",
    icon: "⚠️",
    className: "rtwarn",
  },
  question: {
    label: "rterror",
    icon: "💀",
    className: "rterror",
  },
};

export default function Admonition({ children, type = "custom", title }) {
  const config = admonitionTypes[type] || admonitionTypes.custom;

  return (
    <div className={clsx(styles.admonition, styles[config.className])}>
      <div className={styles.admonitionHeading}>
        <span className={styles.admonitionIcon}>{config.icon}</span>
        <span className={styles.admonitionTitle}>{title || config.label}</span>
      </div>
      <div className={styles.admonitionContent}>{children}</div>
    </div>
  );
}
