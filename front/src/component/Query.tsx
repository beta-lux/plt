import React from 'react'
import Loading from "./Loading";
import {getTeamList} from "../env/api";
import Alert from "./Alert";

interface QueryProps {
    title: string;
    id?: string;

    onSubmit(team: string, query: string): Promise<any>;
}

interface QueryStates {
    status: "loading" | "error" | "input" | "querying" | "success";
    error?: string;
    target: string;
    result?: string;
    query: string;
    message?: string;
}

class Query extends React.Component<QueryProps, QueryStates> {
    state: QueryStates = {
        status: "loading",
        query: "",
        target: ""
    };

    teamList: Array<TeamInfo> = [];

    componentDidMount() {
        getTeamList()
            .then((res) => {
                this.teamList = res;
                this.setState({
                    status: "input"
                })
            })
            .catch((err) => [
                this.setState({
                    status: "error",
                    error: err.toString()
                })
            ]);
    }

    componentWillUnmount() {

    }

    onSubmit = () => {
        this.setState({
            status: "querying"
        })

        this.props.onSubmit(this.state.target, this.state.query)
            .then((res) => {
                this.setState({
                    status: "success",
                    message: res
                });
            })
            .catch((err) => {
                this.setState({
                    status: "error",
                    error: err.toString()
                })
            })
    }

    onTeamSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            target: e.target.value
        });
    }

    onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            query: e.target.value
        })
    }

    TeamSelector = () => {
        const teamRadio = this.teamList.map((team, index) => {
            const id = "teamRadio" + index.toString();
            return (
                <div key={team.teamname} className={"radio"}>
                    <input type={"radio"} id={id} name="team" value={team.teamname} onChange={this.onTeamSelect}
                           checked={this.state.target === team.teamname}/>
                    <label htmlFor={id}>{team.teamname}</label>
                </div>
            )
        });

        return (
            <div className={"teamSelector"}>
                {teamRadio}
            </div>
        )
    }

    Input = () => {
        return (
            <div className={"queryBox"}>
                <input placeholder={this.props.title + " Query"} className={"query"} type={"text"} onChange={this.onQueryChange} value={this.state.query}/>
                {this.TeamSelector()}
                <button className={this.state.status === "querying" ? "disabled" : ""} onClick={this.onSubmit}>{this.state.status === "querying" ? "지구-"+this.state.target+" 해킹 시도 중..." : "ATTACK"}</button>
            </div>
        );
    }

    content = () => {
        if (this.state.status === "loading") {
            return (
                <Loading description={"다른 행성의 취약점 정보 수집 중..."}/>
            );
        } else {
            return (
                <>{this.Input()}</>
            );
        }
    }

    render() {
        return (
            <div className={"query"}>
                <div className={"title"}>
                    {this.props.title}
                </div>
                {this.state.status === "error" && <Alert type={"warning"} message={this.state.error}/>}
                {this.state.status === "success" && <Alert type={"success"} message={this.state.message}/>}
                {this.content()}
            </div>
        );
    }
}

export default Query;