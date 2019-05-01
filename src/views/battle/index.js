import React,{Component} from'react'
import https from 'http'
import './battle.css'

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
              <Player desc={enemy} isOponent/>
              <Player desc={player}/>
              <div className="attacks-gui">
                    <h1>Select next attack</h1>
                    <div className="attacks">
                        {player.arAtacks?player.arAtacks.map(attack=>{
                            return <div className="attack">{attack.stAtckName}</div>
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
} 

export default Battle;

