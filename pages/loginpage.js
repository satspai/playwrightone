class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = "//input[@placeholder='Username']";
        this.passwordInput = "//*[@id='loginsection']/form/input[2]";
        this.loginButton = "//form[@name='loginform']/button";

    }
    async loginToPortal() {
        await this.page.fill(this.usernameInput,"Admin");
        await this.page.focus(this.passwordInput);
        await this.page.fill(this.passwordInput,"admin123");
        await this.page.click(this.loginButton);
    }
  }

  module.exports=LoginPage;