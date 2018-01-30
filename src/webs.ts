import { sp } from "@pnp/sp";

export default class webs{   
    constructor(){
    }
    public getwebinfo():void{
        sp.web.select("Id","Title","Description").get().then(w =>{
            console.log("Web Id: "+ w.Id); 
            console.log("Web Title: "+w.Title); 
            console.log("Web Description: "+w.Description);
        }).catch(e => {
            console.log(e);            
        });       
    }
}
