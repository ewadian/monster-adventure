const waterHorse = {
    id: 'waterHorse',
    title: 'Something in the water',
    maptitle: 'creek horse',
    map: {
        top: '64%',
        left: '75%'
    },
    image: '../assets/waterhorse.jpg',
    description: `
        On a brisk autumn evening, you decide to take a short hike along the creek. You lose
        yourself observing the birds in the red-orange leaves, and before you know it, the
        evening is fading to night. Luckily, the route home is familiar, but along the way,
        you hear something wading through the water beside you. When you turn your eyes to 
        look, you see a large black horse. His coat, dripping wet, glistens like silver
        through the trees and brush.
    `,
    choices: [{
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
        sanity: -50,
        evidence: 0
    }, {
        id: 'leave',
        description: 'Keep walking',
        result: `
            Something feels... wrong. The hair on the back of your neck rises, and your stomach jitters
            as though it was filled with moths. You start to walk away slowly, fighting the urge to sprint
            as long as you possibly can (it isn't long). You bolt down the trail and never look back.
        `,
        sanity: -5,
        evidence: 0
    }, {
        id: 'photo',
        description: 'Take a photo',
        result: `
            This presence is concerning. You can't imagine where this horse has come from, but assume someone
            must be looking for it. You pull your phone from your pocket and attempt to take a decent photo,
            but when you check the screen, nothing but the creek and brush appears. You take another. Nothing.
            Again. When you look up from the screen, your stomach knots; there's nothing there.
        `,
        sanity: -15,
        evidence: 0
    }]
};

const blackDog = {
    id: 'blackDog',
    title: 'The Black Dog',
    maptitle: 'The Black Dog',
    map: {
        top: '63%',
        left: '42%'
    },
    image: '../assets/blackdog.jpg',
    description: `
        After a late night at the bar, you've found yourself with a dead phone battery,
        stuck wobbling home on foot. You turn down the alley you think is the shortcut
        home. Seconds later, a garbage can topples -- a large raccoon is sprinting frantically down the alley
        with a large, lanky black dog hot on his heels.
    `,
    choices: [{
        id: 'scold',
        description: 'Scold the dog',
        result: `
            You take pity on the raccoon, and loudly exclaim "No! Knock it off!" The dog stops dead in
            his tracks before slowly and silently turning to face you head on. In the blink of an eye,
            the dog is lunging straight towards you. His glowing white eyes and yellowed fangs, dripping with 
            frothy saliva, are the last things you see before it all goes dark.
        `,
        sanity: -50,
        evidence: 0
    }, {
        id: 'observe',
        description: 'Enjoy the spectacle',
        result: `
            The sudden crashing startles you, causing you to stumble backwards a few steps before you process the 
            situation. Good riddance. You doubt the dog will catch up to the raccoon, but hope he'll scare them out
            of showing up again and making a mess of the trash - an all-too-common occurrence. The animals disappear 
            around a corner, and your body relaxes, no longer prepared to flee.
        `,
        sanity: 10,
        evidence: 0
    }, {
        id: 'call',
        description: 'Call the dog over',
        result: `
            "Hey!" you exclaim, stepping forward and clapping your hands together in an attempt to break the 
            dog's focus. The dog stops, turning his gaze to you. "It's okay, buddy," you say, softly, holding 
            your hand out slightly. You notice the greasy, tangled appearance of his coat and his emaciated,
            skeletal frame. The dog looks ready to flee, so you reach to your pocket for your phone, hoping
            to snap a quick photo before he runs off. As you snap the photo, the dog's lips curl into a toothy
            grin, revealing a line of teeth stretching all the way to the base of his neck. You gasp in shock,
            and before you can run, the dog has disappeared. The image is blurred, but the photo is enough for
            you to believe what you saw.
        `,
        sanity: -15,
        evidence: 1
    }]
};

const doppelganger = {
    id: 'doppelganger',
    title: `We've always been here`,
    maptitle: 'doppelganger',
    map: {
        top: '18%',
        left: '8%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: '../assets/doppelganger.jpg',
    description: `
        "Goodnight!" Your parents shut their bedroom door as you walk down the stairs and plop down on the
        couch, pressing the play button on your favorite Twilight Zone episode. When the episode ends, you 
        hear a car pull into the driveway. You peer through the blinds and see your parents closing up the
        car and heading towards the front door. 
    `,
    choices: [{
        id: 'outside',
        description: 'Leave the house',
        result:  `
       Your heart drops. The floorboards upstairs creak, and without a second glance, you bolt out the front 
       door, slamming it shut behind you. "There's someone in the house!" you exclaim, "You're in the-" you stop
       yourself, knowing they wouldn't believe you. You rush them down the driveway, and convince them to call
       the police. They find nothing. You must have had some weird dream falling asleep watching that show.
    `,
        sanity: -5,
        evidence: 0
    }, {
        id: 'lock',
        description: 'Lock the door',
        result: `
                "Will you turn the TV down?" your mother's voice from upstairs calls out as you sprint to the front
                door, fumbling to lock the deadbolt and security chain. "...Mom?" your voice quivers. There's no reply.
                "Dad? Are you in here?" They've heard the fear in your voice. You look to the staircase. Two shadowy figures
                stand at the top of the stairwell, engulfing everything behind them in black. They are nothing but humanoid
                shape and glowing eyes. As they move toward you, your vision blurs, and your breath leaves you like a 
                punch to the stomach. Everything is black.
                `,
        sanity: -50,
        evidence: 0
    }, {
        id: 'upstairs',
        description: 'Run upstairs',
        result: `
        "What the hell..?" you rush up the stairs, looking frantically down the hall to your parents' bedroom door. 
        It's open, and the lights are out. The front door opens. The hair on the back of your neck rises as you step
        slowly down the first few stairs. When you look down, your parents are standing at the bottom of the stairs,
        eyes wide with fear. Your mother screams, and your dad tells you to run. You don't look back until you're 
        slamming the front door shut behind you. You see an image of your parents shifting into looming black shadows.
        Your family will never forget those glowing vacant eyes.
        `,
        sanity: -10,
        evidence: 1
    }]
};

const quests = [
    waterHorse, 
    blackDog,
    doppelganger,
];

export default quests; 
