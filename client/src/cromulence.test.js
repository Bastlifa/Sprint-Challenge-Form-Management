const cromulence = require('./cromulence.js')

describe('cromulent', () =>
{
    it('determines if a word is cromulent', () =>
    {
        const word = "embiggens"
        const expectedOutput = "perfectly cromulent"
        const actualOutput = cromulence.cromulent(word)
        expect(actualOutput).toBe(expectedOutput)
    })
    it('determines if a word is not cromulent', () =>
    {
        const word = "meh"
        const expectedOutput = "non-cromulent"
        const actualOutput = cromulence.cromulent(word)
        expect(actualOutput).toBe(expectedOutput)
    })
})