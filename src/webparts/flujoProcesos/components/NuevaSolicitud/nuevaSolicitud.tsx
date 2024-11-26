import * as React from "react";
import Select from 'react-select';
interface INuevaSolicitudProps{
    nvaSolicit:any;
}

export default class NvaSolicitud extends React.Component<INuevaSolicitudProps, any>{
    constructor(props:any){
        super(props);
        this.state={
            arrAnalista:[],
            Seleccionado:''
            
        }
    }

componentDidMount(): void {
    this.getItems();
    
  }
  
public SelectChange(ev: any): void {
    console.log(ev.value);
   }

  public getItems(){
    this.props.nvaSolicit.getItemsList('Analistas', 'Analista/Title,*','','Analista')
    .then((res:any)=>{
        res && res.length > 0?
        res.map((items:any)=>(
        this.state.arrAnalista.push({label:items.Analista.Title, value:items.AnalistaId})
        )):[];
   })
   this.setState(console.log(this.state.arrAnalista))  
}  


    public render():React.ReactElement<INuevaSolicitudProps>{
        return(
            <section>
                <div className="container-fluid">
                   <div className="row">
                       <div className="d-flex justify-content-center TitNewRegistro">
                           <span className="TitleNewReg">Registro de Documentos</span>
                       </div>
                   </div>
                   <div className="card">
                       <div className="card-body">
                           <div className="form-group">
                               <label>Título del documento </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control" /> 
                               
                           </div>
                           <div className="form-group">
                               <label>Analista </label><span className="campoRequerido">*</span>
                                <Select
                                        
                                       options ={this.state.arrAnalista}
                                       placeholder='Seleccione...'  
                                       onChange={(ev)=>this.SelectChange(ev)}
                                       />
                           </div>
                           <div className="form-group">
                               <label>Tipo de documento </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div>
                           <div className="form-group">
                               <label>Macroproceso </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div>
                           <div className="form-group">
                               <label>Proceso </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div>
                           <div className="form-group">
                               <label>Tipo de solución </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div>
                           <div className="form-group">
                               <label>Codigo del documento </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div>
                           <div className="form-group">
                               <label>Versión </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div>
                           <div className="form-group">
                               <label>Proceso SOX </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div>
                           <div className="form-group">
                               <label>Segmento </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div>
                           <div className="form-group">
                               <label>Estado </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div>
                           <div className="form-group">
                               <label>Observaciones </label><span className="campoRequerido">*</span>
                               <textarea  name="docCliente" className="form-control"  rows={4} cols={40}/>
                           </div>
                           <div className="form-group">
                               <label>Fecha de publicación </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div>
                           <div className="form-group">
                               <label>Norma </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div>
                           <div className="form-group">
                               <label>Tipo de documento </label><span className="campoRequerido">*</span>
                               
                                <div>
                                    <label>
                                        <input type="radio" name="myRadio" value="Link" />
                                        Link
                                     </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name="myRadio" value="Archivo" />
                                        Archivo
                                     </label>
                                </div>
                            </div>
                            <div className="form-group">
                               <label>Número de caso BPM </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div>
                           <div className="form-group">
                               <label>Direcciones </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div>
                           <div className="form-group">
                               <label>Gerencias </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div>
                           <div className="form-group">
                               <label>Lider </label><span className="campoRequerido">*</span>
                               <input type="text" name="docCliente" className="form-control"   />
                           </div> 
                       </div>
                       <div className="card-footer">
                           <div className="justify-content-end">
                               <button type="button" className="btn btn-secondary" >CANCELAR</button>
                               <button type="button" className="btn btn-danger" >GUARDAR</button>
                           </div>
                       </div>
                    </div>
                </div>
            </section>
        )
    }
}