
import clsx from 'clsx';
import { useRef, useState} from 'react';
import styles from './styles.module.css';




export default function VideoPlayer({src}){

    
    const [playing, setPlaying] = useState(false)
    const video = useRef(null)
   
    const handlePlay = () => {
        
        const {current: videoEl} = video
        playing
            ? videoEl.pause()
            : videoEl.play()

            setPlaying(!playing)


       //El code de arriba es otra forma de hacer if else y el de abajo es lo mismo, pero haciendo if else.

      /* if(playing){ 
            video.current.pause()
        } else {
            video.current.play()
        }*/

    
        
    }

    const playerClassname = clsx(styles.player,{
        [styles.hidden]: playing, 

        })
    
    return(
<div className={styles.wrapper}>
    <video 

        className ={styles.video} 
        controls={false}
        loop
        onClick={handlePlay}
        ref={video}
        src={src}
    />

    <i className = {playerClassname} onClick={handlePlay}></i>
    
    

    </div>
    
    )


}