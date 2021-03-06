import React from 'react';
import {PROFILE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX} from "../constants"

export class Profile extends React.Component {
    render() {
        const {
            playerName, teamCity, teamName, weight, height,
            playerId, pts, reb, ast, teamAbbreviation, pie,
        } = this.props.playerInfo;

        return (
            <div className="Profile">
                <div className="profile-entry player-name">{`${playerName}`}</div>

                <img className="profile-picture"
                     src={`${PROFILE_PIC_URL_PREFIX}${playerId}.png`}
                     alt="Profile"
                />

                <div className="profile-entry">
                    <div className="profile-entry-left">Team</div>
                    <div className="profile-entry-right">{`${teamCity} ${teamName}`}</div>
                </div>

                <img className="team-logo"
                     src={`${TEAM_PIC_URL_PREFIX}${teamAbbreviation}_logo.svg`}
                     alt="Profile"
                />

                <div className="profile-entry">
                    <div className="profile-entry-left">Height</div>
                    <div className="profile-entry-right">{`${height}`}</div>
                </div>

                <div className="profile-entry">
                    <div className="profile-entry-left">Weight</div>
                    <div className="profile-entry-right">{`${weight}`}</div>
                </div>

                <div className="profile-entry">
                    <div className="profile-entry-left">Points(PTS)</div>
                    <div className="profile-entry-right">{`${pts}`}</div>
                </div>

                <div className="profile-entry">
                    <div className="profile-entry-left">Assists(AST)</div>
                    <div className="profile-entry-right">{`${ast}`}</div>
                </div>

                <div className="profile-entry">
                    <div className="profile-entry-left">Rebounds(REB)</div>
                    <div className="profile-entry-right">{`${reb}`}</div>
                </div>

                <div className="profile-entry">
                    <div className="profile-entry-left">PIE</div>
                    <div className="profile-entry-right">{`${pie}`}</div>
                </div>
            </div>
        );
    }
}