import { configureStore } from "@reduxjs/toolkit"
import kanbanSlice from "./kanbanSlice"


const Store = configureStore({
        reducer: {
            kanban: kanbanSlice.reducer
        }
    })

export default Store