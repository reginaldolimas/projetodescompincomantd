import * as types from './types';
/* import * as pinService from '../services/pinService'; */

/* const sleep = (time) => (
    new Promise(resolve => {
        setTimeout(resolve, time)
    })
);  */
//Congela aplicação por um determinado tempo...asdfasdfg

export const openModalSavePinAction = (pinId) => ({
    type: types.openModalSavePinType,
    payload: pinId
});

export const openModalCreateFolderAction = () => ({
    type: types.openModalCreateFolderType
})

export const closeModelAction = () => ({
    type: types.closeModalsType
});