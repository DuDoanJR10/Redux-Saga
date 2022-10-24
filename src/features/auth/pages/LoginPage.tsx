import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import {
    Box,
    Button,
    CircularProgress,
    Paper,
    Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { authActions } from "../authSlice";
import { useAppSelector } from "../../../app/hooks";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
    },
    box: {
        padding: theme.spacing(3),
    },
}));

const LoginPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const isLogging = useAppSelector((state) => state.auth.logging);

    const handleLoginClick = () => {
        dispatch(
            authActions.login({
                username: "DuDoan",
                password: "dukick0333",
            }),
        );
    };

    return (
        <div className={classes.root}>
            <Paper elevation={1} className={classes.box}>
                <Typography variant="h5" component="h1">
                    Student Management
                </Typography>
                <Box mt={4}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleLoginClick}
                    >
                        {isLogging && (
                            <CircularProgress size={20} color="inherit" />
                        )}{" "}
                        &nbsp; Fake Login
                    </Button>
                </Box>
            </Paper>
        </div>
    );
};

export default LoginPage;
