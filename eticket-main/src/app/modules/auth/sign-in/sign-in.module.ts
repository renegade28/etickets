import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { AuthSignInComponent } from 'app/modules/auth/sign-in/sign-in.component';
import { authSignInRoutes } from 'app/modules/auth/sign-in/sign-in.routing';
import { UiModule } from 'app/ui/ui.module';
import { TranslocoCoreModule } from 'app/core/transloco/transloco.module';

@NgModule({
    declarations: [
        AuthSignInComponent
    ],
    imports: [
        RouterModule.forChild(authSignInRoutes),
        FuseCardModule,
        FuseAlertModule,
        SharedModule,
        UiModule,
    ]
})
export class AuthSignInModule {
}
