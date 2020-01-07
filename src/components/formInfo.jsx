import React, { Component } from 'react';

class FormInfo extends Component {
    render() {
        return (
            <div >
                <h2 className="addForm--addInfo">{this.props.formInfo}</h2>
            </div>
        );
    }
}

export default FormInfo;