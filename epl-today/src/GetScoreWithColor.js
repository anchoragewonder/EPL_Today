import React from 'react';

// conditional function that renders a section of  score
export function GetScoreWithColor(props) {

    let color = "";
    if (props.match.homeScore == props.match.awayScore) {
        color = "grey";
    }
    if (props.score == props.match.awayScore) {
        color = getColorHelper(props.score, props.match.homeScore);
    }
    if (props.score == props.match.homeScore) {
        color = getColorHelper(props.score, props.match.awayScore);
    }

    return (<div className="score_style" style={{ backgroundColor: color, border: "5px solid", borderColor: color, borderRadius: "1rem" }}>{props.score}</div>);
}

function getColorHelper(score1, score2) {
    if (score1 > score2) {
        return "green";
    } else if (score1 == score2) {
        return "grey";
    } else {
        return "red";
    }
}
