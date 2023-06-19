const initState = {
    themeId: 1,
}

type ChangeThemeActionType = {
    type: 'SET_THEME_ID',
    id: number
}

export type ThemeType = {
    themeId: number
}

type ActionsType = ChangeThemeActionType

export const themeReducer = (state = initState, action: ActionsType): ThemeType => {
    switch (action.type) {
        case 'SET_THEME_ID' : {
           return {
               ...state,
               themeId: action.id
           }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeActionType => ({ type: 'SET_THEME_ID', id: Number(id)})
