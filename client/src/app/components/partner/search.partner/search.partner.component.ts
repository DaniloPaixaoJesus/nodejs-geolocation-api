import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../../services/pessoa/pessoa.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-search-partner-component',
  templateUrl: './search.partner.component.html',
  styleUrls: ['./search.partner.component.scss']
})
export class SearchPartnerComponent implements OnInit {

  private pessoas = [];

  // exibicao de mensagem de erro na tela
  isError: Boolean = false;
  error: string;

  // exibicao de loader na tela
  exibeProgress: Boolean = false;
  value: Number = 0;

  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) { }

  routeCadastroPessoa() {
    this.router.navigate(['/partner/form']);
  }

  voltar() {
    window.history.back();
  }

  ngOnInit() {
    const isMobile = /Android|iPhone/i.test(window.navigator.userAgent);
    console.log(`Plataforma ${window.navigator.userAgent}`);
    this.pessoas =
    this.pessoaService.getPessoas()
      .subscribe(res => {
        console.log('>>>> get pessoas res=', res);
        this.exibeProgress = false;
        // this.router.navigate(['/pessoa'])
    },
    error => {
      console.log('erro ao chamar o servico get pessoas ==>', error);
      this.exibeProgress = false;
      this.isError = true;
      this.error = `Não foi possível consutar pessoas`;
    });

  }
}
