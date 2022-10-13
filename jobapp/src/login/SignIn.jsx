import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import Button from 'react-bootstrap/Button';
import './login.css'

const SignIn = () => {
    return (
        <div className="logIn">
            <form className="logInForm">
                <div>
                    <h1 className='welcome'>BIENVENIDO</h1>
                </div>
                <div>
                    <div className='field'>
                        <label><PersonIcon className='icon'/>
                            <input type="text" placeholder='Usuario' name='user'/>
                        </label>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="password"><LockIcon className='icon'/>
                            <input type="password" placeholder="Contraseña" name='password'/>
                        </label>
                    </div>
                </div>
                <div className="helpLogIn">
                    <Button variant="link">¿Has olvidado tu contraseña?</Button>
                    <br/>
                    <Button variant="link">¿Necesitas ayuda?</Button>
                </div>
                <div>
                <button className="btnLogIn" type="submit">ENTRAR</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn