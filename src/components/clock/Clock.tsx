import * as React from 'react';
import './Clock.css';
import Panel from './Panel';

class Clock extends React.Component {

    public render (){
        return (<div className='clock_container'>
            <Panel />
        </div>);
    }
}

export default Clock;