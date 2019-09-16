/* eslint-disable no-undef */
/**
 * Dependencies.
 */

if (typeof require !== 'undefined') {
	expect = require('chai').expect
	ms = require('.')
}

// Strings

describe('ms(string)', () => {
	it('should not throw an error', () => {
		expect(() => {
			ms('1m')
		}).to.not.throw()
	})

	it('should preserve ms', () => {
		expect(ms('100')).to.equal(100)
	})

	it('should convert from m to ms', () => {
		expect(ms('1m')).to.equal(60000)
	})

	it('should convert from h to ms', () => {
		expect(ms('1h')).to.equal(3600000)
	})

	it('should convert d to ms', () => {
		expect(ms('2d')).to.equal(172800000)
	})

	it('should convert w to ms', () => {
		expect(ms('3w')).to.equal(1814400000)
	})

	it('should convert s to ms', () => {
		expect(ms('1s')).to.equal(1000)
	})

	it('should convert ms to ms', () => {
		expect(ms('100ms')).to.equal(100)
	})

	it('should work with decimals', () => {
		expect(ms('1.5h')).to.equal(5400000)
	})

	it('should work with multiple spaces', () => {
		expect(ms('1   s')).to.equal(1000)
	})

	it('should return NaN if invalid', () => {
		expect(isNaN(ms('☃'))).to.equal(true)
		expect(isNaN(ms('10-.5'))).to.equal(true)
	})

	it('should be case-insensitive', () => {
		expect(ms('1.5H')).to.equal(5400000)
	})

	it('should work with numbers starting with .', () => {
		expect(ms('.5ms')).to.equal(0.5)
	})

	it('should work with negative integers', () => {
		expect(ms('-100ms')).to.equal(-100)
	})

	it('should work with negative decimals', () => {
		expect(ms('-1.5h')).to.equal(-5400000)
		expect(ms('-10.5h')).to.equal(-37800000)
	})

	it('should work with negative decimals starting with "."', () => {
		expect(ms('-.5h')).to.equal(-1800000)
	})
})

// Long strings

describe('ms(long string)', () => {
	it('should not throw an error', () => {
		expect(() => {
			ms('53 milliseconds')
		}).to.not.throw()
	})

	it('should convert milliseconds to ms', () => {
		expect(ms('53 milliseconds')).to.equal(53)
	})

	it('should convert msecs to ms', () => {
		expect(ms('17 msecs')).to.equal(17)
	})

	it('should convert sec to ms', () => {
		expect(ms('1 sec')).to.equal(1000)
	})

	it('should convert from min to ms', () => {
		expect(ms('1 min')).to.equal(60000)
	})

	it('should convert from hr to ms', () => {
		expect(ms('1 hr')).to.equal(3600000)
	})

	it('should convert days to ms', () => {
		expect(ms('2 days')).to.equal(172800000)
	})

	it('should work with decimals', () => {
		expect(ms('1.5 hours')).to.equal(5400000)
	})

	it('should work with negative integers', () => {
		expect(ms('-100 milliseconds')).to.equal(-100)
	})

	it('should work with negative decimals', () => {
		expect(ms('-1.5 hours')).to.equal(-5400000)
	})

	it('should work with negative decimals starting with "."', () => {
		expect(ms('-.5 hr')).to.equal(-1800000)
	})
})

// Invalid inputs

describe('ms(invalid inputs)', () => {
	it('should throw an error, when ms("")', () => {
		expect(() => {
			ms('')
		}).to.throw()
	})

	it('should throw an error, when ms(undefined)', () => {
		expect(() => {
			ms(undefined)
		}).to.throw()
	})

	it('should throw an error, when ms(null)', () => {
		expect(() => {
			ms(null)
		}).to.throw()
	})

	it('should throw an error, when ms([])', () => {
		expect(() => {
			ms([])
		}).to.throw()
	})

	it('should throw an error, when ms({})', () => {
		expect(() => {
			ms({})
		}).to.throw()
	})

	it('should throw an error, when ms(NaN)', () => {
		expect(() => {
			ms(NaN)
		}).to.throw()
	})

	it('should throw an error, when ms(Infinity)', () => {
		expect(() => {
			ms(Infinity)
		}).to.throw()
	})

	it('should throw an error, when ms(-Infinity)', () => {
		expect(() => {
			ms(-Infinity)
		}).to.throw()
	})
})
