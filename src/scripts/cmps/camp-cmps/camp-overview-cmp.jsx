import { useEffect, useState } from "react"
import { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faForward, faBackward, faEdit, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons"

export const CampOverview = ({camp, storySFIdx, setStorySFIdx}) => {

    const chngStorySF = (bool) => {
        if (bool === true) {
            if (storySFIdx === camp.storySoFar.length - 1) {
                setStorySFIdx(0)
            } else setStorySFIdx(storySFIdx + 1)
        } else {
            if (storySFIdx === 0) {
                setStorySFIdx(camp.storySoFar.length - 1)
            } else setStorySFIdx(storySFIdx - 1)
        }
    }

return <Fragment>
     <article className="players-cntnr camp-res-cntnr">
                <h3>
                    Player Characters:
                </h3>
                {camp.players.map(player => {
                    return <div className="player-cntnr desc-txt" key={player.id}>{player.name}</div>
                })}

            </article>

            <article className="story-sf-cont camp-res-cntnr">
                <h3 className="story-sf-title">
                    The Story So Far ~ Episode ~ {camp.storySoFar[storySFIdx] ? camp.storySoFar[storySFIdx].ep : ""}
                </h3>
                <button className="ssf-btn ssf-btn-prev" onClick={() => chngStorySF(false)}>
                    <span className="btn-prev-icn">
                        <FontAwesomeIcon icon={faBackward} />
                    </span>
                </button>
                <span className="story-sf">
                    {camp.storySoFar[storySFIdx] ? <span className="desc-txt">
                        <span>{storySFIdx > 0 ? "... " : ""}</span>
                        {camp.storySoFar[storySFIdx].story}
                        <span>{storySFIdx < camp.storySoFar.length - 1 ? " ..." : "."}</span>
                    </span> : "You begin in a tavern..."}
                </span>
                <button className="ssf-btn ssf-btn-nxt" onClick={() => chngStorySF(true)}>
                    <span className="btn-nxt-icn">
                        <FontAwesomeIcon icon={faForward} />
                    </span>
                </button>
            </article>
</Fragment>
}