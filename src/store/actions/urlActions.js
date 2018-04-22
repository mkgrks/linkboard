import { URL_PASTED } from ".";

export const urlPasted = url => {
    return {
        type: URL_PASTED,
        url
    }
}