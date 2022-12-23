console.log("Hello World!");
import $ from "jquery"
import "@textbus/editor/bundles/textbus.min.css"
import * as TBE from "@textbus/editor"
var TEditor = TBE.createEditor();
$(document).ready(()=>{
    TEditor.mount($("#editor")[0]);
    TEditor.onChange.subscribe(()=>{
        console.log(TEditor.getContents());
    })
});