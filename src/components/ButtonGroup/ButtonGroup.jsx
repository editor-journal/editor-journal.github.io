// @flow

import React from "react";
import ButtonGroupStyle from "./ButtonGroup.scss";
import Button from "../Button/Button";

const INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" }
];

const ButtonGroup = (props: {
  editorState: EditorState,
  onToggle: Function
}) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <ul className="button-group RichEditor-controls">
      {INLINE_STYLES.map(type => (
        <Button
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </ul>
  );
};

export default ButtonGroup;
