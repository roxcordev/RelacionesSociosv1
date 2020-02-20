import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import './navbar.css';
import { InavbarProps } from './InavbarProps';


export default class NavBasicExample extends React.Component<InavbarProps>{
    constructor(props: InavbarProps) {
        super(props)
        
    }
   
    
    render() {
        let navbarLeft: JSX.Element = <div className="nav">
            
                                        <p>{this.props.titulo1}</p>
                                        <p>{this.props.titulo2}</p>
                                        <p>{this.props.titulo3}</p>
                                        </div>     
             

        return (
            <div>
               {navbarLeft}
            </div>
        )
    }
}



