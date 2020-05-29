import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { randomColor } from '../../utilities/data';
import './style.css';

class Global extends PureComponent {

    render() {
        return (
            <>
                <ul className="global numbers">
                    {
                        this.props.globalData && Object.values(this.props.globalData).map((val, index) =>
                            index !== 0 ? <li key={index} style={{background: randomColor()}}> <p>{Object.keys(this.props.globalData)[index].replace(/([a-z](?=[A-Z]))/g, '$1 ')}</p>  {val.toLocaleString()}</li> : null
                        )
                    }
                </ul>
            </>
        )
    }
}

const mapStateToProps = state => ({
    globalData: state.covid.globalRecords
});

export default connect(mapStateToProps)(Global);