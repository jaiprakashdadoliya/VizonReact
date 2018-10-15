import * as React from 'react';

export class Loading extends React.Component {
    render() {
        return (
            <div style={{ display: 'inline-block' }} className="text-center">
                <img  src={require('../../assets/images/loader.gif')} />
            </div>
        );
    }
}