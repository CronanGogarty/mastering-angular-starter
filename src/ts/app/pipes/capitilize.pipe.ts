import {Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: "capitilize",
})
export class CapitilizePipe implements PipeTransform {
    public transform(value: any) {

        console.log("calling capitalize...");

        const strValue = String(value);

        return strValue.charAt(0).toUpperCase() + strValue.slice(1);
    }
}
