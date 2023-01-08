import { createSlice } from "@reduxjs/toolkit"
import { issueData } from "../data/issueData"


const initialState = {
    searchTerm: '',
    data: issueData
}

export const kanbanSlice = createSlice({
    name: 'kanbanSlice',
    initialState: initialState,
    reducers: {
        sortDragData:(state, action) => {
            state.data.map((data) => {
                if(data.id === action.payload.id){
                    data.status = action.payload.status
                }
                return data
            })
        },
        updateIssueData: (state, action) => {
            state.data.map((data) => {
                if(data.id === action.payload.id){
                    console.log(action.payload.value);
                    data[action.payload.type] = action.payload.value
                    data.recentlyUpdated = true
                }
                return data
            })
        },
        changeSearchTerm:(state, action) => {
            state.searchTerm = action.payload
        },
        addNewIssue: (state, action) => {
            state.data.push(action.payload)
        }
    }
})

console.log(kanbanSlice);


export const {sortDragData, changeSearchTerm, updateIssueData, addNewIssue} = kanbanSlice.actions
export default kanbanSlice