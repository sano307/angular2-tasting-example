"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* dashboard.component.ts */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var DashboardComponent = (function () {
    // 컴포넌트 클래스의 생성자에서는 의존성 주입된 객체에 대한 변수만을 선언한다.
    function DashboardComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.heroes = [];
    }
    // ngOnInit에서는 의존성 주입된 객체로 로직을 작성한다.
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 6); });
    };
    DashboardComponent.prototype.gotoDetail = function (hero) {
        // app.routing.ts로 넘겨줄 링크에 대한 정보는 배열로 선언하여 넘겨준다.
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            // javascript로 컴파일 되었을 때, 사용되는 키 같은 존재이다.
            moduleId: module.id,
            // html상에서 쓰이는 element의 이름을 정의한다.
            selector: 'my-dashboard',
            // 해당 컴포넌트를 통해서 나타낼 template의 경로를 정의한다.
            templateUrl: 'dashboard.component.html',
            // 해당 컴포넌트에 사용되는 CSS의 경로를 정의한다.
            styleUrls: ['dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map