import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Switch, Route } from "react-router-dom";
import { Header } from "../Common/Header/Header";
import { Sidebar } from "../Common/Sidebar/Sidebar";
import Dashboard from "../../features/dashboard";
import { StudentFeature } from "../../features/student";

const useStyles = makeStyles((theme: any) => ({
    root: {
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "240px 1fr",
        gridTemplateAreas: `"header header" "sidebar main"`,

        minHeight: "100vh",
    },

    header: {
        gridArea: "header",
    },
    sidebar: {
        gridArea: "sidebar",
        borderRight: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
    },
    main: {
        gridArea: "main",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 3),
    },
}));

export const Admin = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <Header />
            </Box>
            <Box className={classes.sidebar}>
                <Sidebar />
            </Box>
            <Box className={classes.main}>
                <Switch>
                    <Route path="/admin/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/admin/students">
                        <StudentFeature />
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
};
