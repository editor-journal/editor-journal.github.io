// @flow

import React, { Component } from "react";
import { Editor } from "draft-js";
import EditorStyle from "./Editor.scss";

class EditorContent extends Component {
  props: {
    editorState: EditorState,
    onChange: Function,
    focus: Function
  };

  componentDidMount() {
    this.refs.editor.focus();
  }

  render() {
    return (
      <div onClick={this.focus}>
        <Editor
          ref="editor"
          spellCheck={true}
          editorState={this.props.editorState}
          onChange={this.props.onChange}
          placeholder="Start writing ... "
        />
      </div>
    );
  }
}

export default EditorContent;
