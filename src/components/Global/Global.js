import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'

class Global extends Component {
    
    render() {
        return (
            <>
                <ul className="global labels">
                    {
                        this.props.all.Global && Object.keys(this.props.all.Global).map((val,index) =>
                            <li key={index}>{val}</li>
                        )
                    }
                </ul>
                <ul className="global numbers">
                    {
                        this.props.all.Global && Object.values(this.props.all.Global).map((val,index) =>
                            <li key={index}>{val.toLocaleString()}</li>
                        )
                    }
                </ul>
            </>
        )
    }
}

const mapStateToProps = state => ({
    all: state.covid.allData
});

export default connect(mapStateToProps)(Global);