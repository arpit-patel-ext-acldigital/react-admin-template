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
        },
        collapseToggle: (state: any, action: any) => {
            if (action.menu.type === 'sub') {
                open = state.isOpen;
                trigger = state.isTrigger;

                const triggerIndex = trigger.indexOf(action.menu.id);
                if (triggerIndex > -1) {
                    open = open.filter((item) => item !== action.menu.id);
                    trigger = trigger.filter((item) => item !== action.menu.id);
                }

                if (triggerIndex === -1) {
                    open = [...open, action.menu.id];
                    trigger = [...trigger, action.menu.id];
                }
            } else {
                open = state.isOpen;
                const triggerIndex = state.isTrigger.indexOf(action.menu.id);
                trigger = triggerIndex === -1 ? [action.menu.id] : [];
                open = triggerIndex === -1 ? [action.menu.id] : [];
            }
            return {
                ...state,
                isOpen: open,
                isTrigger: trigger
            }
        }
    }
})

export const { setVisibility } = layoutSlice.actions;
export default layoutSlice.reducer;