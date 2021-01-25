import { createMuiTheme } from '@material-ui/core/styles';

const myPurps = "#621EDB"
const goldTeef = "#FFC300"
const trublu = "#0E1172"
const blak = "#000000"

export default createMuiTheme({
    palette: {
        common: {
            purple: myPurps,
            gold: goldTeef,
            blue: trublu,
            black: "black"
        },
        primary: {
            main: blak
        },
        secondary: {
            main: goldTeef
        }
    },
    typography: {
        body1: {
            fontFamily: "Ubuntu Mono",
            color: "white"
        },
        tab: {
            fontFamily: "Permanent Marker",
            textTransform: "none",
            fontSize: "1.5rem",
            color: goldTeef
        }
    }
})