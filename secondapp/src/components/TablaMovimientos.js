import React from "react"


function Tabla(){
    return(
        <container class="Table-container">
            <table class="Table-movimientos">
                    <tr class="table-title">
                        <th colspan="7">Modulo de seguimiento de Ventas</th>
                    </tr>
                    <tr class="table-header">
                        <th>Fecha</th>
                        <th>Id</th>
                        <th>Descrripción</th>
                        <th>Unidades</th>
                        <th>Valor</th>                        
                        <th>Ingreso</th>
                        <th>Egreso</th>                        
                    </tr>
                    <tr class="movements">
                        <th>22/10/2022</th>
                        <th>25jbh</th>
                        <th>Pacos de Marihuana 5g</th>
                        <th>5</th>
                        <th>13500</th>                        
                        <th>0</th>
                        <th>13500</th>                        
                    </tr>
                    <tr class="table-footer">
                        <th class="footer-balance" colspan="6">Balance    :</th>                        
                        <th>-13500</th>                        
                    </tr>
            </table>
        </container>
    )
}

export default Tabla;