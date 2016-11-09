/* app.module.ts */
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

// 루트 컴포넌트
import { AppComponent }         from './app.component';

// 자식 컴포넌트들
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';

import { routing }  from './app.routing';

// @NgModule은 함수적인 블록이 결합되어 어플리케이션을 조직하는데 도움을 준다.
@NgModule({
  // 컴포넌트에서 사용할 모듈과 라우팅 관련 파일을 정의한다.
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  // 컴포넌트들을 정의한다.
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  // 지시자를 정의한다.
  providers: [
    HeroService
  ],
  // 제일 처음에 불러올 루트 컴포넌트를 정의한다.
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
