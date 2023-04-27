"use strict";

//Tạo class User
class User {
  //Khai báo các Field
  id = 0;
  firstName = "";
  lastName = "";
  username = "";
  password = "";
  setting;

  //Khai báo các Properties
  /*ID*/
  get ID() {
    return this.id;
  }
  set ID(value) {
    this.id = value;
  }
  /*FirstName*/
  get FirstName() {
    return this.firstName;
  }
  set FirstName(value) {
    this.firstName = value;
  }
  /*LastName*/
  get LastName() {
    return this.lastName;
  }
  set LastName(value) {
    this.lastName = value;
  }
  /*Username*/
  get Username() {
    return this.username;
  }
  set Username(value) {
    this.username = value;
  }
  /*Password*/
  get Password() {
    return this.password;
  }
  set Password(value) {
    this.password = value;
  }
  /*Setting*/
  get Setting() {
    return this.setting;
  }
  set Setting(value) {
    this.setting = value;
  }
  //Hàm khởi tạo
  constructor(id, firstName, lastName, username, password, setting) {
    this.ID = id;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Username = username;
    this.Password = password;
    this.Setting = setting;
  }
  static async getNews(country, category, pageSize, page, flag) {
      try {
        let res;
        switch (flag) {
          //0: Page news.html
          case 0:
            res = await fetch(
              `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=e29eeec86260432599db4815b5a1b360`
            );
            break;
          //1: Page search.html
          case 1:
            res = await fetch(`https://newsapi.org/v2/everything?q=${category}&pageSize=${pageSize}&page=${page}&apiKey=e29eeec86260432599db4815b5a1b360`);
            break;
        }
        return res.json();
      } catch (err) {
          alert(`Error: ${err.message}`);
      }
  }
}
