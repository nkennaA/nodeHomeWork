const prompts = require('prompts');

module.exports = exports = {};

output = function(questions) {
    (async () => {
        const response = await prompts(questions);
        console.log("Your favorite food is " + response.food);
        console.log("It tastes like " + response.taste);
    })();
}

exports.output = output;