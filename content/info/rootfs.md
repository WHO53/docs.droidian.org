---
title: "Rootfs"
date: 2023-12-26T14:44:09-0500
draft: false
---

# Resizing
On new ports using the generic recovery flashable images, by defualt, the flash script will default to 8GB of storage.

To resize the rootfs, boot to recovery and run the following command:

	resize2fs /data/rootfs.img 16G

replace 16G with your amount of storage which can be acquired like so:

	df -h /data/
