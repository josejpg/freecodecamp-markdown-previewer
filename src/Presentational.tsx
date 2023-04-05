import React, { Component } from 'react';
import './Presentational.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMaximize, faMinimize, faSpellCheck } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type State = {
    isMaximized: boolean,
    icon: IconDefinition
}
export class Presentational extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            editor: {
                isMaximized: false,
                icon: faMaximize,
            },
            preview: {
                isMaximized: false,
                icon: faMaximize,
            }
        }
    }

    handleChange = (event: any) => {
        this.props.uploadText(event.target.value);
    }

    handleEditorResize = () => {
        const newState: State = {
            isMaximized: !this.state.editor.isMaximized,
            icon: !this.state.editor.isMaximized ? faMinimize : faMaximize,
        }
        this.setState({
            editor: newState
        });
    };
    handlePreviewResize = () => {
        const newState: State = {
            isMaximized: !this.state.preview.isMaximized,
            icon: !this.state.preview.isMaximized ? faMinimize : faMaximize,
        }
        this.setState({
            preview: newState
        });
    };

    render() {
        return (<div id="wrapper-container">
            <div className={"container editor " + (this.state.editor.isMaximized ? 'maximized' : 'minimized')}>
                <div className="wrap-toolbar">
                    <div className="toolbar">
                        <FontAwesomeIcon icon={faSpellCheck}/>Editor
                        <div className="resize"
                             onClick={this.handleEditorResize}>
                            <FontAwesomeIcon icon={this.state.editor.icon}/><br/>
                        </div>
                    </div>
                </div>
                <textarea value={this.props.text} onChange={this.handleChange} id="editor"></textarea>
            </div>
            <div className={"container preview " + (this.state.preview.isMaximized ? 'maximized' : 'minimized')}>
                <div className="wrap-toolbar">
                    <div className="toolbar">
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>Previewer
                        <div className="resize"
                             onClick={this.handlePreviewResize}>
                            <FontAwesomeIcon icon={this.state.preview.icon}/>
                        </div>
                    </div>
                </div>
                <div id="preview">
                    <div dangerouslySetInnerHTML={{ __html: this.props.markdown }}></div>
                </div>
            </div>
        </div>);
    }

    componentDidMount() {
        const initialText: string = "# Welcome to my React Markdown Previewer!\n" +
            "\n" +
            "## This is a sub-heading...\n" +
            "### And here's some other cool stuff:\n" +
            "\n" +
            "Heres some code, `<div></div>`, between 2 backticks.\n" +
            "\n" +
            "```\n" +
            "// this is multi-line code:\n" +
            "\n" +
            "function anotherExample(firstLine, lastLine) {\n" +
            "  if (firstLine == '```' && lastLine == '```') {\n" +
            "    return multiLineCode;\n" +
            "  }\n" +
            "}\n" +
            "```\n" +
            "\n" +
            "You can also make text **bold**... whoa!\n" +
            "Or _italic_.\n" +
            "Or... wait for it... **_both!_**\n" +
            "And feel free to go crazy ~~crossing stuff out~~.\n" +
            "\n" +
            "There's also [links](https://www.freecodecamp.org), and\n" +
            "> Block Quotes!\n" +
            "\n" +
            "And if you want to get really crazy, even tables:\n" +
            "\n" +
            "Wild Header | Crazy Header | Another Header?\n" +
            "------------ | ------------- | -------------\n" +
            "Your content can | be here, and it | can be here....\n" +
            "And here. | Okay. | I think we get it.\n" +
            "\n" +
            "- And of course there are lists.\n" +
            "  - Some are bulleted.\n" +
            "     - With different indentation levels.\n" +
            "        - That look like this.\n" +
            "\n" +
            "\n" +
            "1. And there are numbered lists too.\n" +
            "1. Use just 1s if you want!\n" +
            "1. And last but not least, let's not forget embedded images:\n" +
            "\n" +
            "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";
        this.props.uploadText(initialText);
    }
}