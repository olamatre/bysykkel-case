import React, { createContext, useContext, useReducer } from 'react'

const FilterStateContext = createContext(undefined)

const filterReducer = (filter, action) => {
    switch (action.type) {
        case 'toggleFilterWithBikes': {
            return {
                ...filter,
                filterWithBikes: !filter.filterWithBikes
            }
        }
        case 'toggleFilterWithDocks': {
            return {
                ...filter,
                filterWithDocks: !filter.filterWithDocks
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

const FilterProvider = ({
    children,
}) => {
    const [filter, dispatch] = useReducer(filterReducer, {
        filterWithBikes: false,
        filterWithDocks: false
    })
    const value = { filter, dispatch }

    return (
        <FilterStateContext.Provider value={value}>
            {children}
        </FilterStateContext.Provider>
    )
}

const useFilter = () => {
    const context = useContext(FilterStateContext)
    if (context === undefined) {
        throw new Error(
            'useFilter must be used within a FilterProvider',
        )
    }

    return context
}

export { FilterProvider, useFilter }
