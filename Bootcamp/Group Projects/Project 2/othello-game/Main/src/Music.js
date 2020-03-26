import React, { Component } from 'react';
import './App.css';
import Home from './App';
import Classical from "./audioclips/Vivaldi.mp3"
import {Howl, Howler} from 'howler';



const audioClips =[
  { sound: Classical, label:'Jazz Playlist' },
]
class App extends Component{
  SoundPlay =(src) =>{
const sound = new Howl({
src
})
sound.play()
}

RenderButtonAndSound = () =>{
 return audioClips.map((soundObj, index) => {
   return(
    <div id="playList">
    <button  key ={index} onClick ={() =>this.SoundPlay(soundObj.sound)}  >
      {soundObj.label}
    </button> 
    </div>
   )

 })
}




  render(){
    Howler.volume(1.0)
    
  return <div>
<div id="Home">
    <Home/>
    </div>
    
{this.RenderButtonAndSound()}


    </div>

}
}
export default App;
