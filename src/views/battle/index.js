import React,{Component} from'react'
import https from 'http'
import './battle.css'

import Music from '../../assets/music.mp3'
import MenuItem from '../../assets/menu-item.wav'
import HurtEffective from '../../assets/hurt-effective.wav'
import HurtIneffective from '../../assets/hurt-ineffective.wav'


import Player from '../../components/Character'
class Battle extends Component{
    constructor(props){
        super(props)
        this.state ={
            enemy:{},
            player:{},
            isEnemyAttacked:false,
            isPlayerAttacked:false,

            message:'Selecciona tu próximo ataque',

            isOnGoingAction:false,
            isEndGame:false,
            
            nameWinner:''
        }
    }
    render(){
        const enemy = this.state.enemy
        const player = this.state.player

        const isEnemyAttacked=this.state.isEnemyAttacked;
        const isPlayerAttacked=this.state.isPlayerAttacked;

        
        const isOnGoingAction = this.state.isOnGoingAction;
        const isEndGame = this.state.isEndGame;

        const nameWinner = this.state.nameWinner;
        
        if(enemy.nuLife<=0||player.nuLife<=0)this.endGame();
        return(
            <div className="battle-wrapper">
              <div id='preventClicks' style={isOnGoingAction?{'display':'block'}:{'display':'none'}}></div>
              <div id='endGame' style={isEndGame?{'display':'flex'}:{'display':'none'}}>
                <h2>{nameWinner} ha ganado la batalla</h2>
              </div>

              <audio src={Music} autoPlay loop volume='0.0'></audio>
              <audio src={MenuItem} id="Sound-item"></audio>
              <audio src={HurtEffective} id="Sound-hurt-effective"></audio>
              <audio src={HurtIneffective} id="Sound-hurt-ineffective"></audio>

              <Player desc={enemy} isOponent isBeingAttacked={isEnemyAttacked}/>
              <Player desc={player} isBeingAttacked={isPlayerAttacked}/>


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
    playEffectiveHurtSound(){
      var sound = document.getElementById('Sound-hurt-effective');
      sound.play();
    }
    playInEffectiveHurtSound(){
      var sound = document.getElementById('Sound-hurt-ineffective');
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
        isOnGoingAction:true,
        isEnemyAttacked:true
      })
      setTimeout(()=>{
          enemy.nuLife -=totalDamage;
          setTimeout(()=>this.setState({isEnemyAttacked:false}),1000)
          this.setState({
            enemy:enemy
          })
          if(totalDamage==5){
            setTimeout(()=>this.setState({message:"No es muy efectivo"}),1000)
            this.playInEffectiveHurtSound();
          }
          else{
            this.playEffectiveHurtSound()
          }
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
        message:this.state.enemy.stName+' usó '+name,
      })

      setTimeout(()=>{
        player.nuLife -=totalDamage;
        this.setState({
          player:player,
          isPlayerAttacked:true
        })
        if(totalDamage==5){
          this.setState({message:"No es muy efectivo"})
          this.playInEffectiveHurtSound();
        }
        else{
          this.playEffectiveHurtSound()
        }
        setTimeout(()=>this.setState({isPlayerAttacked:false}),1000)

        setTimeout(()=>{
          this.setState({
            message:'Selecciona tu próximo ataque',
            isOnGoingAction:false
          })
        },1000);
      },2000);
    }
    endGame(){
      if(this.state.isEndGame!=true){
        var winner = (this.state.enemy.nuLife<=0)?this.state.player.stName:this.state.enemy.stName
        this.setState({
          nameWinner:winner,
          isEndGame:true
        })
        setTimeout(window.location.reload.bind(window.location), 5000);
      }
    }
} 

export default Battle;

