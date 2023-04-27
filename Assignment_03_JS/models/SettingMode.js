'use strict';

class SettingMode{
    pagesize ;
    category ;

    get Pagesize(){return this.pagesize;}
    set Pagesize (value) {this.pagesize =value;}
    
    get Category(){return this.category;}
    set Category (value) {this.category =value;}

    constructor(pagesize, category){
        this.Pagesize = pagesize;
        this.Category = category;
    }
}