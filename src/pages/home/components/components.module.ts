import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { ScrollComponent } from './scroll/scroll';
import { PostComponent } from './post/post';
@NgModule({
	declarations: [
    HeaderComponent,
    ScrollComponent,
    PostComponent],
	imports: [],
	exports: [
    HeaderComponent,
    ScrollComponent,
    PostComponent]
})
export class ComponentsModule {}
