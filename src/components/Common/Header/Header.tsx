import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { authActions } from "../../../features/auth/authSlice";

export const Header = () => {
    const dispatch = useDispatch();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Student Management
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => dispatch(authActions.logout())}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
