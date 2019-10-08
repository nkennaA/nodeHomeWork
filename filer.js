const prompts = require('prompts');
const fs = require('fs');
output = function(){
    (async() => {
        const response = await prompts(
            {
                type: 'text',
                name: 'appended',
                message: 'Type the text you would like to append'
            }
        );
        fs.appendFileSync('text.txt', response.appended);
        var string = fs.readFileSync('text.txt').toString();
        console.log(string);
        fs.writeFileSync('text.txt', 'This is your input : ');
    })();
}
output();