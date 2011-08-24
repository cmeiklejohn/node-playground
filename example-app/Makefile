test:
	@NODE_ENV=test ./node_modules/.bin/expresso \
		-I lib \
		$(TESTFLAGS) \
		$(TESTS)

test-cov:
	@TESTFLAGS=--cov $(MAKE) test
