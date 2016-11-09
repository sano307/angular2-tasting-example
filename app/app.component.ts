/* app.component.ts */
import { Component } from '@angular/core';

@Component({
  // html상에서 쓰이는 element의 이름
  selector: 'my-app',

  // 표현되는 html 정의. templateUrl옵션으로 대체되어 파일의 경로만으로 대체할 수 있다.
  template: `
    <h1>{{title}}</h1>
    <nav>
      <!-- app.routing.ts에 정의되어 있는 경로가 적용된다. -->
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>

      <!-- 클릭 이벤트 바인딩. 클릭하면 아래 클래스에 선언되어 있는 toClick이라는 메서드가 실핸된다. -->
      <button (click)="toClick()">Click</button>
      <span>{{str}}</span>

      <!-- 양방향 데이터 바인딩. -->
      <input [(ngModel)]="str" />
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [ 'app.component.css' ],
})

export class AppComponent {
  title = 'Tour of Heroes';
  str = 'Cyka';

  toClick() {
    console.log("Cyka");
  }
}
