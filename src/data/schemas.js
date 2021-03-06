

export class BrigadaModel {
    constructor() {
        this.id = 0;
		this.descripcion = '';
		this.lugar = '';
		this.ciudad = '';
		this.fechai = new Date();
		this.fechaf = new Date();
		this.cargadoSistema = false;
		this.createdAt = new Date();
	    this.updatedAt = new Date();
    }
}
export const BrigadaSchema = {
	name: 'Brigada',
	primaryKey: 'id',
	properties: {
		id: { type: 'int', indexed: true },
		descripcion: 'string',
		lugar: 'string',
		ciudad: 'string',
		fechai: 'date',
		fechaf: 'date',
		cargadoSistema: 'bool',
		createdAt: 'date',
		updatedAt: 'date'
	}
};

export class ServidorAPIModel {
    constructor() {
        this.id = 0;
		this.protocolo = '';
		this.server = '';
		this.port = '',
		this.estado = ''
		this.cargadoSistema = false;
		this.createdAt = new Date();
	    this.updatedAt = new Date();
    }
}
export const ServidorAPISchema = {
	name: 'ServidorAPI',
	primaryKey: 'id',
	properties: {
		id: { type: 'int', indexed: true },
		protocolo: 'string',
		server: 'string',
		port: 'string',
		estado: 'string',
		cargadoSistema: 'bool',
		createdAt: 'date',
		updatedAt: 'date'
	}
};

export class UserModel {
    constructor() {
        this.id = 0;
		this.tipoDoc = '';
		this.numeroDocumento = '';
		this.nombre = '';
		this.apellido = '';
		this.genero = '';
		this.especialidad = '';
		this.nombreUsuario = '';
		this.contrasena = '';
		this.cargadoSistema = false;
		this.createdAt = new Date();
	    this.updatedAt = new Date();
    }
}
export const UsuarioSchema = {
	name: 'Usuario',
	primaryKey: 'id',
	properties: {
		id: { type: 'int', indexed: true },
		tipoDoc: 'string',
		numeroDocumento: 'string',
		nombre: 'string',
		apellido: 'string',
		genero: 'string',
		especialidad: 'string',
		nombreUsuario: 'string',
		contrasena: 'string',
		cargadoSistema: 'bool',
		createdAt: 'date',
		updatedAt: 'date'
	}
};

export class PacienteModel {
    constructor() {
        this.id = 0;
		this.tipoDoc = '';
		this.numeroDocumento = '';
		this.nombre = '';
		this.apellido = '';
		this.genero = '';
		this.fechaNaciemiento = null;
		this.ocupacion = ''
		this.nacionalidad = ''
		this.seguridadSocial = ''
		this.cualSS = ''
		this.barrioVive = ''
		this.numeroTelefono = ''
		this.acudiente = ''
		this.cargadoSistema = false;
		this.createdAt = new Date();
	    this.updatedAt = new Date();
    }
}

export const PacienteSchema = {
	name: 'Paciente',
	primaryKey: 'id',
	properties: {
		id: { type: 'int', indexed: true },
		tipoDoc: 'string',
		numeroDocumento: 'string',
		nombre: 'string',
		apellido: 'string',
		genero: 'string',
		fechaNaciemiento: 'date',
		ocupacion: { type: 'string', optional: true },
		nacionalidad: { type: 'string', optional: true },
		seguridadSocial: 'string',
		cualSS: 'string',
		barrioVive: { type: 'string', optional: true },
		numeroTelefono: { type: 'string', optional: true },
		acudiente: { type: 'string', optional: true },		
		cargadoSistema: 'bool',
		createdAt: 'date',
		updatedAt: 'date'
	}
};

export const AntencionSchema = {
	name: 'Atencion',
	primaryKey: 'id',
	properties: {
		id: { type: 'int', indexed: true },
		paciente: { type: 'Paciente' },
		lugarJornada: { type: 'string', optional: true },
		ciudad: { type: 'string', optional: true },
		fecha: { type: 'string', optional: true },
		especialidad: { type: 'string', optional: true },
		otraEspecialidad: { type: 'string', optional: true },
		createdAt: 'date',
		updatedAt: 'date'
	}
}
