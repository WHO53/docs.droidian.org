---
title: "Rootfs"
date: 2023-12-26T14:44:09-0500
draft: false
---

# Resizing
On new ports using the generic recovery flashable images, by default, the flash script will resize rootfs.img to 8GB.

To resize the rootfs manually, boot to recovery and run the following command:

	resize2fs /data/rootfs.img 16G

Replace 16G with the amount of free storage you have available.
If unsure, you can check the amount with the following command:

	df -h /data/
