import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Grid, MobileStepper, Paper, Typography, useMediaQuery } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import projects from '../projects.json';
import portBG from '../assets/bg3.jpg';

const useStyles = makeStyles(theme => ({
    arrows: {
        color: theme.palette.common.gold
    },
    button: {
        fontFamily: "Permanent Marker",
        margin: "0.5em",
        borderRadius: 100,
        width: "10em",
        [theme.breakpoints.up("lg")]: {
            fontSize: "1em"
        }
    },
    content: {
        position: "absolute",
        marginTop: "3em",
        marginBottom: "5em"
    },
    description: {
        marginTop: "1em",
        textAlign: "center",
        maxWidth: "30em",
        [theme.breakpoints.up("sm")]: {
            maxWidth:"35em"
        },
        [theme.breakpoints.up("md")]: {
            maxWidth: "40em",
            fontSize: "1.25em"
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: "25em"
        }
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        height: 50,
        backgroundColor: "transparent",
    },
    image: {
        maxWidth: "30em",
        maxHeight: "30em",
        [theme.breakpoints.down("xs")]: {
            maxHeight: "20em",
            maxWidth: "20em"
        },
        [theme.breakpoints.up("sm")]: {
            maxHeight:"35em",
            maxWidth: "35em"
        },
        [theme.breakpoints.up("md")]: {
            maxHeight:"50em",
            maxWidth: "50em"
        },
        [theme.breakpoints.up("lg")]: {
            maxHeight:"60em",
            maxWidth: "60em"
        },
        borderRadius: 20
    },
    portBG: {
        backgroundImage: `url(${portBG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "60em",
        [theme.breakpoints.up("md")]: {
            height: "75em"
        },
        [theme.breakpoints.up("lg")]: {
            height: "100em"
        },
        margin: 0
    },
    stepper: {
        backgroundColor: "transparent",
        fontFamily: "Permanent Marker",
        color: "white",
        [theme.breakpoints.up("md")]: {
            fontSize: "1.25em"
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "1.75em"
        }
    },
    title:{
        marginBottom: "1em",
        fontFamily: "Permanent Marker",
        fontSize: "2em",
        [theme.breakpoints.up("md")]: {
            fontSize:"2.5em"
        },
        [theme.breakpoints.up("lg")]: {
            fontSize:"3em"
        },
        justify: "center"

    }
}));

export default function Portfolio(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = projects.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
    const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Grid container>
            <div className={classes.portBG}>
                <Grid
                    container
                    direction="column"
                    className={classes.content}
                    justify="center"
                    alignItems="center"
                >
                    <Grid item style={{ marginBottom: "1em" }}>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            variant="text"
                            className={classes.stepper}
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size={ matchesLG ? "large" : matchesMD ?"medium" : "small"}
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                    className={classes.arrows}
                                >
                                    {theme.direction === 'rtl' ? <ArrowBackIosIcon fontSize={ matchesLG ? "large" : matchesMD ?"medium" : "small"} /> : <ArrowForwardIosIcon fontSize={ matchesLG ? "large" : matchesMD ?"medium" : "small"} />}
                                </Button>
                            }
                            backButton={
                                <Button
                                    size={ matchesLG ? "large" : matchesMD ?"medium" : "small"}
                                    onClick={handleBack}
                                    disabled={activeStep === 0}
                                    className={classes.arrows}
                                >
                                    {theme.direction === 'rtl' ? <ArrowForwardIosIcon fontSize={ matchesLG ? "large" : matchesMD ?"medium" : "small"} /> : <ArrowBackIosIcon fontSize={ matchesLG ? "large" : matchesMD ?"medium" : "small"} />}
                                </Button>
                            }
                        />
                    </Grid>
                    <Grid item>
                        <Paper
                            square
                            elevation={0}
                            className={classes.header}
                        >
                            <Typography className={classes.title}>
                                {projects[activeStep].title}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <img
                            className={classes.image}
                            src={projects[activeStep].image}
                            alt={projects[activeStep].title}
                        />
                    </Grid>
                    <Grid item>
                        <Typography
                            paragraph
                            className={classes.description}
                        >
                            {projects[activeStep].description}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="row"
                        justify="center"
                    >
                        <Grid item>
                            <Button
                                href={projects[activeStep].repository}
                                target="_blank"
                                className={classes.button}
                                variant="contained"
                                color="secondary"
                            >
                                GitHub
                        </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                href={projects[activeStep].deployedLink}
                                target="_blank"
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                            >
                                Demo/App
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}