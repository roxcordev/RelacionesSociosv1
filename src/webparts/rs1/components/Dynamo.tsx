import * as React from 'react';
import './App.css';
import { IDynamoProps } from './IDynamoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import 'office-ui-fabric-react/dist/css/fabric.css';

import NavBar from './navbar/navbar';

export default class Dynamo extends React.Component {

  
    public render(): React.ReactElement<IDynamoProps> {
      return (
        
            <div>
              <NavBar 
              titulo1="item1"
              titulo2="item2"
              titulo3="item3"
              />
            </div>
  
  
      );
    }
  }
  