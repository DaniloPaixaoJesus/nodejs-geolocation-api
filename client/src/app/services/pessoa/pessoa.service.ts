import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  getPessoas(){
    let pessoasMocked = [
      { id: '1', nome: 'Danilo', enderecos: [{cep:'03090020', rua: 'rua xyz'}, {cep:'03090020', rua: 'rua xyz'}, {cep:'03090020', rua: 'rua xyz'}], sobrenome: 'sobrenome' }, 
      { id: '1', nome: 'Luana', enderecos: [{cep:'03090020', rua: 'rua xyz'}, {cep:'03090020', rua: 'rua xyz'}], sobrenome: 'sobrenome' }, 
      { id: '7', nome: 'Maria', enderecos: [{cep:'03090020', rua: 'rua xyz'}], sobrenome: 'sobrenome' },
      { id: '7', nome: 'Joao', enderecos: [{cep:'03090020', rua: 'rua xyz'}], sobrenome: 'sobrenome' }
    ]
    return Observable.create(observer => {
           observer.next(pessoasMocked)
           observer.complete()
    })
  }
}
