# Sources.
#
TESTS = $(shell find test/*.test.js)

# Targets.
#
test:
	@NODE_ENV=test ~/node_modules/expresso/bin/expresso \
		$(TESTFLAGS) \
		$(TESTS)

.PHONY: test
