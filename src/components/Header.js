import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    SwipeableDrawer,
    Tab,
    Tabs,
    Toolbar,
    useMediaQuery,
    useScrollTrigger
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/styles';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
};

const useStyles = makeStyles(theme => ({
    appbar: {
        zIndex: theme.zIndex.modal + 1,
        backgroundColor: "black"
    },
    drawer: {
        backgroundColor: "black"
    },
    drawerIcon: {
        height: "50px",
        width: "50px",
        color: theme.palette.common.gold
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerItem: {
        ...theme.typography.tab,
        marginTop: "1.5em",
        color: theme.palette.common.gold,
        opacity: 0.7
    },
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            color: theme.palette.common.gold,
            opacity: 1
        }
    },
    tab: {
        ...theme.typography.tab,
        minWidth: "auto",
        marginLeft: "0.15em",
        marginRight: "0.15em",
        [theme.breakpoints.up("md")]: {
            marginLeft: "1.5em",
            marginRight: "1.5em",
        },
        [theme.breakpoints.up("lg")]: {
            marginLeft: "4em",
            marginRight: "4em",
        }
    },
    tabContainer: {
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
        justify: "space-evenly",
        height: "100px",
        backgroundColor: "black",

    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
    }
}));

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleChange = (e, newValue) => {
        props.setValue(newValue);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const options = [
        {
            name: "Home",
            link: "/",
            activeIndex: 0
        },
        {
            name: "About Me",
            link: "/about",
            activeIndex: 1,
        },
        {
            name: "My Portfolio",
            link: "/portfolio",
            activeIndex: 2
        },
        {
            name: "Contact Me",
            link: "/contact",
            activeIndex: 3
        }
    ];

    useEffect(() => {
        [...options].forEach(option => {
            switch (window.location.pathname) {
                case `${option.link}`:
                    if (props.value !== option.activeIndex) {
                        props.setValue(option.activeIndex)
                    }
                    break;
                default:
                    break;
            }
        })
    }, [options, props.value, props]);

    const tabs = (
        <React.Fragment>
            <Tabs
                value={props.value}
                onChange={handleChange}
                className={classes.tabContainer}
                indicatorColor="primary"

            >
                {options.map((option, index) => (
                    <Tab
                        key={`${option}${index}`}
                        className={classes.tab}
                        component={Link}
                        to={option.link}
                        label={option.name}
                    />
                ))}
            </Tabs>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
            >
                <div className={classes.toolbarMargin} />
                <List
                    disablePadding
                    style={{
                        marginTop: "1em"
                    }}
                >
                    {options.map(option => (
                        <ListItem
                            key={`${option}${option.activeIndex}`}
                            divider
                            button
                            component={Link}
                            to={option.link}
                            selected={props.value === option.activeIndex}
                            classes={{ selected: classes.drawerItemSelected }}
                            onClick={() => { setOpenDrawer(false); props.setValue(option.activeIndex) }}
                        >
                            <ListItemText
                                className={classes.drawerItem}
                                disableTypography
                            >
                                {option.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
            <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
            >
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar className={classes.appbar}>
                    <Toolbar disableGutters>
                        {matchesXS ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}