.PHONY: all

all: build

PACKAGE_VERSION := $(shell grep -m1 '"version"' manifest.json | awk -F: '{ print $$2 }' | sed 's/[", ]//g')
FILES := background.js toggleFullscreen.js icon.png manifest.json

define zip
	mv manifest-$(1).json manifest.json
	mkdir -p dist/fullscreen-$(1)-$(PACKAGE_VERSION)-src
	cp $(FILES) dist/fullscreen-$(1)-$(PACKAGE_VERSION)-src
	zip -r dist/fullscreen-$(1)-$(PACKAGE_VERSION).zip $(FILES)
endef

build:
	node transformManifest.js
	mkdir -p dist
	cp manifest.json manifest-source.json
	$(call zip,chrome)
	$(call zip,firefox)
	mv manifest-source.json manifest.json