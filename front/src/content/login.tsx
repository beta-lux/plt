import React from "react"
import {Redirect} from "react-router-dom";
import Loading from "../component/Loading";
import {login} from "../env/api";
import Alert from "../component/Alert";

interface LoginProps {
    onLogin(): void;
}

interface LoginStates {
    status: "loading" | "input" | "querying" | "done" | "error";
    id: string;
    pw: string;
    error?: string;
}

class Login extends React.Component<LoginProps, LoginStates> {
    state: LoginStates = {
        id: "",
        pw: "",
        status: "loading"
    };

    componentDidMount() {
        this.setState({
            status: "input"
        })
    }

    componentWillUnmount() {

    }

    onIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({id: e.target.value})
    }

    onPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({pw: e.target.value})
    }

    onSubmit = () => {
        this.setState({
            status: "querying"
        })

        login(this.state.id, this.state.pw)
            .then((res) => {
                this.setState({
                    status: "done"
                });
            })
            .catch((err) => {
                this.setState({
                    status: "error",
                    error: err.toString()
                });
            })
    }

    Input = () => {
        return (
            <div className={"inputBox"}>
                <input type={"text"} placeholder={"ID"} onChange={this.onIdChange} value={this.state.id}/>
                <input type={"password"} placeholder={"PASSWORD"} onChange={this.onPwChange} value={this.state.pw}/>
                <button className={this.state.status === "querying" ? "disabled" : ""} onClick={this.onSubmit}>{this.state.status === "querying" ? "지구-" + this.state.id + " 접근 가능성 조회 중..." : "SUBMIT"}</button>
            </div>
        );
    }

    content = () => {
        if (this.state.status === "loading") {
            return (
                <Loading description={"BnL 인증 시스템 불러오는 중..."}/>
            );
        } else {
            return (
                <>
                    {this.Input()}
                </>
            );
        }
    }

    render() {
        if (this.state.status === "done") {
            this.props.onLogin();
            return (
                <Redirect to={"/"}/>
            )
        }
        return (
            <div className={"Login"}>
                <div className={"title"}>LOGIN</div>
                {this.state.status === "error" && <Alert type={"warning"} message={this.state.error}/>}
                {this.content()}
            </div>
        );
    }
}

export default Login;