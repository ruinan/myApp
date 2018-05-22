import * as React from "react";

interface IProps {
    message: string;
}
export class Header extends React.Component<IProps, {}>{
    public render (){
        return(
            <h1>{this.props.message}</h1>
        );
    }
}

