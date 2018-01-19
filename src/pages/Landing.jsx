// @flow

import React, { Component } from "react";
import { EditorState, RichUtils } from "draft-js";
import WordCount from "wordcount";
import LandingStyle from "./Landing.scss";
import ReactP5 from "../models/ReactP5";
import Borders from "../components/Border/Border";
import Frames from "../components/Frame/Frame";
import Date from "../components/Date/Date";
import Editor from "../components/Editor/Editor";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";
import Sketch from "../components/Sketch/Sketch";

class Landing extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    isHidden: false,
    stateSketch: Sketch
  };

  handleChange = (editorState: EditorState) => {
    this.setState({ editorState });
  };

  handleToggle = (inlineStyle: KeyboardEvent) => {
    this.handleChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  };

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  wordCount = (limit: number) =>
    limit -
    WordCount(this.state.editorState.getCurrentContent().getPlainText());

  render() {
    return (
      <div>
        <div className="toolbar-container">
          <div
            className={this.state.isHidden ? "toolbar" : "toolbar active"}
            onClick={this.toggleHidden}
          >
            +
          </div>
          {!this.state.isHidden &&
            <ButtonGroup
              editorState={this.state.editorState}
              onToggle={this.handleToggle}
            />}
        </div>
        <Borders />
        <Frames />
        <Date />
        <div className="editor-container">
          <Editor
            editorState={this.state.editorState}
            onChange={this.handleChange}
          />
        </div>
        {
          <ReactP5
            sketch={this.state.stateSketch}
            wordCount={this.wordCount(750)}
          />
        }
      </div>
    );
  }
}
export default Landing;
