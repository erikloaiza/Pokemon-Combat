import React,{Component} from'react'
import https from 'http'
import './battle.css'

import Player from '../../components/Character'
class Battle extends Component{
    constructor(props){
        super(props)
        this.state ={
            data:[]
        }
    }
    render(){
        return(
            <div className="battle-wrapper">
                {this.state.data.map(data=>{return <Player desc={data}/>})}
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
              this.setState({data:dataObjectArray});
            });
          
          }).on("error", (err) => {
            console.log("Error: " + err.message);
          });
    }
} 

export default Battle;

