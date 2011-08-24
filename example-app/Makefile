TESTS = $(shell find test/*.test.js)

test:
	@NODE_ENV=test ~/node_modules/expresso/bin/expresso \
		-I lib \
		$(TESTFLAGS) \
		$(TESTS)

test-cov:
	@TESTFLAGS=--cov $(MAKE) test

.PHONY: site test test-cov benchmark docs docclean
