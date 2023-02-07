function echo(str) {
	/* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
	let firstEcho = str.toUpperCase();
	let thirdEcho = str.toLowerCase();
	console.log(''+firstEcho+' ...'+str+' ...'+ thirdEcho+'');
}
let str = 'Mom!';
echo(str);
