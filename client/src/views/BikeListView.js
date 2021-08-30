import { Fragment } from "react"
import { BikeList } from "../components/BikeList"
import { Filter } from "../components/Filter"

export const BikeListView = () => {
    return (
        <Fragment>
            <Filter />
            <BikeList />
        </Fragment>
    )
}