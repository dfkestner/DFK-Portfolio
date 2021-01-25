import React from 'react';
import Typewriter from 'typewriter-effect';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import homeBG from '../assets/Background.jpg';

const useStyles = makeStyles(theme => ({
    bio: {
        position: "absolute",
        textAlign: "center",
        marginTop: "5em",
    },
    content: {
        marginLeft: "2em",
        marginRight: "2em",
        maxWidth: "40em"
    },
    homebackground: {
        backgroundImage: `url(${homeBG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "40em",
        width: "100%"
    },
    links: {
        color: theme.palette.common.gold
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
    },
    words: {
        fontSize: "1.25em", 
    }
}));

export default function Home(props) {
    const classes = useStyles();
    const stringList = [
        "Full-Stack Web Developer",
        "Technical/Instructional Writer",
        "Training Instructor",
        "Manager/Team Leader"
    ];

    return (
        <Grid
            container
        >
            <div className={classes.homebackground}>
            <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
                className={classes.bio}
            >
                <Grid
                    item
                    style={{ marginBottom: "1em" }}
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
                    style={{ marginBottom: "1em" }}
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
                    className={classes.content}
                >
                    <Typography
                        variant="body1"
                        paragraph
                        className={classes.words}
                    >
                        Greetings from Manassas, Virginia 👋
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        className={classes.words}
                    >
                        I am a web developer with several years of leadership, training, and technical writing experience, looking for pretty much any opportunity to collaborate, create, or learn.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        className={classes.words}
                        style={{marginBottom: "5em"}}
                    >
                        Check out <a 
                        className={classes.links} 
                        href={"/portfolio"}
                        >my work
                        </a>, learn more about <a 
                        className={classes.links}
                        href="/about"
                        >my experience
                        </a>, or <a 
                        className={classes.links} 
                        href={"/contact"}
                        >reach out</a>!
                    </Typography>
                </Grid>
            </Grid>
            </div>
        </Grid>
    )
}