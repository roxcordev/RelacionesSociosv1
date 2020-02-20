import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import Dynamo from './components/Dynamo';
import { IDynamoProps } from './components/IDynamoProps';

import styles from './Rs1WebPart.module.scss';
import * as strings from 'Rs1WebPartStrings';

export interface IRs1WebPartProps {
  description: string;
}

export default class Rs1WebPart extends BaseClientSideWebPart <IRs1WebPartProps> {

  public render(): void {
    let element: React.ReactElement;
    
    element = React.createElement(Dynamo)
    ReactDom.render(element, this.domElement);

  }
  

  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [
          {
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('description', {
                label: strings.DescriptionFieldLabel
              })
            ]
          }
        ]
      }
    ]
  };
}
}
