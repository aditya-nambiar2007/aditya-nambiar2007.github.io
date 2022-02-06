const random = {
    string: function (len) {
        let str = ""
        const letter = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@$#%^&*(){}[];:'\|?/><.,+=-_*"
        for (let i = 0; i < len; i++) { str += letter.charAt(Math.floor(Math.random() * letter.length)) }
        return str
    },
    int: {
        range: function (a, b) { return Math.floor(Math.random() * (b - a + 1)) + a },
        length: function (len) { return random.int.range(10 ** (len - 1), (10 ** len) - 1) }
    },
    float: function (a, b) { return Math.random() * (b - a) + a },
    email: function (len) { return random.string(len) + "@domain.com" },
    url: function (len) { if (len < 8) { console.error("length cannot be less than 8"); } else { return "https://" + random.string(len - 8) } },
    date: function (a, b) { let ua = a; let ub = b; if (a == undefined) { ua = 0 }; if (b == undefined) { ub = new Date().getFullYear() }; return new Date(random.int.range(ua, ub), random.int.range(1, 12), random.int.range(1, 29), random.int.range(0, 24), random.int.range(0, 59), random.int.range(0, 59), 0); },
    array: { getData: (arr) => { return arr[(random.int.range(1, arr.length - 1))] } }
}
function createRandomString(a, len) {
    let str = ""
    const letter = a
    for (let i = 0; i < len; i++) { str += letter.charAt(Math.floor(Math.random() * letter.length)) }
    return str
}