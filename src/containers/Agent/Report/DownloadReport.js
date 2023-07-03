import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Download extends React.Component {
  render() {
    let download = [];
    let nameServiceReport;
    let serviceName;
    if (this.props.reportjobs.length > 0) {
      this.props.reportjobs.map( d => (
        nameServiceReport = d.attributes.job_details.map( nS => {
          if(nS.service.type_service === 'base'){
            serviceName = nS.service.name
            return nS.service.name
          } return null;
        }),
        download.push({
          client: d.attributes.customer.first_name + d.attributes.customer.last_name,
          nameService: serviceName,
          total: d.attributes.total,
          vat: d.attributes.vat,
          serviceFee: d.attributes.service_fee,
          agentEarnings: d.attributes.agent_earnings,
        })
      ))
    }
    return (
      <div >
        <ExcelFile>
          <ExcelSheet data={download} name="Reporte">
            <ExcelColumn label="Servicio" value="nameService"/>
            <ExcelColumn label="Cliente" value="client"/>
            <ExcelColumn label="Total trabajo" value="total"/>
            <ExcelColumn label="I.V.A" value="vat"/>
            <ExcelColumn label="Comisión Noc Noc" value="serviceFee"/>
            <ExcelColumn label="TOTAL" value="agentEarnings"/>
          </ExcelSheet>
        </ExcelFile>
      </div>
    );
  }
}

export default Download