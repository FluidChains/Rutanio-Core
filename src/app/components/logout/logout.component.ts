import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { GlobalService } from '../../services/global.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutComponent {
    @HostBinding('class.logout') hostClass = true;

    constructor(private authService: AuthenticationService,
        private globalService: GlobalService,
        private apiService: ApiService,
        private router: Router) {

    }

    logout() {
        this.authService.setAnonymous();

        this.apiService.stopStaking()
            .subscribe(
                response => {
                    if (response.status >= 200 && response.status < 400) {
                        console.log('Staking was stopped.');
                    }
                },
                error => {
                    this.apiService.handleError(error);
                }
            );

        this.router.navigateByUrl('/login');
    }
}