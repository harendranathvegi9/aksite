'use strict';
import { async, inject, TestBed } from '@angular/core/testing';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import {
//     Http,
//     BaseRequestOptions,
//     ResponseOptions,
//     Response
// } from '@angular/http';
import { SocketService } from '../../components/socket/socket.service';
import { SocketServiceMock } from '../../components/socket/socket.mock';

import { MainComponent } from './main.component';

describe('Component: MainComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MainComponent
            ],
            providers: [
                {provide: SocketService, useClass: SocketServiceMock}
            ]
        });
    });

    it('should have a #stonecutter element', () => {
        const fixture = TestBed.createComponent(MainComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('#stonecutter')).to.exist;
    });
});
