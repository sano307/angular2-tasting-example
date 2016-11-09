/* app.routing.ts */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 라우팅 되는 URL에 맞게 실행되는 컴포넌트를 불러온다.
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const appRoutes: Routes = [
  {
    // URL에 아무것도 입력되지 않았을 때
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    // routerLink가 heroes일 때
    path: 'heroes',
    component: HeroesComponent
  },
  {
    // routerLink가 dashboard일 때
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    // routerLink가 detail/:id일 때
    path: 'detail/:id',
    component: HeroDetailComponent
  },
];

// 라우터 모듈에 위에서 정의한 Routes 변수의 설정을 적용시켜준다.
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
