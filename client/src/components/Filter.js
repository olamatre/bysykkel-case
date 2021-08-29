import { Drawer, Fab, List, ListItem, ListItemIcon, ListItemText, Switch } from "@material-ui/core"
import { FilterList } from "@material-ui/icons"
import { useState } from "react"
import { useBikeApi } from "../services/BikeApi/BikeApi.service"
import { FilterProvider, useFilter } from "../store/FilterProvider"

export const Filter = () => {
    const { filter, dispatch } = useFilter()
    const { getStations } = useBikeApi()
    const [openDrawer, setOpenDrawer] = useState(false)
    const [filterState, setFilterState] = useState({
        filterWithBikes: filter.filterWithBikes,
        filterWithDocks: filter.filterWithDocks,
        sortByClosest: filter.sortByClosest
    })
  
    const toggleDrawer = (open) => (event) => {
      if (
        event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return
      }
      setOpenDrawer(open)
    }
  
    const toggleFilterWithBikes = () => {
      dispatch({ type: 'toggleFilterWithBikes' })
      setFilterState({ ...filterState, filterWithBikes: !filterState.filterWithBikes})
      getStations({ ...filterState, filterWithBikes: !filterState.filterWithBikes})
    }
  
    const toggleFilterWithDocks = () => {
      dispatch({ type: 'toggleFilterWithDocks' })
      setFilterState({ ...filterState, filterWithDocks: !filterState.filterWithDocks})
      getStations({ ...filterState, filterWithDocks: !filterState.filterWithDocks})
    }
  
    const toggleSortByClosest = () => {
      dispatch({ type: 'toggleSortByClosest' })
      setFilterState({ ...filterState, sortByClosest: !filterState.sortByClosest})
      getStations({ ...filterState, sortByClosest: !filterState.sortByClosest})
    }

    return (
        <FilterProvider>
            <Fab aria-label="filter" position="absolute" onClick={toggleDrawer(true)}>
                <FilterList />
            </Fab>
            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Switch checked={filter.sortByClosest} onClick={toggleSortByClosest}/>
                        </ListItemIcon>
                        <ListItemText primary="Vis nærmeste"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Switch checked={filter.filterWithBikes} onClick={toggleFilterWithBikes} />
                        </ListItemIcon>
                        <ListItemText primary="Vis ledige sykler" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Switch checked={filter.filterWithDocks} onClick={toggleFilterWithDocks} />
                        </ListItemIcon>
                        <ListItemText primary="Vis ledige stativer" />
                    </ListItem>
                </List>
            </Drawer>
        </FilterProvider>
    )
}