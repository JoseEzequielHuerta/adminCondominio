import React, { useState } from 'react';
import './index.css';
import {
  Grid,
  Container,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import fondo from '../../Assets/Images/fondo.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  },
  container: {
    opacity: '0.6',
    height: '60%',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 0,
      width: '100%',
      height: '100%',
    },
  },
  div: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100½',
    marginTop: theme,
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const index = () => {
  const [body, setBody] = useState({ email: '', password: '' });
  const classes = useStyles();

  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {};

  return (
    <Grid container component="main" className={classes.root}>
      <Container
        component={Paper}
        elevation={5}
        maxWidth="xs"
        className={classes.container}
      >
        <div className={classes.div}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>{' '}
          <Typography component="h1" variant="h5">
            Sing In
          </Typography>
          <form className={classes.form}>
            <TextField
              fullWidth
              autoFocus
              color="primary"
              margin="normal"
              variant="outlined"
              label="Email"
              name="email"
              value={body.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              type="password"
              color="primary"
              margin="normal"
              variant="outlined"
              label="Password"
              name="password"
              value={body.password}
              onChange={handleChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => onSubmit()}
            >
              Iniciar
            </Button>
          </form>
        </div>
      </Container>
    </Grid>
  );
};

export default index;
