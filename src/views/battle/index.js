import React,{Component} from'react'
import https from 'http'
import './battle.css'

import Music from '../../assets/music.mp3'
import MenuItem from '../../assets/menu-item.wav'


import Player from '../../components/Character'
class Battle extends Component{
    constructor(props){
        super(props)
        this.state ={
            enemy:{},
            player:{}
        }
    }
    render(){
        const enemy = this.state.enemy
        const player = this.state.player
        return(
            <div className="battle-wrapper">
              <audio src={Music} autoPlay loop></audio>
              <audio src={MenuItem} id="Sound-item"></audio>
              <Player desc={enemy} isOponent/>
              <Player desc={player}/>
              <div className="attacks-gui">
                    <h1>Select next attack</h1>
                    <div className="attacks">
                        {player.arAtacks?player.arAtacks.map(attack=>{
                            return <div className="attack" onMouseOver={this.PlayMenuSound}
                            >
                            {attack.stAtckName}</div>
                        }):''}
                    </div>      
              </div>
            </div>
        );
    }
    componentDidMount(){
        https.get('http://www.mocky.io/v2/5cc7aa06320000af39b952af', (resp) => {
            let data = '';
          
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
              data += chunk;
            });
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
              var dataObjectArray = eval('(' + data + ')')
              this.setState({
                enemy:dataObjectArray[0],
                player:dataObjectArray[1]
              });
            });
          
          }).on("error", (err) => {
            console.log("Error: " + err.message);
          });
    }
    PlayMenuSound(){
      var sound = document.getElementById('Sound-item');
      sound.play();
    }
} 

export default Battle;

