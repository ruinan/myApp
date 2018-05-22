import * as React from 'react';

interface Iprops {
    scales: string;
}
class Scales extends React.Component {
    private constructor(props: Iprops) {
        super(props);
    }
    public render (){
        return (<div>{this.props.scales}</div>)
    }
    
    
}

export default Scales;