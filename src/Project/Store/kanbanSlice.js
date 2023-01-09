import { createSlice } from "@reduxjs/toolkit"
import { issueData, project } from "../data/issueData"


const initialState = {
    searchTerm: '',
    data: issueData,
    projectData: project
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
        updateProjectName: (state, action) => {
            console.log(action.payload.name)
            state.projectData.name = action.payload
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


export const {sortDragData, changeSearchTerm, updateIssueData, addNewIssue, updateProjectName} = kanbanSlice.actions
export default kanbanSlice