.PHONY: all

all:
	web-ext run

publish:
	@echo "(Press any key to continue.)"
	@echo "- Set the \`WEB_EXT_API_KEY\` and \`WEB_EXT_API_SECRET\` environment variables."
	@read -n1 -s
	@echo "- Run \`web-ext sign --api-key $WEB_EXT_API_KEY --api-secret $WEB_EXT_API_SECRET\`."
	@read -n1 -s
	@echo "- Publish the addon at \`https://addons.mozilla.org/\`."
	@read -n1 -s
