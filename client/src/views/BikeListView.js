import { BikeList } from "../components/BikeList"
import { Filter } from "../components/Filter"
import { FilterProvider } from "../store/FilterProvider"

export const BikeListView = () => {
    return (
        <FilterProvider>
            <Filter />
            <BikeList />
        </FilterProvider>
    )
}