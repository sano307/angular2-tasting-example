"use strict";
var router_1 = require('@angular/router');
// 라우팅 되는 URL에 맞게 실행되는 컴포넌트를 불러온다.
var dashboard_component_1 = require('./dashboard.component');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var appRoutes = [
    {
        // URL에 아무것도 입력되지 않았을 때
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        // routerLink가 heroes일 때
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        // routerLink가 dashboard일 때
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        // routerLink가 detail/:id일 때
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
];
// 라우터 모듈에 위에서 정의한 Routes 변수의 설정을 적용시켜준다.
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map