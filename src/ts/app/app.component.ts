import { Component } from "@angular/core";

@Component({
    selector: "main",
    // template: require("./app.component.html"),
    template: `<table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let person of people | slice:startPerson:endPerson">
                <td>{{person.fName}}</td>
                <td>{{person.lName}}</td>
            </tr>
        </tbody>
    </table>
    <button type="button" (click)="prevPage()">Prev</button>
    <button type="button" (click)="nextPage()">Next</button>`,
    styles: [ require("./app.component.scss") ],
})
export class AppComponent {

    // public header: string = "Color tool";

    // public colors: string[] = [
    //     "red", "white", "blue", "green",
    // ];

    // public newColor: string = "";

    // public addColor() {
    //     this.colors.push(this.newColor);
    //     this.newColor = "";
    // }

    public header: string = "Pagination Baby!";

    public pageLength: number = 2;
    public currentPage: number = 0;

    // accessor method
    public get startPerson(): number {
        return this.currentPage * this.pageLength;
    }

    public get endPerson(): number {
        return (this.currentPage + 1) * this.pageLength;
    }

    public people: any[] = [
        { fName: "Pete", lName: "Sandoval"},
        { fName: "Pete", lName: "Rock"},
        { fName: "Pete", lName: "Sampras"},
        { fName: "Pete", lName: "Seeker"},
        { fName: "Peat", lName: "Bog"},
        { fName: "Peter", lName: "Steele"},
        { fName: "Peter", lName: "O'Mahony"},
        { fName: "Peter", lName: "Beardsley"},
        { fName: "Peter", lName: "Shilton"},
        { fName: "Peter", lName: "Collins"},
        { fName: "Peter", lName: "Sheerin"},
    ];

    public prevPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    }

    public nextPage() {
        let pages = this.people.length / this.pageLength;
        pages = parseInt(pages.toString(), 10);

        if (this.people.length % this.pageLength > 0) {
            pages++;
        }

        console.log("currentPage = " + this.currentPage + "\npages = " + pages);

        if (this.currentPage < pages - 1) {
            this.currentPage++;
        }
    }

}
