import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import AUTH_SERVICE from '../../Services/auth.services';

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
  const navigate = useNavigate()
  const [vali,setVali]=useState(false)
  const [body, setBody] = useState({ email: '', password: '' });
  const [validaciones, setValidaciones] = useState({
    email: {
      regex:
        "^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\\.[a-zA-Z]+",
      valid: true,
      message: 'El correo debe tener formato valido',
    },
  });
  const classes = useStyles();

  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'email') {
      const val = validaciones.email;
      const valid = new RegExp(val.regex);
      val.valid = valid.test(e.target.value);
      setValidaciones({
        ...validaciones,
        email: { ...val },
      });
    }
  };

  const onSubmit = () => {
    AUTH_SERVICE.login(body.email, body.password)
      .then(({data}) => {
        sessionStorage.setItem("token", data.token);
        navigate('/clientes')
      })
      .catch((err)=>setVali(true));
  };

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
              helperText={
                validaciones.email.valid ? '' : validaciones.email.message
              }
              error={!validaciones.email.valid}
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
              disabled={!validaciones.email.valid}
            >
              Iniciar
            </Button>
          </form>
        </div>
        {
          vali?<p>Las credenciales son incorrectas</p>:null
        }
      </Container>
    </Grid>
  );
};

export default index;
