import { generateUser, setUser, getUser, scoreQuest, questsCompleted } from '../utils.js';

const test = QUnit.test;

test('generateUser should return a userObject', (expect) => {
    const expected = {
        completed:{},
        evidence: 0,
        sanity: 50,
        name: 'Ian',
        class: 'ghost hunter',
    };

    const formData = new FormData();
    formData.set('name', 'Ian');
    formData.set('class', 'ghost hunter');

    const actual = generateUser(formData);

    expect.deepEqual(actual, expected);
});

test('setUser should save user to localStorage', (expect)=>{
    localStorage.removeItem('USER');

    const userObject = {
        completed:{},
        evidence: 0,
        sanity: 40,
        name: 'Ian',
        class: 'ghost hunter',
    };

    setUser(userObject);

    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, userObject);
});

test('getUser should retrieve user info from localStorage', (expect)=>{
    localStorage.removeItem('USER');

    const userObject = {
        completed:{},
        evidence: 0,
        sanity: 40,
        name: 'Ian',
        class: 'ghost hunter',
    };

    setUser(userObject);

    const actual = getUser();

    expect.deepEqual(userObject, actual);
});

test('scoreQuest should update sanity, evidence, and completed quests on userObject', (expect)=>{
    const userObject = {
        completed:{},
        evidence: 0,
        sanity: 40,
        name: 'Ian',
        class: 'ghost hunter',
    };

    const choiceObject = {
        id: 'approach',
        description: 'Approach the horse',
        result: `
            You lock eyes with the horse, feeling strangely drawn to it. You slowly move forward,
            stepping carefully across the rocky creek-side. As you raise your hand, the horse stretches
            his neck forward, touching his nose to the back of your hand. When you brush your fingers 
            through his long mane, the hair starts to slither forward like a snake, coiling up your arms
            and wrapping around your body faster than you can think to scream. By the time you do, the 
            sound is replaced with a choking gasp as you're dragged underwater with the beast, never to be
            seen again.
        `,
        sanity: -40,
        evidence: 0
    };

    const questId = 'waterHorse';

    scoreQuest(choiceObject, questId, userObject);

    expect.equal(userObject.sanity, 0);
    expect.equal(userObject.evidence, 0);
    expect.equal(userObject.completed[questId], true);
});

test('questsCompleted returns true if the user has completed quests', (expect)=>{
    const userObject = { 
        completed: { waterHorse: true, blackDog: true, doppelganger: true },
    };

    const actual = questsCompleted(userObject);
    expect.equal(actual, true);
});

test('questsCompleted returns false if the user has not completed quests', (expect)=>{
    const userObject = { 
        completed: { waterHorse: true, blackDog: true },
    };

    const actual = questsCompleted(userObject);
    expect.equal(actual, false);
});
