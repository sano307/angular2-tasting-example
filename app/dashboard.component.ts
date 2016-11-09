/* dashboard.component.ts */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  // javascript로 컴파일 되었을 때, 사용되는 키 같은 존재이다.
  moduleId: module.id,

  // html상에서 쓰이는 element의 이름을 정의한다.
  selector: 'my-dashboard',

  // 해당 컴포넌트를 통해서 나타낼 template의 경로를 정의한다.
  templateUrl: 'dashboard.component.html',

  // 해당 컴포넌트에 사용되는 CSS의 경로를 정의한다.
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  // 컴포넌트 클래스의 생성자에서는 의존성 주입된 객체에 대한 변수만을 선언한다.
  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  // ngOnInit에서는 의존성 주입된 객체로 로직을 작성한다.
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 6));
  }

  gotoDetail(hero: Hero): void {
    // app.routing.ts로 넘겨줄 링크에 대한 정보는 배열로 선언하여 넘겨준다.
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
