// This file is required by karma.conf.js and loads recursively all the .spec
// and framework files

import 'zone.js/dist/zone-testing';
import {getTestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

// tslint:disable-next-line:no-any Auto-generated by OS ng-cli tool.
declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule, platformBrowserDynamicTesting());
// Then we find all the tests.
const context = require.context('./', true, /_test\.ts$/);
// And load the modules.
context.keys().map(context);