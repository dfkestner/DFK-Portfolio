import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, BottomNavigation, BottomNavigationAction, Toolbar } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';

const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    root: {
        margin: 'auto',
        width: "100%",
        height: "100px",
        textAlign: 'center',
        alignContent: 'flex-start',
        backgroundColor: "black",
    },
    label: {
        fontFamily: "Permanent Marker"
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
    }
}));

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <div className={classes.toolbarMargin} />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <BottomNavigation
                        value={value}
                        onChange={handleChange}
                        className={classes.root}
                    >
                        <BottomNavigationAction
                            classes={{ label: classes.label }}
                            label="LinkedIn"
                            value="recents"
                            style={{ color: theme.palette.common.gold }}
                            icon={<LinkedInIcon
                                onClick={event => window.open("https://www.linkedin.com/in/dorotea-flores-kestner-01b6721b4/", "_blank")}
                            />
                            }
                        />
                        <BottomNavigationAction
                            classes={{ label: classes.label }}
                            label="GitHub"
                            value="recents"
                            style={{ color: theme.palette.common.gold }}
                            icon={<GitHubIcon
                                onClick={event => window.open("https://github.com/dfkestner", "_blank")}
                            />
                            }
                        />
                        <BottomNavigationAction
                            classes={{ label: classes.label }}
                            label="Contact"
                            style={{ color: theme.palette.common.gold }}
                            value="recents"
                            icon={<MailOutlineIcon
                                onClick={event => window.open("mailto:dfkestner@gmail.com", "_blank")}
                            />
                            }
                        />
                        <BottomNavigationAction
                            classes={{ label: classes.label }}
                            label="Resume"
                            style={{ color: theme.palette.common.gold }}
                            value="recents"
                            icon={<LibraryBooksRoundedIcon
                                onClick={event => window.open("https://docs.google.com/document/d/1LneM6iSSmbVVC6ZSPqkov_FNNViLTa_2hjyhMvaDTYM/edit?usp=sharing", "_blank")}
                            />
                            }
                        />
                    </BottomNavigation>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}