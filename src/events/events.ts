import { EventUploadTextType } from "../types/event-upload-text.type";
import { UPLOAD_TEXT } from "./consts";

const uploadTextEvent = (text: string): EventUploadTextType => {
    return {
        type: UPLOAD_TEXT,
        text
    }
};

export {
    uploadTextEvent
}