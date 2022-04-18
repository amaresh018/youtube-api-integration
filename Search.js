import axios from 'axios'
import Media from './Media'
import { useState, useEffect } from 'react'
const Search = (props) => {
    return (
        <div className='container'>
            
               <Media playListData={playListData} displayPlaylists={displayPlaylists}/> 
            
        </div>
    )
}

export default Search;
