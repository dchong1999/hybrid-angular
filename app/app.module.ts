import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClient
  ],
})
export class AppModule implements DoBootstrap {
    constructor(private upgrade: UpgradeModule) {}
    ngDoBootstrap(): void {
        this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
    }
}