import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { campListService } from "../services/app-srvs/camp-list.service"

export const MyCampsPage = () => {
    const [camps, setCamps] = useState([])

    useEffect(() => {
        getCampsFromSvs()
    }, [])

    const getCampsFromSvs = async () => {
        const data = await campListService.query()
        setCamps(data)
    };

    // console.log(camps)
    if (!camps || camps.length === 0) return <div className="loading-gif page-cntnr"><img src="/media/imgs/loading.gif" alt="" /></div>
    return <main className="my-camps-page page-cntnr">
        <section className="camps-head-wrap"></section>
        <section className="camps-grid obj-hover-anim">
            {camps.map(camp => {
                return <Link
                    to={`/c/${camp._id}`}
                    className="camp-cont"
                    key={camp._id}
                    style={{ backgroundImage: `url(${camp.background})` }}>
                    {camp.title}</Link>
            })}
        </section>
    </main>
}