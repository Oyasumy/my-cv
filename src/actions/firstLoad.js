import * as Types from '../constants/configAction';

// Set state for first load page 
export const handleSetFirstLoad = () => ({
    type: Types.SET_FIRST_LOAD,
})

// Set state for language 
export const handleSetChangeLanguage = (text) => ({
    type: Types.SET_CHANGE_LANGUAGE,
    payload:text
})
