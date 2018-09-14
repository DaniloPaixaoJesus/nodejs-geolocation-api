import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core'
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations'

export const routerTransition =
trigger('routerTransition', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(100%)',
            opacity: 1
          }),
          {optional:true}),
        // move page off screen right on leave
        query(':leave',
          animate('300ms ease-out',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(-100%)',
              opacity: 1
            })
          ),
        {optional:true}),

        // move page in screen from left to right
        query(':enter',
          animate('300ms ease-in',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
        // -- 
    ])
])


@Component({
  selector: 'app-root-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user: String;
  password: String;
  loginError: String;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(){
    localStorage.setItem('loggedUser','false');
  }

  login() {
    console.log('efetuando login');
    localStorage.setItem('loggedUser', '1243908352309570342-50-235-028134535');
    this.router.navigate(['/home']);
  }

  reduceParaAgrupar() {
    const guias = [
            { peg_id: '1', guia_id: 'guia1', instance: '2342342' },
            { peg_id: '2', guia_id: 'guia22', instance: '254524423' },
            { peg_id: '1', guia_id: 'guia11', instance: '6967853' },
            { peg_id: '2', guia_id: 'guia2', instance: '4678643' },
            { peg_id: '1', guia_id: 'guia111', instance: '9824612' }
          ];

    const novoArray = guias
                  .reduce((acumulador, atual) => {
                      acumulador[atual.peg_id] = acumulador[atual.peg_id] || [];
                      acumulador[atual.peg_id].push(atual);
                      return acumulador;
                    },
                    Object.create(null)
                  );

    console.log(novoArray);
  }

  reduceParaProcurar() {
    const tasks = [
      { name: 'nome', id: '1', processInstance: {id: '6574534'}, taskDefinitionKey: '2342342' },
      { name: 'nome', id: '1', processInstance: {id: '6574534'}, taskDefinitionKey: '2342342' },
      { name: 'nome', id: '1', processInstance: {id: '6574534'}, taskDefinitionKey: '2342342' },
      { name: 'nome', id: '1', processInstance: {id: '6574534'}, taskDefinitionKey: '2342342' }
    ];

    const novoArray = tasks
          .filter(d => d.processInstance.id)
          .reduce( (reduce, task) => {
                    const current = reduce.find(rd => rd.taskDefinitionKey === task.taskDefinitionKey);

                    if (current) {
                      current.processInstances.push({ taskId: task.id, ...task.processInstance });
                    } else {
                      reduce.push({
                        name: task.name,
                        taskDefinitionKey: task.taskDefinitionKey,
                        processInstances: [{ taskId: task.id, ...task.processInstance }]
                      });
                    }

                    return reduce;
              }
              , []
            );
    console.log(novoArray);
  }

}
