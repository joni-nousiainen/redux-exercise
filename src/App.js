import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { addText } from './actions'

class AddText extends Component {
    render() {
        return (
            <div>
                <input ref='input' type='text' />
                <button onClick={e => this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }

    handleClick(e) {
        const input = this.refs.input
        const text = input.value.trim()
        this.props.onAddText(text)
        input.value = ''
    }
}

AddText.propTypes = {
    onAddText: PropTypes.func.isRequired
}

class Text extends Component {
    render() {
        return (
            <li>{this.props.text}</li>
        )
    }
}

class App extends Component {
    render() {
        const { dispatch, texts } = this.props

        return (
            <div>
                <AddText onAddText={text => dispatch(addText(text))} />
                <div>
                    <ul>
                        {this.props.texts.map((text, index) =>
                            <Text key={index} text={text.text} />
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

function select(state) {
    return {
        texts: state.texts
    }
}

export default connect(select)(App)