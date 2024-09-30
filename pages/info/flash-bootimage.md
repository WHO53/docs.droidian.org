# Flashing kernel through deb packages

[flash-bootimage](https://github.com/droidian/flash-bootimage) is used for flashing kernel on device through packages. It usually works out of the box for most devices but there might be some cases where it doesn't. So you might need to change some configuration that suits your needs. 
> Caution: You might not what to touch the conf unnecessarily.

flash-bootimage.conf is located at `/etc/flash-bootimage/<device.conf>`

You can find the example flash-bootimage.conf [here](https://github.com/droidian/flash-bootimage/blob/droidian/config/flash-bootimage.conf).
You can just add the config option you want to change in `/etc/flash-bootimage/<device.conf>`.

