
import VideoPlayer from "../VideoPlayer/index.jsx"
import styles from "../FeedVideos/styles.module.css"

const VIDEOS = [

    {
        id: 1,
        author: 'Perfil1',
        description: 'Esto es la descripción',
        likes: 4020,
        shares: 3594,
        comments: 400,
        songTitle: "Jordan - Ryan Castro", 
        albumCover: "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/63b62ae295d74896b6039c5ab53e7a0e~c5_200x200.jpeg", 
        src: 'https://v16-webapp.tiktok.com/106459b84743ad98fc2e74c62dbca100/61fc91a1/video/tos/maliva/tos-maliva-ve-0068c799-us/e569193c91a4457a9c7d1c9092930bdd/?a=1988&br=7472&bt=3736&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-307nz7Th.CJxlXq&l=202202032037050101910410192738688C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2dnaDs6Zjg0OTMzZzczNEApZTs8NGg2PDw4NzpoZ2dmaGczbmszcjRvMGpgLS1kMS9zcy1fYTYvM2A0MjE2Li8uYzU6Yw%3D%3D&vl=&vr='
    }, 
    {
        id: 2,
        author: 'Perfil2',
        likes: 300,
        shares: 34,
        comments: 4,
        description: 'Esto es la descripción',  
        songTitle: "Jordan - Ryan Castro", 
        albumCover: "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/63b62ae295d74896b6039c5ab53e7a0e~c5_200x200.jpeg", 
        src: 'https://v16-webapp.tiktok.com/0381aa3a1f53f98a70bafb3138e0b45e/61fb0653/video/tos/useast2a/tos-useast2a-pve-0068/9147cc7b45fe44bcbd7917195d6b191c/?a=1988&br=2288&bt=1144&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-307nz7ThUYv.lXq&l=20220202163131010223078148106D8D04&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3U0ZmQ6ZjNuOjMzNzczM0ApODM8ODc6aDw6NzdkZjY1ZWdxXmFycjRnNm5gLS1kMTZzcy9gYjQvMV8yYzZjL2JfLy46Yw%3D%3D&vl=&vr='
    }, 

]


export default function FeedVideos () {
    return (
       

         VIDEOS.map(video => {
             return(
                <div  key={video.id} className={styles.item}> 
                     <VideoPlayer {...video} />
                </div>)
        })

        
    

    )
   
    } 
