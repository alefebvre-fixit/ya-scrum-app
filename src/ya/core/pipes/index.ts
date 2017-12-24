import { NgModule } from '@angular/core';

import { MomentPipe } from './moment.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
    declarations: [
        TruncatePipe,
        MomentPipe
    ],
    exports: [
        TruncatePipe,
        MomentPipe
    ]
})

export class PipeModule { }
