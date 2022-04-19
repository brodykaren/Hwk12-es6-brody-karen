mocha.setup("bdd")
const expect = chai.expect

describe('Var Let and Const Examples', () => {
  after(() => {
    logSpy.restore()
    clock.restore()
  })
  describe('current functionality of index.js', () => {
    it('should log myName', () => {
      expect(myName).to.eq('Jaanai')
      expect(logSpy.firstCall.firstArg).to.eq('My name is Jaanai')
    })
    it('should count to 10 Mississippi', () => {
      expect(logSpy.secondCall.firstArg).to.eq("Let's count!")
      expect(logSpy.getCalls()[2].firstArg).to.eq("1 Mississippi!")
      expect(logSpy.getCalls()[3].firstArg).to.eq("2 Mississippi!")
      expect(logSpy.getCalls()[4].firstArg).to.eq("3 Mississippi!")
      expect(logSpy.getCalls()[5].firstArg).to.eq("4 Mississippi!")
      expect(logSpy.getCalls()[6].firstArg).to.eq("5 Mississippi!")
      expect(logSpy.getCalls()[7].firstArg).to.eq("6 Mississippi!")
      expect(logSpy.getCalls()[8].firstArg).to.eq("7 Mississippi!")
      expect(logSpy.getCalls()[9].firstArg).to.eq("8 Mississippi!")
      expect(logSpy.getCalls()[10].firstArg).to.eq("9 Mississippi!")
      expect(logSpy.getCalls()[11].firstArg).to.eq("10 Mississippi!")
    })
    it('should push to myArr', () => {
      expect(myArr).to.deep.eq([1, 2, 3, 4, 5])
    })
    it('should modify myObj', () => {
      expect(myObj.favFruit).to.eq('banana')
      expect(myObj.bestNumbers).to.deep.eq([7, 3, 42, 8])
    })
  })
  describe('index.js with let/const', () => {
    it('should not allow myName to be reassigned', () => {
      try {
        myName = 'banana'
        expect(myName).to.not.eq('banana')
      } catch(err) {
        expect(err).to.exist
        expect(err instanceof TypeError).to.be.true
      }
    })
    it('should not let i exist outside of for loop', () => {
      try {
        expect(i).to.not.exist
      } catch(err) {
        expect(err).to.exist
        expect(err instanceof ReferenceError).to.be.true
      }
    })
    it('should not allow myArr to be reassigned', () => {
      try {
        myArr = 'banana'
        expect(myArr).to.not.eq('banana')
      } catch(err) {
        expect(err).to.exist
        expect(err instanceof TypeError).to.be.true
      }
    })
    it('should not allow myObj to be reassigned', () => {
      try {
        myObj = 'banana'
        expect(myObj).to.not.eq('banana')
      } catch(err) {
        expect(err).to.exist
        expect(err instanceof TypeError).to.be.true
      }
    })
  })
})

mocha.run()