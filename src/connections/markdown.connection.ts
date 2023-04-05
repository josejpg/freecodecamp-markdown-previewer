import { uploadTextEvent } from "../events/events";

const mapStateToProps = (state: { text: string, markdown: string }) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        uploadText: async (text: string) => {
            dispatch(uploadTextEvent(text));
        }
    }
};

export {
    mapStateToProps,
    mapDispatchToProps
}