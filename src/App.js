import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: 'this is the state text',
            cat: 0
        }
    }


update ( e ){
        this.setState({txt: e.target.value})
}


    render(){
        // let txt = this.props.txt
        return (
            <div id="root">
                <Title text="wih"/>
                <h1>{this.state.txt}</h1>
                <Widget update={this.update.bind(this)} />
                <Button>I <Heart/>React</Button>
                <b>Bold</b>
            </div>
        )
    }
}

App.PropTypes = {
    txt: React.PropTypes.String,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "this is the default txt"
}

const Widget = (props) =>
    <input type="text" onChange={props.update} />

const Button = (props) => <button>{props.children}</button>

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
    text(props, propName, component){
        if(!(propName in props)){
            return new Error(`missing ${propName}`)
        }
        if (props[propName].Length < 6){
            return new Error(`${propName} was too short`)
        }
    }
}

class Heart extends React.Component {
    render(){
        return <span>&hearts;</span>
    }
}

// const App = () => <h1>Hello</h1>

export default App