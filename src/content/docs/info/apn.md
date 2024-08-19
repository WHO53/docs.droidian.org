---
title: "APN"
date: 2023-12-26T14:44:09-0500
draft: false
---

# APN Misconfiguration
In case your APN settings do not work from your provider, you can get the correct APN from ofono scripts

	/usr/share/ofono/scripts/list-contexts

in the first context with type `internet`, find the Access Point Name and put that in the settings app
