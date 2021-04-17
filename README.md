# thermal.printer.service

```
// ejecutar servicio en contenedor con privilegios de administrador ..

docker run -itd --name api-printer -p 3000:3000 --privileged \
	-v /var/run/dbus:/var/run/dbus -v /dev/bus/usb:/dev/bus/usb -v /dev/usb:/dev/usb \
	-e "PRINTER_INTERFACE=/dev/usb/lp0" \
	thermal-printer:dev

// --restart=always 

```