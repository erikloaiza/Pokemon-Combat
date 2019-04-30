import React, {Component} from 'react'

import'./character.css'

class Character extends Component{
    constructor(props){
        super(props)
        this.state={
            life:0
        }
    }
    render(){
        const name = this.props.desc.stName
        const image = this.props.desc.urlImg
        const attacks = this.props.arAtacks

        const def = this.props.desc.nuDf
        const life = this.state.life; /*Because we are chaging this value, with set it on the state*/

        return(
            <div className="player-wrapper">
                <div className="player">
                    <img className="avatar" src={image}/>
                    <img className="plattform" src='https://t4.rbxcdn.com/c14c4a590937dbaaae77636ffac4908d'/>
                </div>
                <h6>{name}</h6>
                <h6>{def}</h6>
                <h6>{life}</h6>
            </div>
        );
    }
    componentDidMount(){
        this.setState({life:this.props.desc.nuLife})
    }
}
export default Character;