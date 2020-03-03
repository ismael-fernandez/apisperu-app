import axios from 'axios'
const baseURL = "https://dniruc.apisperu.com/api/v1/";
const TOKEN = "?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Impob3dyYXlzb24xMkBnbWFpbC5jb20ifQ._fCc69dqvWFGijKwfeOEu4XEZmTCVTgaAfNwSyRMFFA"
const BASE_API = 'https://yts.mx/api/v2/';
const header = {
    timeout: 2000,
    headers: {
        "authorization": "bearer B5wAVlLFwRf69UGSd6aOLdPlRoLnqvwR"
    }
}

class Api {

    async ruc(numero) {
        const response = await axios.get(`https://apisperu.tech-api.com/api/v1/ruc/${numero}`, header)
        const data = await response.data.payload
        return data;
    }
    async dni(numero) {
        const response = await axios.get(`https://apisperu.tech-api.com/api/v1/dni/${numero}`, header)
        const data = await response.data.payload
        return data;
    }
    async getDatos(type, numero) {
        if (type === 1) {
            const response = await axios.get(`https://apisperu.tech-api.com/api/v1/dni/${numero}`, header)
            const data = await response.data.payload
            if(!data){
                return null
            }
            return this.formatDNI(data);
        }
        if (type === 2) {
            const response = await axios.get(`https://apisperu.tech-api.com/api/v1/ruc/${numero}`, header)
            const data = await response.data.payload
            if (!data) {
                return null
            }
            return this.formatRUC(data);
        }
    }
    formatDNI(data) {
        const res = [
            {
                name: 'dni',
                value: data.dni
            },
            {
                name: 'Nombres',
                value: data.nombres
            },
            {
                name: 'nombreComercial',
                value: `${data.apellidoPaterno} ${data.apellidoMaterno}`
            },
            {
                name: 'codigo',
                value: data.codVerifica
            }
        ]
        return res;
    }
    formatRUC(data) {
        const res = [
            {
                name: 'ruc',
                value: data.ruc
            },
            ,
            {
                name: 'Tipo Contribuyente',
                value: data.tipo
            },
            {
                name: 'razonSocial',
                value: data.razonSocial
            },
            {
                name: 'Nombre Comercial',
                value: data.nombreComercial
            },            
            {
                name: 'Departamento',
                value: data.departamento != 'null' ? data.departamento:'-'
            }, 
            {
                name: 'Provincia',
                value: data.provincia != 'null' ? data.provincia : '-'
            }, 
            {
                name: 'Distrito',
                value: data.distrito != 'null' ? data.distrito : '-'
            },
            {
                name: 'Domicilio Fiscal',
                value: data.direccion
            },
            {
                name: 'Fecha Inscripcion',
                value: data.fechaInscripcion
            }, 
            {
                name: 'Telefonos',
                value: data.telefonos
            }, 
            {
                name: 'Sistema de Emisión',
                value: data.sistElectronica
            }, 
            {
                name: 'Actividad Exterior',
                value: data.actExterior
            }, 
            {
                name: 'Actividad Económica',
                value: data.actEconomicas
            },
            {
                name: 'Afiliado a PLE',
                value: data.fechaPle
            },
            {
                name: 'Padrones',
                value: data.padrones
            },
        ]
        return res;
    }
}

export default new Api();