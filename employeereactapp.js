var data = [
    {
        name: 'Stylo G',
        phone: '1234567890',
        email: 'stylo@gmail.com',
        title: 'Poet'
    },
    { name: 'Spice' },
    { phone: '1234567891' },
    { email: 'spice@gmail.com' },
    { title: 'Dancehall' },

]
var employeereactapp = {}
module.exports = {
    beforeEach: browser => {
        employeereactapp = browser.page.employeepage()
        employeereactapp
            .navigate()
    },
    after: browser => {
        employeereactapp
            .end()
    },
    'Employee Test': browser => {
        data.forEach(test => {
            employeereactapp
                .employee(test)
        })
    }



}