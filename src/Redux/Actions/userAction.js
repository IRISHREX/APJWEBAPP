
//User ACTIONS
export const FETCHUSER='FETCHUSER';
export const UPDATE_USER='UPDATE_USER';
export const SUCCESS='SUCCESS'
export const CREATE_USER='CREATE_USER';
export const DELETE_USER='DELETE_USER';
//Notice ACTIONS
export const FETCHNOTICE='FETCHNOTICE';
export const UPDATE_NOTICE='UPDATE_NOTICE';
export const CREATE_NOTICE='CREATE_NOTICE';
export const DELETE_NOTICE='DELETE_NOTICE';


export const fetchUser=()=>({
    type: FETCHUSER
})

export const updateUser=(id)=>({
    type: UPDATE_USER,
    id
})

export const createUser=()=>({
    type: CREATE_USER
})

export const deleteUser=(id)=>({
    type: DELETE_USER,
    id
})





