# Sources.
#
TESTS = $(shell find test/*.test.js)

# Binaries we need to run builds from this makefile.
#
EXPRESSO_BINDIR= 		~/node_modules/expresso/bin
JSCOVERAGE_BINDIR=  /usr/local/bin

# Setup path for execution.
#
BINS=$(EXPRESSO_BINDIR):$(PATH)

# Targets.
#
test:
	@PATH=$(BINS) NODE_ENV=test expresso \
		-I lib \
		$(TESTFLAGS) \
		$(TESTS)

test-cov:
	@PATH=$(BINS) TESTFLAGS=--cov $(MAKE) test

.PHONY: test test-cov
