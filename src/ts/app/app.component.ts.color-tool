import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: require("./app.component.html"),
    styles: [ require("./app.component.scss") ],
})
export class AppComponent {

    public header: string = "Color tool";

    public colors: string[] = [
        "red", "white", "blue", "green",
    ];

    public newColor: string = "";

    public addColor() {
        this.colors.push(this.newColor);
        this.newColor = "";
    }

}
