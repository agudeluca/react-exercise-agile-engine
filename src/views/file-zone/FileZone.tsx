import React, { Component } from 'react';
import './FileZone.css';
import fileZone from 'constants/fileZone';
import RichTextEditor from 'react-rte';


interface Props {
  similarWords: [],
  onChange?: Function,
  getSimilarWorlds: Function,
}
interface State { value: any, selectedWorld?: string }

class FileZone extends Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      value: RichTextEditor.createValueFromString(fileZone.MOCK_TEXT, fileZone.FORMAT_HTML),
    };
  }

  onChange = (value: any) => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(
        value.toString(fileZone.FORMAT_HTML)
      );
    }
  };
  handleDoubleClick = () => {
    const selection = window.getSelection()!.toString();
    this.setState({ selectedWorld: selection });
    selection && this.props.getSimilarWorlds(selection);
  }
  replaceSelection = (event: any) => {
    const { similarword } = event.target.dataset;
    const { selectedWorld } = this.state;
    const currentValue = this.state.value.toString(fileZone.FORMAT_MARKDOWN);
    const newValue = currentValue.split(selectedWorld).join(similarword);
    this.setState({
      value: RichTextEditor.createValueFromString(newValue, fileZone.FORMAT_MARKDOWN)
    });
  }

  renderSimilarWords = () => {
    const { similarWords } = this.props;
    return similarWords.map(similarWord =>
      <button key={similarWord} data-similarword={similarWord} onClick={this.replaceSelection}>{similarWord}</button>
    );
  }
  render() {
    console.log(this);
    return (
      <div>
        <div onDoubleClick={this.handleDoubleClick}>
          <RichTextEditor
            toolbarConfig={fileZone.EDITOR_CONFIG}
            value={this.state.value}
            onChange={this.onChange}
          />
        </div>
        <div>
          {this.renderSimilarWords()}
        </div>
      </div>
    );
  }
}


export default FileZone;
