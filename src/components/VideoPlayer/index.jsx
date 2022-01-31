
import {usseEffect, useRef, useState} from 'react';
import styles from './styles.module.css';


const SRC = 'https://v16-webapp.tiktok.com/b70b52be29601e95a27c1f4fd78c9e12/61f87784/video/tos/useast2a/tos-useast2a-ve-0068c003/5852ec991f944d96968e56d1ce70e39b/?a=1988&br=1920&bt=960&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-307nz7ThQAH.lXq&l=202201311757250102231280502537FDE6&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amxrO2Q6ZnZ5OjMzNzczM0ApNmQ2O2Y7Z2VnN2Y0NjU8NGcuLmNncjQwLmtgLS1kMTZzczExL14vLS5iXy1fNGJjL2A6Yw%3D%3D&vl=&vr='

export default function VideoPlayer(){

    const [playing, setPlaying] = useState(false)
    const video = useRef()
   
    const handlePlay = () => {
       
        if(playing){ 
            video.current.pause()
        } else {
            video.current.play()
        }

        setPlaying(!playing)
        
    }

    
    return(
<div>
    <video 

        className ={styles.video} 
        src={SRC} 
        controls={false}
        ref={video}

    />

    <button className = {styles.player} onClick={handlePlay}></button>
    
    </div>
    
    )


}