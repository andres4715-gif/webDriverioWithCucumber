import { Given, When, Then } from 'cucumber';
import { loginPage } from '../pages/Login.page';
import * as systemMessages from '../constants/SystemMessages.constant';

Given(/^Given I'm on the home page$/, () => {
    loginPage.open();
});

When(/^I search clothes in a search bar:$/, (data) => {
    const [user] = data.hashes();
    loginPage.login(user.email, user.password);
});

Then(/^show some results are displayed on the site$/, () => {
    expect(loginPage.welcomeMessage).toHaveText(
        systemMessages.FEEDBACK_USER_LOGGED,
    );
});

Then(/^show a label '(.+)' on the site$/, (userName) => {
    expect(loginPage.userLoggedIn).toHaveText(userName);
});
