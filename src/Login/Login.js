import React from 'react'
import Logincss from './Login.module.css';

const Login = () => {
  return (
    <div className={Logincss.loginwrap}>
		<div className={Logincss.loginhtml}>
			<input id="tab-1" type="radio" name="tab" className={Logincss.signin} checked/><label for="tab-1" className={Logincss.tab}>Sign In</label>
			<input id="tab-2" type="radio" name="tab" className={Logincss.signup}/><label for="tab-2" className={Logincss.tab}>Sign Up</label>
			<div className={Logincss.loginform}>
				<div className={Logincss.signinhtm}>
					<div className={Logincss.group}>
						<label for="user" className={Logincss.label}>Username</label>
						<input id="user" type="text" className={Logincss.input}/>
					</div>
				<div className={Logincss.group}>
					<label for="pass" className={Logincss.label}>Password</label>
					<input id="pass" type="password" className={Logincss.input} data-type="password"/>
				</div>
				<div className={Logincss.group}>
					<input id="check" type="checkbox" className={Logincss.check} checked/>
					<label for="check"><span className={Logincss.icon}></span> Keep me Signed in</label>
				</div>
				<div className={Logincss.group}>
					<input type="submit" className={Logincss.button} value="Sign In"/>
				</div>
				<div className={Logincss.hr}></div>
				<div className={Logincss.footlnk}>
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
			<div className={Logincss.signuphtm}>
                <div className={Logincss.group}>
                    <label for="user" className={Logincss.label}>Username</label>
                    <input id="user" type="text" className={Logincss.input}/>
                </div>
                <div className={Logincss.group}>
                    <label for="pass" className={Logincss.label}>Password</label>
                    <input id="pass" type="password" className={Logincss.input} data-type="password"/>
                </div>
                <div className={Logincss.group}>
                    <label for="pass" className={Logincss.label}>Repeat Password</label>
                    <input id="pass" type="password" className={Logincss.input} data-type="password"/>
                </div>
                <div className={Logincss.group}>
                    <label for="pass" className={Logincss.label}>Email Address</label>
                    <input id="pass" type="text" className={Logincss.input}/>
                </div>
                <div className={Logincss.group}>
                    <input type="submit" className={Logincss.button} value="Sign Up"/>
                </div>
                <div className={Logincss.hr}></div>
                <div className={Logincss.footlnk}>
                    <label for="tab-1" className={Logincss.tab1}><a href="#already">Already Member?</a></label>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login;
