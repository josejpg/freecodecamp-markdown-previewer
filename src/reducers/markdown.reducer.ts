import { UPLOAD_TEXT } from "../events/consts";
import { marked, Renderer } from "marked";
import * as DOMPurify from "dompurify";

const initialState: { text: string, markdown: string } = {
    text: '',
    markdown: ''
};

const markdownReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPLOAD_TEXT:
            const renderer: Renderer = new Renderer();
            renderer.paragraph = (text) => text + "<br/>";
            return {
                ...state,
                text: action?.text,
                markdown: marked.parse(
                    action?.text,
                    {
                        breaks: true,
                        xhtml: true,
                        sanitizer: (text) => DOMPurify.sanitize(text),
                        renderer
                    }
                )
            };
        default:
            return state;
    }
};

export {
    markdownReducer
}