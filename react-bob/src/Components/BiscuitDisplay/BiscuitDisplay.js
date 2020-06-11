import React from 'react'
import './BiscuitDisplay.scss'
import BiscuitCard from './BiscuitCard/BiscuitCard'

class BiscuitDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            biscuitsToDisplay: []
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.allBiscuits !== prevProps.allBiscuits) {
            this.setState({
                biscuitsToDisplay: this.props.allBiscuits
            })
        }
    }

    render () {
        return (
            <div className="App">
                <h3>Click on your favourite</h3>
                <div className='comparison'>
                    <BiscuitCard BiscuitSelected={this.state.biscuitsToDisplay[0]} generateNewCards={this.props.generateNewCards}/>
                    <h2>VS</h2>
                    <BiscuitCard BiscuitSelected={this.state.biscuitsToDisplay[1]} generateNewCards={this.props.generateNewCards}/>
                </div>
            </div>
        )
    }
}

export default BiscuitDisplay