// spread operator

const friends = ['tahsin protik', 'nahid hasan'];
const newFriends = ['koushik', 'shafi', 'sobuj'];

friends.push(...newFriends);
console.log(friends);


// rest parameter (oposite of spread operator)

const greetFriends = (...friends: string[]): void => friends.forEach((friend) => console.log(`Hi ${friend}`));

greetFriends('koushik', 'shafi', "sobuj", 'tahsin protik');