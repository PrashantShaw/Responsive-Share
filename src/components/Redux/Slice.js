import { createSlice } from "@reduxjs/toolkit";

const availableUsersGrps = {
    users: [
        { name: 'Tom Cook', email: 'tom@oslash.com', access: 'Full access', image: 'Tom.png' },
        { name: 'Arlene Mccoy', email: 'arlene@oslash.com', access: 'Full access', image: 'Arlene.png' },
    ],
    groups: [
        { name: 'Product', email: 'prod@oslash.com', access: 'Full access', image: 'prod.png' },
        { name: 'Engineering', email: 'engg@oslash.com', access: 'Full access', image: 'engg.png' },
    ]
}

const selectedUsers = [
    {
        name: 'Everyone at OSlash',
        email: '25 workspace members',
        access: 'No access',
        image: 'oslash.png'
    }
]

const usersSlice = createSlice({
    name: 'usersList',
    initialState: {
        availableUsersGrps, selectedUsers
    },
    reducers: {
        'ADD_USER': (state, action) => {
            state.selectedUsers.push(action.payload)
            // console.log(action.payload.email, )
            state.availableUsersGrps.users = state.availableUsersGrps.users.filter(user => user.email !== action.payload.email)
            state.availableUsersGrps.groups = state.availableUsersGrps.groups.filter(grp => grp.email !== action.payload.email)
        },
        'REMOVE_USER': (state, action) => {
            state.selectedUsers.map(user => user.email !== action.payload)
        },
        'SET_ACCESS': (state, action) => {
            state.selectedUsers.map(user => {
                if (user.email === action.payload.email) {
                    user.access = action.payload.access
                }
                return user
            })
        }
    }
})

export const { ADD_USER, REMOVE_USER, SET_ACCESS } = usersSlice.actions
export default usersSlice.reducer