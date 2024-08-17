---
title: "APN"
date: 2023-12-26T14:44:09-0500
draft: false
---

# APN Misconfiguration

In case your APN settings do not work from your provider, you can get the correct APN from ofono scripts

	/usr/share/ofono/scripts/list-contexts

in the first context with type `internet`, find the Access Point Name and put that in the settings app

# T-Mobile

Some users have reported issues with T-Mobile default APN settings being bad

To confirm, you can run

	/usr/share/ofono/scripts/list-contexts

if it is reported as `fast.t-mobile.com`, then it is wrong and has to be corrected.

we can fix it using these commands:

	/usr/share/ofono/scripts/set-context-property 0 AccessPointName 'fast.tmobile.com'
	/usr/share/ofono/scripts/set-context-property 0 Protocol ip

Now reactivating the context from settings should give a usable ip and mobile data should start working.
