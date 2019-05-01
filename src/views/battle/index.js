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
            player:{},
            message:'Selecciona tu próximo ataque',
            isOnGoingAction:false
        }
    }
    render(){
        const enemy = this.state.enemy
        const player = this.state.player
        const isOnGoingAction = this.state.isOnGoingAction;
        return(
            <div className="battle-wrapper">
              <div id='preventClicks' style={isOnGoingAction?{'display':'block'}:{'display':'none'}}></div>
              <audio src={Music} autoPlay loop></audio>
              <audio src={MenuItem} id="Sound-item"></audio>
              <Player desc={enemy} isOponent/>
              <Player desc={player}/>
              <div className="attacks-gui">
                    <h1>{this.state.message}</h1>
                    <div className="attacks">
                        {player.arAtacks?player.arAtacks.map(attack=>{
                            return <div className="attack" 
                            onMouseOver={this.playMenuSound}
                            onClick={this.attackEnemy.bind(this,attack)}
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
    playMenuSound(){
      var sound = document.getElementById('Sound-item');
      sound.play();
    }
    attackEnemy(attack){
      const damage = attack.nuAtckPower;
      const name = attack.stAtckName;

      const {enemy}={...this.state}

      const def = enemy.nuDf;
    
      const totalDamage = (damage-def>0)?damage-def:5;

      this.setState({
        message: this.state.player.stName+' usó '+name,
        isOnGoingAction:true
      })
      setTimeout(()=>{
          enemy.nuLife -=totalDamage;
          this.setState({
            enemy:enemy
          })
        if(totalDamage==5)setTimeout(this.setState({message:"No es muy efectivo"}),1000)
        setTimeout(this.attackPlayer.bind(this),2000);
      },1000);
      
    }
    attackPlayer(){
      const attacks = this.state.enemy.arAtacks
      const attack = attacks[Math.floor(Math.random()*attacks.length)];
      const damage = attack.nuAtckPower;
      const name = attack.stAtckName;

      const {player}={...this.state}

      const def = player.nuDf;
    
      const totalDamage = (damage-def>0)?damage-def:5;

      this.setState({
        message:this.state.enemy.stName+' usó '+name
      })

      setTimeout(()=>{
        player.nuLife -=totalDamage;
        this.setState({
          player:player
        })
        if(totalDamage==5)setTimeout(this.setState({message:"No es muy efectivo"}),1000)
        setTimeout(()=>{
          this.setState({
            message:'Selecciona tu próximo ataque',
            isOnGoingAction:false
          })
        },1000);
      },2000);
      
    }
} 

export default Battle;

