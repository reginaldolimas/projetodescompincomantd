import * as types from './types'

export function reducer(state, action) {
    switch (action.type) {
        case types.openModalSavePinType:
            return {
                ...state,
                type: types.openModalSavePinType,
                mode: 'savePin',
                activePinId: action.payload
            };
        case types.closeModalsType:
            return {
                ...state,
                type: types.closeModalsType,
                mode: null
            };
   
        case types.openModalCreateFolderType:
            return {
                ...state,
                type: types.openModalCreateFolderType,
                mode: 'createFolder'
            };

        default:
            return {
                ...state,
                type: action.type
            };

    }
}