import React, {Component} from 'react'

import'./character.css'

import Platform from '../../assets/plattform.png'

class Character extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.desc)
        const name = this.props.desc?this.props.desc.stName:''
        const image = this.props.desc?this.props.desc.urlImg:''
        const attacks = this.props.desc?this.props.desc.arAtacks:''

        const def = this.props.desc?this.props.desc.nuDf:''
        const life = this.props.desc?this.props.desc.nuLife:0; //Because we are chaging this value, with set it on the state
        const isOponent = this.props.isOponent; //True is aligned to right, False is aligned to lef
        return(
            <div className={"character-wrapper " + (isOponent?'enemy':'player')}>
                <div className="character">
                    <img className="avatar" src={image}/>
                    <img className="plattform" src={Platform}/>
                </div>
                <div className="character-details">
                    <div>
                        <h2>{name}</h2>
                        <h3>Def: {def}</h3>
                    </div>
                    <div className="life">
                        <div style={{width:life+'%'}}></div>
                    </div>
                    <span>{life}/100</span>
                </div>
            </div>
        );
    }
}
export default Character;