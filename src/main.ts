import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';


registerLicense("Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCe0x0QHxbf1x0ZFBMZF1bRnNPIiBoS35RckVnW3pfd3BURGZZWER0");
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
