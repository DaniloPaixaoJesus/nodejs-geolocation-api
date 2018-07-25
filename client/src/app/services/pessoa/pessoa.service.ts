import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  getPessoas():any{
    return [
      { id: '1', nome: 'Danilo', enderecos: [{cep:'03090020', rua: 'rua xyz'}, {cep:'03090020', rua: 'rua xyz'}, {cep:'03090020', rua: 'rua xyz'}], sobrenome: 'sobrenome' }, 
      { id: '1', nome: 'Luana', enderecos: [{cep:'03090020', rua: 'rua xyz'}, {cep:'03090020', rua: 'rua xyz'}], sobrenome: 'sobrenome' }, 
      { id: '7', nome: 'Maria', enderecos: [{cep:'03090020', rua: 'rua xyz'}], sobrenome: 'sobrenome' },
      { id: '7', nome: 'Joao', enderecos: [{cep:'03090020', rua: 'rua xyz'}], sobrenome: 'sobrenome' }
    ]
  }
}
