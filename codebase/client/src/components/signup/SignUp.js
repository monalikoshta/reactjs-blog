import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SignUpService from '../../services/SignUpService';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

function SignUp() {
    const classes = useStyles();

    const name = React.useRef(null);
    const email = React.useRef(null);
    const phoneNumber = React.useRef(null);
    const password = React.useRef(null);

    const handleSubmit = async e => {
        e.preventDefault();
        const data = {
            name: name.current.value,
            email: email.current.value,
            phoneNumber: phoneNumber.current.value,
            password: password.current.value
        }
        let response;
        try{
            response = await SignUpService(data);
            if(response.success){
                alert('User Registered Successfully!')
                window.location.href='/login'
            } 
        } catch(err){
            console.log("Show error/ error handling")
        }
    };
    
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign Up
            </Typography>
            <form key={"haha"} className={classes.form} onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                type="text"
                inputRef={name}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={email}
                
            />
            <TextField
                inputRef={phoneNumber}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="phoneNumber"
                label="phoneNumber"
                type="tel"
                id="phoneNumber"
                autoComplete="Phone Number"
            />
            <TextField
                inputRef={password}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
            >
                Sign Up
            </Button>

            <Grid container>
                <Grid item>
                <Link href="login" variant="body2">
                    {"Already have an account? Sign In"}
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        </Container>
    )
}

export default SignUp
