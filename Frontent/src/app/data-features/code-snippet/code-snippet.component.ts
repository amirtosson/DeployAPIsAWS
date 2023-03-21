import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css']
})
export class CodeSnippetComponent implements OnInit {

  code = `def fib(n):
  a, b = 0, 1
  while a < n:
    print(a, end=' ')
    a, b = b, a+b
    print()
fib(1000)`;
  constructor() { }

  ngOnInit(): void {
  }

}
