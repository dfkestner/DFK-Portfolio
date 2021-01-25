import React from 'react';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import {
    AccordionDetails,
    Grid,
    Typography,
    useMediaQuery
} from '@material-ui/core';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import aboutbg from '../assets/bg2.jpg';

const useStyles = makeStyles(theme => ({
    aboutbackground: {
        backgroundImage: `url(${aboutbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%"
    },
    acsummary: {
        fontFamily: "Permanent Marker",
        color: theme.palette.common.gold,
        [theme.breakpoints.up("sm")]: {
            fontSize: "1.25em"
        }
    },
    details: {
        backgroundColor: theme.palette.common.black
    },
    grid: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "3em",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "28em"
        },
        [theme.breakpoints.between("sm", "md")]: {
            maxWidth: "52em",
            paddingLeft: "2em",
            paddingRight: "2em"
        },
        [theme.breakpoints.between("md", "lg")]: {
            maxWidth: "72em",
        },
        [theme.breakpoints.up("lg")]: {
            maxWidth: "80em",
        },
        postion: "absolute",
        textAlign: "center",
        alignItems: "center",
    },
    pic: {
        marginTop: "1em",
        maxHeight: "15em",
        borderRadius: 150
    },
    words: {
        [theme.breakpoints.up("sm")]: {
            fontSize: "1.15em"
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1.25em"
        }
    }
}));

const Accordion = withStyles(theme => ({
    root: {
        expanded: {
            margin: "auto",
        },
    }

}))(MuiAccordion);

const AccordionSummary = withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.common.blue
    }
}))(MuiAccordionSummary);

export default function About(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Grid container>
            <div className={classes.aboutbackground}>
                <Grid
                    className={classes.grid}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"

                >
                    <Grid
                        item
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        style={{ marginTop: matchesXS ? "1em" : "2.25em" }}
                    >
                        <img
                            alt="Profesh Headshot"
                            src="https://avatars1.githubusercontent.com/u/70758403?s=400&u=7d8667d062be63b74941d05f1ae3de9b88cbdc4c&v=4"
                            className={classes.pic}
                        />
                        <Typography
                            variant="body1"
                            paragraph
                            className={classes.words}
                            style={{ marginTop: matchesXS ? "1em" : "2.25em" }}
                        >
                            As a professional, I thrive in environments that provide opportunities to grow and tackle new challenges.
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            className={classes.words}                        
                        >
                            My previous positions have helped me develop strong communication skills, as well as a penchant for collaborative process improvement and problem-solving.
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            className={classes.words}
                        >
                            For specifics on my experience, check out the sections below or take a look at <a
                                style={{ color: theme.palette.common.gold }}
                                href={"https://docs.google.com/document/d/1LneM6iSSmbVVC6ZSPqkov_FNNViLTa_2hjyhMvaDTYM/edit?usp=sharing"}
                                target={"blank"}
                            >my resume</a>.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        style={{ marginTop: matchesXS ? "0.5em" : "1em" }}
                    >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon
                                        className={classes.acsummary}
                                    />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography
                                    className={classes.acsummary}
                                >
                                    Web Development
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                className={classes.details}
                            >
                                <Grid container direction="column">
                                    <Typography paragraph className={classes.words}>
                                        My interest in web development began when I was a Documentation Specialist for Navy Federal Credit Union.
                                    </Typography>
                                    <Typography paragraph className={classes.words}>
                                        I learned a little HTML and CSS while creating content for our online manual, and worked closely with developers during user-end testing for new software and system updates.
                                    </Typography>
                                    <Typography className={classes.words}>
                                        I recently completed the University of Minnesota's Full-Stack Web Development Certificate program, and am currently working on additional online courses to futher expand my knowledge.
                                    </Typography>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon
                                        className={classes.acsummary}
                                    />
                                }
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography
                                    className={classes.acsummary}
                                >
                                    Leadership
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                className={classes.details}
                            >
                                <Grid container direction="column">
                                    <Typography paragraph className={classes.words}>
                                        As a Training Instructor for Navy Federal Credit Union, I was responsible for supervising new hires and received training on effective management techniques and leadership styles.
                                    </Typography>
                                    <Typography paragraph className={classes.words}>
                                        After leaving NFCU, I worked as Front of House Manager for Sweet NOLA's Southern Food Lounge, where I managed a team of servers and helped organize shows and special events.
                                    </Typography>
                                    <Typography className={classes.words}>
                                        My next position was with DialogueDirect, where I was quickly promoted to Team Leader and began training and supervising other fundraisers.
                                    </Typography>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid
                        item
                    >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon
                                        className={classes.acsummary}
                                    />
                                }
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography
                                    className={classes.acsummary}
                                >
                                    Training
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                className={classes.details}
                            >
                                <Grid container direction="column">
                                    <Typography paragraph className={classes.words}>
                                        The majority of my professional experience has involved training in some capacity.
                                    </Typography>
                                    <Typography paragraph className={classes.words}>
                                        As a Training Instructor for Navy Federal Credit Union, I facilitated new hire training as well as in-person and virtual advanced skill classes.
                                    </Typography>
                                    <Typography paragraph className={classes.words}>
                                        During that time I also helped redesign training materials, implemented new techniques to determine how trainees were comprehending specific portions of the curriculum, and was promoted to Training Instructor II.
                                    </Typography>
                                    <Typography className={classes.words}>
                                        I was able to continue building on that experience while training new hires in my subsequent positions as Front of House Manager for Sweet NOLA's Southern Food Lounge and Team Leader for DialogueDirect.
                                    </Typography>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid
                        item
                        style={{ marginBottom: matchesXS ? "1.25em" : "2.25em" }}
                    >
                        <Accordion>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon
                                        className={classes.acsummary}
                                    />
                                }
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography
                                    className={classes.acsummary}
                                >
                                    Technical/Instructional Writing
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                className={classes.details}
                            >
                                <Grid container direction="column">
                                    <Typography paragraph className={classes.words}>
                                        While working as a Training Instructor for Navy Federal Credit Union, I began contributing to the online manual content for Consumer Loans and Titles department.
                                    </Typography>
                                    <Typography paragraph className={classes.words}>
                                        After a few months, a Documentation Specialist position became available, and I was hired to work on those manuals full time.
                                    </Typography>
                                    <Typography paragraph className={classes.words}>
                                        My responsibilities included coordinating with various other departments to keep manual content was consistent across channels.
                                    </Typography>
                                    <Typography className={classes.words}>
                                        When a new system or software update was introduced, I was responsible for testing to ensure all necessary front-end procedures could be completed and coordinating with other departments to plan and schedule training and manual updates.
                                    </Typography>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}