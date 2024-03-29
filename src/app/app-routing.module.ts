import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticatedUserGuard } from './modules/authentication/guards/authenticated-user.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoadComponent } from './components/load/load.component';
import { NetworkComponent } from './components/network/network.component';
import { UpdateComponent } from './components/update/update.component';
import { HistoryComponent } from './components/history/history.component';
import { AdvancedComponent } from './components/advanced/advanced.component';
import { ToolsComponent } from './components/tools/tools.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NetworkDetailsComponent } from './components/network/network-details.component';
import { HubDetailsComponent } from './components/settings/hub-details.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/load'
    },
    {
        path: 'load',
        component: LoadComponent,
        data: {
            title: 'Setup'
        },
    },
    {
        path: 'advanced',
        component: AdvancedComponent,
        data: {
            title: 'Advanced Tools'
        },
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Log in'
        },
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthenticatedUserGuard],
        // canActivate: [AuthenticatedUserGuard, ConnectedToNetworkdGuard],
        data: {
            title: 'Dashboard'
        }
    },
    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthenticatedUserGuard],
        data: {
            title: 'Settings'
        },
    },
    {
        path: 'hubs',
        component: HubDetailsComponent,
        canActivate: [AuthenticatedUserGuard],
        data: {
            title: 'Manage Hubs'
        },
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthenticatedUserGuard],
        data: {
            title: 'Log out'
        },
    },
    {
        path: 'network',
        component: NetworkComponent,
        canActivate: [AuthenticatedUserGuard],
        data: {
            title: 'Network Status'
        },
    },
    {
        path: 'network-details',
        component: NetworkDetailsComponent,
        canActivate: [AuthenticatedUserGuard],
        data: {
            title: 'Network Details'
        },
    },
    {
        path: 'update',
        component: UpdateComponent,
        canActivate: [AuthenticatedUserGuard],
        data: {
            title: 'Update Rutanio Core'
        },
    },
    {
        path: 'tools',
        component: ToolsComponent,
        canActivate: [AuthenticatedUserGuard],
        data: {
            title: 'Tools'
        },
    },
    {
        path: 'notifications',
        component: NotificationsComponent,
        canActivate: [AuthenticatedUserGuard],
        data: {
            title: 'Notification Center'
        },
    },
    {
        path: 'about',
        loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'wallet',
        loadChildren: () => import('./components/wallet/wallet.module').then(m => m.WalletModule)
    },
    {
        path: 'account',
        loadChildren: () => import('./components/account/account.module').then(m => m.AccountModule)
    },
    {
        path: 'history',
        loadChildren: () => import('./components/history/history.module').then(m => m.HistoryModule)
    },
    {
        path: '**',
        component: NotFoundComponent,
        data: {
            title: 'Not Found',
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
