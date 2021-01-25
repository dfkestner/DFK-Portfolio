import React from 'react';
import Typewriter from 'typewriter-effect';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Grid, useMediaQuery } from '@material-ui/core';
import homeBG from '../assets/Background.jpg';

const useStyles = makeStyles(theme => ({
    bio: {
        position: "absolute",
        textAlign: "center",
        alignItems: "center",
    },
    homebackground: {
        backgroundImage: `url(${homeBG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "85vh",
        width: "100%"
    },
    name: {
        fontFamily: 'Permanent Marker',
        color: "white",
        fontSize: "4em",
        [theme.breakpoints.down("sm")]: {
            fontSize: "3.25em"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "2.5em"
        }
    },
    typeCursor: {
        fontFamily: 'Permanent Marker',
        color: "white",
        fontSize: "2.5em",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.75em"
        }
    },
    typeWrapper: {
        fontFamily: 'Permanent Marker',
        color: "white",
        fontSize: "2.5em",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.75em"
        }
    }
}));

export default function Home(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

    const stringList = [
        "Full-Stack Web Developer",
        "Technical/Instructional Writer",
        "Training Instructor",
        "Manager/Team Leader"
    ];

    return (
        <Grid
            container
            justify="space-evenly"
            alignItems="center"
        >
            <Grid
                item
                container
                direction="column"
                className={classes.bio}
            >
                <Grid
                    item
                    style={{ marginBottom: "2em" }}
                >
                    <Typography
                        variant="h3"
                        className={classes.name}
                    >
                        Téa Flores-Kestner
                    </Typography>
                </Grid>
                <Grid
                    item
                    style={{ marginBottom: "2em" }}
                >
                    <Typewriter
                        options={{
                            strings: stringList,
                            wrapperClassName: classes.typeWrapper,
                            cursorClassName: classes.typeCursor,
                            autoStart: true,
                            loop: true,
                            skipAddStyles: true
                        }}
                    />
                </Grid>
                <Grid
                    item
                    style={{
                        marginLeft: matchesSM ? "2em" : "10em", marginRight: matchesSM ? "2em" : "10em", maxWidth: "40em"
                    }}
                >
                    <Typography
                        variant="body1"
                        paragraph
                        style={{fontSize: matchesMD ? "1.5em" : "1.25em"}}
                    >
                        Greetings from Manassas, Virginia 👋
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{fontSize: matchesMD ? "1.5em" : "1.25em"}}
                    >
                        I am a web developer with several years of leadership, training, and technical writing experience, looking for pretty much any opportunity to collaborate, create, or learn.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{fontSize: matchesMD ? "1.5em" : "1.25em"}}
                    >
                        Check out <a 
                        style={{ color: theme.palette.common.gold }} 
                        href={"/portfolio"}
                        >my work
                        </a>, learn more about <a 
                        style={{ color: theme.palette.common.gold }} 
                        href="/about"
                        >my experience
                        </a>, or <a 
                        style={{ color: theme.palette.common.gold }} 
                        href={"/contact"}
                        >reach out</a>!
                    </Typography>
                </Grid>
            </Grid>
            <div className={classes.homebackground} />
        </Grid>
    )
}