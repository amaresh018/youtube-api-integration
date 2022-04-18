import axios from 'axios'
import ListVideos from './ListVideos'
import { useEffect, useState } from 'react'

const Media = (props) => {

    const [playListData, setPlayListData] = useState([])
    const [media, setMedia] = useState('')
    const [listYoutubeVideos, setListYoutubeVideos] = useState([])

    const handleMediaChange = (e) => {
        console.log('id',e.target.value)
        let id = e.target.value
        setMedia(e.target.value)

        axios.get('https://www.googleapis.com/youtube/v3/playlistItems', { params: { part: 'snippet', playlistId: id, key: 'AIzaSyDlhp2GmF8PVMgaOUJ45HyTU2UKW8MM0GI' } })
            .then((res) => {
                console.log('list',res)
                setListYoutubeVideos(res.data.items)
            })
    }

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/playlists', { params: { part: 'snippet', channelId: 'UCQyyjuDH8KbphozxaTLBYKQ', key: 'AIzaSyDlhp2GmF8PVMgaOUJ45HyTU2UKW8MM0GI' } })
            .then((res) => {
                console.log(res)
                setPlayListData(res.data.items)
            })

    }, [])



    return (
        <div className="container d-flex">
            {
                <div>
                    <select className="form-select m-4 text-align-center" onChange={handleMediaChange}>
                        <option>Select Playlist</option>
                        {
                            playListData.map((list, i) => {
                                return <option key={i} value={list.id} >{list.snippet.title}</option>
                            })
                        }
                    </select>
                    <ListVideos listYoutubeVideos={listYoutubeVideos}/>
                </div>

                   /*  playListData.map((ele,i) => {
                        return <>
                            <div className="d-flex">
                                <div>
                                    <li key={i} className="mb-2 list-group-item">
                                       {/*  <iframe src={`https://www.youtube.com/embed/${ele.snippet.resourceId.videoId}`}
                                            frameborder='0'
                                            allow='autoplay; encrypted-media'
                                            title='video'
                                        /> <img src={ele.snippet.thumbnails.medium.url} onClick={()=>displayPlaylists(ele.id)}/></li>*/}
            {/*</div>
                            </div>

                                    </>

                    }) */}

        </div>
    )
}
export default Media
