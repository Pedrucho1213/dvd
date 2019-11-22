import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';



export default function formulario(props) {
    return (
            <form className={props.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Adresse de courriel"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Mot de passe"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Se souvenir de moi"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={props.submit}
                >
                    Connexion
            </Button>

                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Mot de passe oublié ?
            </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Créer un compte"}
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                </Box>
            </form>
    );


}

