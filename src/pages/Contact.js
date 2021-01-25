import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import contactBG from '../assets/bg4.jpg';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${contactBG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "40em"
    },
    content: {
        position: "absolute",
        marginTop: "10em",
    },
    links: {
        fontFamily: "Permanent Marker",
        color: theme.palette.common.gold,
        fontSize: "1em",
        [theme.breakpoints.up("sm")]: {
            fontSize: "1.5em"
        },
    },
    words: {
        maxWidth: "20em",
        fontSize: "1.25em",
        [theme.breakpoints.up("sm")]: {
            maxWidth: "25em",
            fontSize: "1.5em"
        },
        [theme.breakpoints.up("md")]: {
            maxWidth: "30em",
        },
        [theme.breakpoints.up("lg")]: {
            maxWidth: "35em",
        }
    }
}));

export default function Contact(props) {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid
                item
                container
                direction="column"
                justify="center"
                align="center"
                className={classes.content}
            >
                <Grid item>
                    <Typography
                        paragraph
                        className={classes.words}>
                        I'm too chicken to put all of my contact information online, but that doesn't mean I don't want to talk to you!
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        className={classes.links}
                        href="mailto:dfkestner@gmail.com"
                        target="_blank">
                            Send me an e-mail
                    </Button>
                    <Typography className={classes.words}>
                        or
                    </Typography>
                    <Button
                        className={classes.links}
                        href="mailto:dfkestner@gmail.com"
                        target="_blank">
                            add me on LinkedIn
                    </Button>
                </Grid>
            </Grid>
            <div src={contactBG} alt="Contact Background" className={classes.background} />
        </Grid>
    )
}