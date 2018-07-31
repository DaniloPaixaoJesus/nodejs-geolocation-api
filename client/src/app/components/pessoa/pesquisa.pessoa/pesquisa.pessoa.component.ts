import { Component, OnInit } from '@angular/core'
import { PessoaService } from '../../../services/pessoa/pessoa.service'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'pesquisa-pessoa-component',
  templateUrl: './pesquisa.pessoa.component.html',
  styleUrls: ['./pesquisa.pessoa.component.scss']
})
export class PesquisaPessoaComponent implements OnInit {
  
  private pessoas = []

  //exibicao de mensagem de erro na tela
  isError: boolean = false
  error: string
  
  //exibicao de loader na tela
  exibeProgress: boolean = false
  value: number = 0

  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) { }

  routeCadastroPessoa(){
    this.router.navigate(['/pessoa/cadastro'])
  }

  voltar() {
    window.history.back()
  }

  ngOnInit() {
    let isMobile = /Android|iPhone/i.test(window.navigator.userAgent)
    console.log(`Plataforma ${window.navigator.userAgent}`)
    this.pessoas = 
    this.pessoaService.getPessoas()
      .subscribe(res => {
        console.log('>>>> get pessoas res=', res)
        this.exibeProgress = false
        //this.router.navigate(['/pessoa'])
    },
    error =>{
      console.log('erro ao chamar o servico get pessoas ==>', error)
      this.exibeProgress = false
      this.isError = true
      this.error = `Não foi possível consutar pessoas`
    })

  }
}