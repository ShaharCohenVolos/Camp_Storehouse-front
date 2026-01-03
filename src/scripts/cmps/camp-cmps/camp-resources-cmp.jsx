import { Fragment } from "react"


export const CampResources = ({ resources, editBtn }) => {

    return <Fragment>

        <article className="camp-maps-cont camp-res-cntnr camp-res-dits-cntnr">
            <h3>Maps:</h3>
            {
                resources.maps.map(map => {
                    return <div key={map.id}>{map.title}</div>
                })
            }
        </article>

        <article className="camp-npcs-cont camp-res-cntnr camp-res-dits-cntnr">
            <h3>NPCs:</h3>
            {
                resources.npcs.map(npc => {
                    return <div key={npc.id}>{npc.name}</div>
                })
            }
        </article>

        <article className="camp-mobs-cont camp-res-cntnr camp-res-dits-cntnr">
            <h3>Mobs:</h3>
            {
                resources.mobs.map(mob => {
                    return <div key={mob.id}>{mob.title}</div>
                })
            }
        </article>

        <article className="camp-quests-cont camp-res-cntnr camp-res-dits-cntnr">
            <h3>Quests:</h3>
            {
                resources.quests.map(quest => {
                    return <div key={quest.id}>{quest.title}</div>
                })
            }
        </article>
    </Fragment>
}

{/* <span className="res-dits-edit-sec">
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faTrashCan} />
            </span> */}
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faEdit, faTrashCan, faPlus } from "@fortawesome/free-solid-svg-icons"