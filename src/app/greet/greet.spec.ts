import { greet } from './greet'; describe ('greet',() => {
	if('should include the name in the message ', () => {
		expect(greet('adsoft')).toContain('adsoft');
	})
})
