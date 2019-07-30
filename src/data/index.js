import * as SchemasBD from '../data/schemas'

export const dataBaseOptions = {
    path: 'BrigadaSaludDatabase.realm',
    schema: [SchemasBD.BrigadaSchema, SchemasBD.ServidorAPISchema, SchemasBD.UsuarioSchema, SchemasBD.PacienteSchema, SchemasBD.AntencionSchema],
    schemaVersion: 0
}