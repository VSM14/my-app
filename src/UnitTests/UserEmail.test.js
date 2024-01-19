import User from '../UserM.js'

test('UserEmail', () => {
    const myUser = new User('Sergey', 'smv6@tpu.ru')
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    //    /^\S+@\S+\.\S+$/i;
    expect(myUser.email).toMatch(regex);
}) 