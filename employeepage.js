var command = {
    employee: function (data) {
        this
            .waitForElementPresent('@homepage')
            .pause(1000)
            .maximizeWindow()
            .moveToElement('@newemployee', 1, 1)
            .click('@newemployee')
            .clearValue('@namefield')
            .setValue('@namefield', data.name)
            .clearValue('@phonefield')
            .setValue('@phonefield', data.phone)
            .clearValue('@emailfield')
            .setValue('@emailfield', data.email)
            .clearValue('@titlefield')
            .setValue('@titlefield', data.title)
            .click('@savebutton')
            .api.refresh()
        return this








    }
}
module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [command],
    elements: {
        homepage: '[class="titleText"]',
        newemployee: {
            selector: `//li[text()="New Employee"]`,
            locateStrategy: 'xpath'
        },
        namefield: {
            selector: '//input[@name="nameEntry"]',
            locateStrategy: 'xpath'
        },
        phonefield: {
            selector: '//input[@name="phoneEntry"]',
            locateStrategy: 'xpath'
        },
        emailfield: {
            selector: '//input[@name="emailEntry"]',
            locateStrategy: 'xpath'
        },
        titlefield: {
            selector: '//input[@name="titleEntry"]',
            locateStrategy: 'xpath'
        },
        savebutton: '#saveBtn'





    }
}