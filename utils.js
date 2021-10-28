import quests from './data/quest-data.js';

export function findById(items, id){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function generateUser(formData){
    return {
        completed:{},
        evidence: 0,
        sanity: 50,
        name: formData.get('name'),
        class: formData.get('class')
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function scoreQuest(choiceObject, questId, userObject){
    userObject.sanity += choiceObject.sanity;
    userObject.evidence += choiceObject.evidence;
    userObject.completed[questId] = true;
}

export function questsCompleted(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]) {
            return false;
        } 
    } 
    return true;
}
