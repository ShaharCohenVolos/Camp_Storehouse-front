import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { campListService } from "../services/app-srvs/camp-list.service"
import { CampOverview } from "../cmps/camp-cmps/camp-overview-cmp.jsx"
import { CampResources } from "../cmps/camp-cmps/camp-resources-cmp.jsx"


export const CampPage = () => {
    const [camp, setCamp] = useState({})
    const [storySFIdx, setStorySFIdx] = useState(0)
    const params = useParams()

    useEffect(() => {
        getCamp(params.campId)
    }, [])

    const getCamp = async (id) => {
        let campById = await campListService.getCampById(id)
        setCamp(campById)
        setStorySFIdx(campById.storySoFar.length - 1)
    }

    



    if (!camp || !camp._id) return <div className="page-cntnr"><img src="/media/imgs/loading.gif" alt="" /></div>
    return <main className="camp-page page-cntnr"
    // style={{ backgroundImage: `url(${camp.background})` }}
    >

        <section className="camp-header-cntnr camp-res-cntnr">

            <article className="camp-title-cntnr">
                <h2 className="camp-title">{camp.title}</h2>
            </article>

            <article className="camp-overview desc-txt">{camp.overview}</article>

        </section>

        <section className="camp-dits-cntnr">

           <section className="camp-overview-cont desc-txt ">
                <CampOverview camp={camp} storySFIdx={storySFIdx} setStorySFIdx={setStorySFIdx} />
            </section>

            <section className="camp-resource-cont desc-txt ">
                <CampResources resources={camp.campResources} />
            </section>

        </section>

    </main>
}