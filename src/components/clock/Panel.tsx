import * as React from 'react';
import './Panel.css';
import Scales from 

class Panel extends React.Component{

    public render(){
        return (<div className='panel'>
            <div className='scale-container'>
                <Scales scale="12"/>
            </div>
        </div>);
    }

}

export default Panel;