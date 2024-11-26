import * as React from 'react';
import { IFlujoProcesosProps } from './IFlujoProcesosProps';
import {PNP} from '../Utilidad/Util';

import '../assets/CSS/Styless.css'

import {HashRouter,Switch,Route} from 'react-router-dom'

import Frontal from './FrontFlujos/frontFlujos';
import NvaSolicitud from './NuevaSolicitud/nuevaSolicitud';
import VerSolicitud from './VerSolicitudes/verSolicitudes';
import DocSolicitud from './Documentos/Documentos';
import HistorySolicitud from './HistoryDocs/historySolicitud';
import ReportSolicitud from './ReporteSolicitud/ReporteSolicitud';
import ExportSolicitud from './ExporteSolicitud/ExportSolicitud';


interface IFlujoProcesosWebPartProps{
  context:any
}


export default class FlujoProcesos extends React.Component<IFlujoProcesosWebPartProps, any> {
  public util:PNP;
    constructor(props:any){
      super(props);
      this.util=new PNP(props.context)
    }


    public render(): React.ReactElement<IFlujoProcesosProps> {
    return (
      <>
        <div className='container'>
          <HashRouter basename='/'>
              <Frontal context={this.util}></Frontal> 
              <div className="col py-3">
                  <div className="row">
                    <Switch>
                      <Route exact path="/NuevaSolicitud" component={()=><NvaSolicitud  nvaSolicit={this.util} ></NvaSolicitud>}></Route>
                      <Route exact path="/VerSolicitudes" component={()=><VerSolicitud Versolicit={this.util}></VerSolicitud>}></Route>
                      <Route exact path="/DocSolicitudes" component={()=><DocSolicitud docSolicit={this.util}></DocSolicitud>}></Route>
                      <Route exact path="/historySolicitud" component={()=><HistorySolicitud HistSolicit={this.util}></HistorySolicitud>}></Route>
                      <Route exact path="/ReporteSolicitud" component={()=><ReportSolicitud RepSolicit={this.util}></ReportSolicitud>}></Route>
                      <Route exact path="/ExportSolicitud" component={()=><ExportSolicitud ExpSolicit={this.util}></ExportSolicitud>}></Route>
                    </Switch>
                  </div>
              </div>
            </HashRouter>
          </div> 
       </> 
    );
  }
}
