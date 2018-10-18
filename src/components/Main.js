import React from 'react';
import {Profile} from "./Profile"
import nba from 'nba';
import {DataViewContainer} from "./DataViewContainer"

window.nba = nba;

export class Main extends React.Component {
    state = {
        playerInfo: {
            playerId: 201939
        }
    }

    componentDidMount() {
        const playerId = nba.findPlayer('Stephen Curry').playerId;

        nba.stats.playerInfo({PlayerID: 201939}).then(
            (info) =>{
                const playerInfo = {
                    ...info.commonPlayerInfo[0],
                    ...info.playerHeadlineStats[0]
                };

                this.setState({
                   playerInfo
                });
            }
        );
    }


    render() {
        return (
            <div className="main">
                <Profile playerInfo={this.state.playerInfo} />
                <DataViewContainer playerId={this.state.playerInfo.playerId}/>
            </div>
        );
    }
}