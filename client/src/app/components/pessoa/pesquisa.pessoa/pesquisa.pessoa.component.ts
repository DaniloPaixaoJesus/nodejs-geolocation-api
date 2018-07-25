import { Component, OnInit } from '@angular/core'
import { PessoaService } from '../../../services/pessoa/pessoa.service'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'pesquisa-pessoa-component',
  templateUrl: './pesquisa.pessoa.component.html',
  styleUrls: ['./pesquisa.pessoa.component.scss']
})
export class PesquisaPessoaComponent implements OnInit {
  
  private pessoas = [];

  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) { }

  routeCadastroPessoa(){
    this.router.navigate(['/pessoa/cadastro'])
  }

  voltar() {
    window.history.back();
  }

  ngOnInit() {
    let isMobile = /Android|iPhone/i.test(window.navigator.userAgent)
    console.log(`Plataforma ${window.navigator.userAgent}`)
    this.pessoas = this.pessoaService.getPessoas()
    /*$(document).ready(function(){
      var ua = navigator.userAgent;
  
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
         $('a.mobile-other').show();
  
      else if(/Chrome/i.test(ua))
         $('a.chrome').show();
  
      else
         $('a.desktop-other').show();
  });
  */
  }
}