import { Drawer, Fab, List, ListItem, ListItemIcon, ListItemText, makeStyles, Switch } from "@material-ui/core"
import { FilterList } from "@material-ui/icons"
import { useState } from "react"
import { useBikeApi } from "../services/BikeApi/BikeApi.service"
import { FilterProvider, useFilter } from "../store/FilterProvider"

const useStyles = makeStyles((theme) => ({
    filterFab: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
        zIndex: theme.zIndex.snackbar
    }
}))

export const Filter = () => {
    const { filter, dispatch } = useFilter()
    const { getStations } = useBikeApi()
    const [openDrawer, setOpenDrawer] = useState(false)
    const [filterState, setFilterState] = useState({
        filterWithBikes: filter.filterWithBikes,
        filterWithDocks: filter.filterWithDocks
    })
    const classes = useStyles()
  
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

    return (
        <FilterProvider>
            <Fab aria-label="filter" onClick={toggleDrawer(true)} className={classes.filterFab}>
                <FilterList />
            </Fab>
            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                <List>
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