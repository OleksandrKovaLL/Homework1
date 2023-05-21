import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { // by name
            const {payload} = action
            return [...state].sort((a, b) => {
                if (payload === 'up') {
                    return a.name.localeCompare(b.name)
                } else if (payload === 'down') {
                    return b.name.localeCompare(a.name)
                }
                return 0
            })
        }
        case 'check': {
            const {payload} = action
            return state.filter(user => user.age >= payload)
        }
        default:
            return state
    }
}
