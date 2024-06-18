import { Locator, Page } from "@playwright/test";

export class LoginPage {

    private readonly userName: Locator
    private readonly passwor: Locator
    private readonly loginButton: Locator

    constructor(page: Page) {
        this.userName = page.getByRole('textbox', { name: 'email address' })
        this.passwor = page.getByRole('textbox', { name: 'my password' })
        this.loginButton = page.getByRole('button', { name: 'Sign Up' })
    }
    async fillUserName(username:string) {
        await this.userName.fill(username)

    }
    async fillPassword(passwor:string) {

        await this.passwor.fill(passwor)
    }
    async clicOnLogin() {

        await this.loginButton.click()
    }
    async SignUp(username:string,passwor:string) {
    await this.fillUserName(username)
    await this.fillPassword(passwor)
    await this.clicOnLogin()
    }
}

