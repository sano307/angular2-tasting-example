/* systemjs.config.js */
(function (global) {
  System.config({
    paths: {
      // npm으로 설치된 모듈이 담겨져 있는 경로를 npm이라는 변수에 담아준다.
      'npm:': 'node_modules/'
    },
    // node_modules에 설치된 패키들의 경로를 시스템 로더에게 알려준다.
    map: {
      // 어플리케이션의 루트 폴더 이름
      app: 'app',

      // import 시킬 앵귤라 라이브러리의 별칭과 그에 따른 경로를 적어준다.
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',


      // 그 외의 라이브러리
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
    },
    // 패키지는 파일이름이나 확장명이 없을 때 어떻게 로드할지 정하는 시스템 로더를 말한다.
    packages: {
      app: {
        // 어플리케이션의 시작점이 되는 파일의 경로설정
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
