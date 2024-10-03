import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClient } from '@angular/common/http';
let AppModule = class AppModule {
    constructor(upgrade) {
        this.upgrade = upgrade;
    }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
    }
};
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            UpgradeModule,
            HttpClient
        ],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map