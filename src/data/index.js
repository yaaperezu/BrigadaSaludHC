import * as SchemasBD from '../data/schemas'

var Realm = require('realm');

let ConexionRealm = new Realm({
    path: 'BrigadaSaludDatabase.realm',
    schema: [SchemasBD.BrigadaSchema, SchemasBD.ServidorAPISchema, SchemasBD.UsuarioSchema, SchemasBD.PacienteSchema, SchemasBD.AntencionSchema],
    schemaVersion: 0
});

export default ConexionRealm;