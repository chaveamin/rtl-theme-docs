import React from "react";
import CodeBlock from "@theme-original/CodeBlock";

export default function CodeBlockWrapper(props) {
  const language =
    props.className?.replace("language-", "") ||
    props.metastring?.match(/language=(\w+)/)?.[1];

  return (
    <div style={{ position: "relative" }}>
      {language && (
        <span
          style={{
            position: "absolute",
            bottom: "8px",
            right: "12px",
            fontSize: "10px",
            fontWeight: "400",
            opacity: 0.6,
            textTransform: "uppercase",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 1,
            color: "#fff",
          }}
        >
          {language}
        </span>
      )}

      <CodeBlock {...props} />
    </div>
  );
}
