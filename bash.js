const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd') {
        console.log(pwd.pwdFunc());
    };

    if (cmd === 'ls') {
        console.log(ls.lsFunc());
    }

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');

});

