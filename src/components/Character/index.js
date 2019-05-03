import React, {Component} from 'react'

import'./character.css'

import Platform from '../../assets/plattform.png'

class Character extends Component{
    constructor(props){
        super(props)
        this.state={
            maxLife:100
        }
    }
    render(){
        const name = this.props.desc?this.props.desc.stName:''
        const image = this.props.desc?this.props.desc.urlImg:''

        const def = this.props.desc?this.props.desc.nuDf:''
        const life = this.props.desc?this.props.desc.nuLife:0;
        const maxLife = this.state.maxLife;

        const isOponent = this.props.isOponent; //True is aligned to right, False is aligned to lef

        const isBeingAttacked = this.props.desc?this.props.isBeingAttacked:'';

        return(
            <div className={"character-wrapper " + (isOponent?'enemy':'player')}>
                <div className="character">
                    <img className={"avatar " + (isBeingAttacked?'avatar-tilt':'')} src={image}/>
                    <img className="plattform" src={Platform}/>
                </div>
                <div className="character-details">
                    <div>
                        <h2>{name}</h2>
                        <h3>Def: {def}</h3>
                    </div>
                    <div className="life">
                        <div style={{width:life+'%'}} className={life>50?'green':(life>25?'yellow':'orange')}></div>
                    </div>
                    <span>{life}/{maxLife}</span>
                </div>
            </div>
        );
    }
}
export default Character;