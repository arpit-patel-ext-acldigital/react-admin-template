import { createSlice } from "@reduxjs/toolkit";
import { CONFIG } from "../../config/constant";

const initialState = {
    ...CONFIG,
    isOpen: [],
    isTrigger: []
}

interface layoutType {
    CHANGE_LAYOUT: string,
    COLLAPSE_MENU: string,
    COLLAPSE_TOGGLE: string,
    LAYOUT_TYPE: string,
    NAV_COLLAPSE_LEAVE: string,
    NAV_CONTENT_LEAVE: string,
    RESET: string,
}

export const layoutActions: layoutType = {
    CHANGE_LAYOUT: 'CHANGE_LAYOUT',
    COLLAPSE_MENU: 'COLLAPSE_MENU',
    COLLAPSE_TOGGLE: 'COLLAPSE_TOGGLE',
    LAYOUT_TYPE: 'LAYOUT_TYPE',
    NAV_COLLAPSE_LEAVE: 'NAV_COLLAPSE_LEAVE',
    NAV_CONTENT_LEAVE: 'NAV_CONTENT_LEAVE',
    RESET: 'RESET',
}



export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        changeLayout: (state: any, action: any) => {
            state.layout = action.payload;
            return state;
        },
        collapseMenu: (state: any) => {
            state.collapseMenu = !state.collapseMenu,
        }
    }
})

export const { setVisibility } = layoutSlice.actions;
export default layoutSlice.reducer;