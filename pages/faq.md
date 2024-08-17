# FAQ

### What is Droidian?

Droidian is a Debian-based distribution for mobile devices. The goal of Droidian is to be able to run Debian on Android phones. This is accomplished by using well-known technologies such as libhybris and [Halium](https://halium.org/).

  
  

### What is Halium?

Halium is the collaborative project to unify the Hardware Abstraction Layer for projects which run GNU/Linux on mobile devices with pre-installed Android.

  
  

### Which device is the best to give Droidian a try?

Have a look at the list of [officially supported devices](https://devices.droidian.org/devices/). These devices perform the best amongst all others and they are maintained by Droidian's core development team.

  
  

### Can I run Droidian on my phone?

The list of devices that can run Droidian and the instruction to install it on them can be found at [devices.droidian.org](https://devices.droidian.org/).

  
  

### My device is not listed at devices.droidian.org. What should I do now?

You can follow the porting guide available [here](https://docs.droidian.org/porting-guide).

  
  

### Can an Ubuntu Touch device run Droidian?

Droidian is based on Debian and utilizes Halium to interact with Android devices. Since Ubuntu Touch also utilizes Halium, if a device has been ported to Ubuntu Touch using Halium 9 or later, it can likely run Droidian without major changes to the kernel provided by UBports.

  
  

### Why does Droidian use the Android kernel? Why not utilize the mainline Linux kernel?

We rely on the Android Linux kernel and drivers to make all of the functionality provided by Android drivers work.

  
  

### Can I run Android applications in Droidian?

Yes, Waydroid can provide an essentially complete Android experience. You can read more about Waydroid [here](https://docs.droidian.org/info/android-apps/).

  
  

### Can I run Flatpak applications on Droidian?

Yes. Flatpaks are available from the software store.

  
  

### Can I run KDE or Plasma Mobile?

No.

  
  

### How to resize the rootfs?

Resizing is only required for new ports. For instructions, refer to this [link](https://docs.droidian.org/info/rootfs/).

  
  

### How to connect via SSH?

For instructions, refer to this [link](https://docs.droidian.org/info/ssh/).

  
  

### How to change the password/PIN?

The password can be changed in the settings app, with the minimum number of characters being 6.
