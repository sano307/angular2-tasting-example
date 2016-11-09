/* main.ts */
// 파일 변경 탐지 기능을 억제하지 않게 해주는 라이브러리
import { enableProdMode } from '@angular/core';

// 어플리케이션을 시작할 수 있게 해주는 라이브러리
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// 어플리케이션에 의존성 주입된 라이브러리나 컴포넌트, 지시자를 선언해 둔 파일
import { AppModule } from './app.module';

enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
