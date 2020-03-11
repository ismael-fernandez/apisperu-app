import axios from 'axios'
const baseURL = "https://tech-sol.herokuapp.com";

const header = {
    timeout: 10000,
}

class Api {

    async ruc(numero) {
        const response = await axios.get(`${baseURL}/api/v1/ruc/${numero}`, header)
        const data = await response.data.payload
        return data;
    }
    async dni(numero) {
        const response = await axios.get(`${baseURL}/api/v1/dni/${numero}`, header)
        const data = await response.data.payload
        return data;
    }
    async getDatos(type, numero) {
        try {
            if (type === 1) {
                const response = await axios.get(`${baseURL}/api/v1/dni/${numero}`, header)
                const data = await response.data.payload
                //console.log("data ", data)
                if (!data) {
                    return null
                }
                return this.formatDNI(data);
            }
            if (type === 2) {
                const response = await axios.get(`${baseURL}/api/v1/ruc/${numero}`, header)
                const data = await response.data.payload
                //console.log("data ", data)

                if (!data) {
                    return null
                }
                return this.formatRUC(data);
            }
        } catch (error) { return null}
        
    }
    
    formatDNI(data) {
        const res = [
            {
                name: 'DNI',
                value: data.dni
            },
            {
                name: 'NOMBRES',
                value: data.nombres
            },
            {
                name: 'APELLIDO PATERNO',
                value: data.apellidoPaterno
            },
            {
                name: 'APELLIDO MATERNO',
                value: data.apellidoMaterno
            },
            {
                name: 'CODIGO VERIFICACIÓN',
                value: data.codVerifica
            }
        ]
        return res;
    }

    formatRUC(data) {
        const res = [
            {
                name: 'RUC',
                value: data.ruc
            },
            ,
            {
                name: 'TIPO CONTRIBUYENTE',
                value: data.tipo
            },
            {
                name: 'RAZON SOCIAL',
                value: data.razonSocial
            },
            {
                name: 'NOMBRE COMERCIAL',
                value: data.nombreComercial
            },
            {
                name: 'DEPARTAMENTO',
                value: data.departamento != null ? data.departamento : '-'
            },
            {
                name: 'PROVINCIA',
                value: data.provincia != null ? data.provincia : '-'
            },
            {
                name: 'DISTRITO',
                value: data.distrito != null ? data.distrito : '-'
            },
            {
                name: 'DOMICILIO FISCAL',
                value: data.direccion
            },
            {
                name: 'FECHA INSCRIPCIÓN',
                value: data.fechaInscripcion
            },
            {
                name: 'TELEFONOS',
                value: data.telefonos
            },
            {
                name: 'SISTEMA DE EMISION',
                value: data.sistElectronica
            },
            {
                name: 'ACTIVIDAD EXTERIOR',
                value: data.actExterior
            },
            {
                name: 'ACTIVIDAD ECONÓMICA',
                value: data.actEconomicas
            },
            {
                name: 'AFILIADO A PLE',
                value: data.fechaPle != null ? data.fechaPle : '-'
            },
            {
                name: 'PADRONES',
                value: data.padrones
            }
        ]
        return res;
    }
}

export default new Api();