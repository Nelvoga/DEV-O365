import {IWebPartContext} from '@microsoft/sp-webpart-base';
export interface IFlujoProcesosProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  context:IWebPartContext;
}
