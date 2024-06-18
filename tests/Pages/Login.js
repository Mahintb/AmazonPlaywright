class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.signing="#nav-link-accountList-nav-line-1"
        this.username="#ap_email"
        this.continuebutton="#continue"
        this.password="#ap_password"
        this.signingbutton="#signInSubmit"

    }
    async SigningToApplication()
    {
        await this.page.click(this.signing)
        await this.page.fill(this.username,"mahintb@gmail.com")
        await this.page.click(this.continuebutton)
        await this.page.fill(this.password,"amazon")
        await this.page.click(this.signingbutton)
    }
}
module.exports=LoginPage;