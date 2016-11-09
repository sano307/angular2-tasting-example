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
/* app.component.ts */
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.str = 'Cyka';
    }
    AppComponent.prototype.toClick = function () {
        console.log("Cyka");
    };
    AppComponent = __decorate([
        core_1.Component({
            // html상에서 쓰이는 element의 이름
            selector: 'my-app',
            // 표현되는 html 정의. templateUrl옵션으로 대체되어 파일의 경로만으로 대체할 수 있다.
            template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <!-- app.routing.ts\uC5D0 \uC815\uC758\uB418\uC5B4 \uC788\uB294 \uACBD\uB85C\uAC00 \uC801\uC6A9\uB41C\uB2E4. -->\n      <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n      <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n\n      <!-- \uD074\uB9AD \uC774\uBCA4\uD2B8 \uBC14\uC778\uB529. \uD074\uB9AD\uD558\uBA74 \uC544\uB798 \uD074\uB798\uC2A4\uC5D0 \uC120\uC5B8\uB418\uC5B4 \uC788\uB294 toClick\uC774\uB77C\uB294 \uBA54\uC11C\uB4DC\uAC00 \uC2E4\uD578\uB41C\uB2E4. -->\n      <button (click)=\"toClick()\">Click</button>\n      <span>{{str}}</span>\n\n      <!-- \uC591\uBC29\uD5A5 \uB370\uC774\uD130 \uBC14\uC778\uB529. -->\n      <input [(ngModel)]=\"str\" />\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            styles: ['app.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map