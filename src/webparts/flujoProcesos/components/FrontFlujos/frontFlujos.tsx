import * as React from 'react';
import { Link } from 'react-router-dom';

interface IfrontFlujosProcesosProsps{
    context:any;
}



export default class Frontal extends React.Component<IfrontFlujosProcesosProsps, any>{
    constructor(props:any){
        super(props);
    }   
    

public render():React.ReactElement<IfrontFlujosProcesosProsps>{
    return(
    <> 
    <div className='container'>
        <div>
            <div className='tituloFront'>
                <div className='d-flex justify-content-center'>
                    <h1 className='tituloF'>Flujo de Procesos</h1>
                </div>
                
            </div>
        </div>
        <div className='imgFront'>
            <div>
                <Link to="/" id="Frontal" ></Link>    
            </div>
            <div className='imagenRespon'>
                <Link to="/NuevaSolicitud" id="NvaSolicitud"><span><img   src="https://claromovilco.sharepoint.com/sites/PortaldeProcesosyMejoracontinua/DesarrolloProcesos/Imagenes/Nueva_Solicitud.png" alt="Nueva Solicitud"/></span><span>Solicitud</span></Link>
            </div>
            <div className='imagenRespon'>
                <Link to="/VerSolicitudes" id="VerSolicitud"><span><img  src="https://claromovilco.sharepoint.com/sites/PortaldeProcesosyMejoracontinua/DesarrolloProcesos/Imagenes/Ver_Solicitudes.png" alt="" /></span><span>Consultar</span></Link>
            </div>
            <div className='imagenRespon'>
                <Link to="/DocSolicitudes" id="DocSolicitud"><span><img  src="https://claromovilco.sharepoint.com/sites/PortaldeProcesosyMejoracontinua/DesarrolloProcesos/Imagenes/Documentos.png" alt=""/></span><span>Documentos</span></Link>
            </div>
            <div className='imagenRespon'>
                <Link to="/historySolicitud" id="HistorySolicitud"><img  src="https://claromovilco.sharepoint.com/sites/PortaldeProcesosyMejoracontinua/DesarrolloProcesos/Imagenes/Historicos.png" alt="" />Históricos</Link>
            </div>
            <div className='imagenRespon'>
                <Link to="/ReporteSolicitud" id="ReportSolicitud"><img  src="https://claromovilco.sharepoint.com/sites/PortaldeProcesosyMejoracontinua/DesarrolloProcesos/Imagenes/Reportes.png" alt="" />Reportes</Link>
            </div>
            <div className='imagenRespon'>  
                <Link to="/ExportSolicitud" id="ExportSolicitud"><img  src="https://claromovilco.sharepoint.com/sites/PortaldeProcesosyMejoracontinua/DesarrolloProcesos/Imagenes/excel.png" alt="" />Exportar</Link>
            </div>
        </div> 
    </div> 
    
    </>
    )
    }
}