export class Endereco {
    id: string
    businessKey: string
    tenantId: string
    suspended: boolean
    createdAt: string
}

export class Pessoa {
    id: string
    nome: string
    sobrenome: string
    email: string
    enderecos: Endereco[]
}
