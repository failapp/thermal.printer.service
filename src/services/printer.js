const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

async function printerConnected(ticket) {

    let printerInterface = process.env.PRINTER_INTERFACE || '/dev/usb/lp0';

    let printer = new ThermalPrinter({
        type: PrinterTypes.EPSON,
        interface: printerInterface,
        characterSet: 'SLOVENIA',
        options:{
            timeout: 5000
        }
    });
    let isConnected = await printer.isPrinterConnected();
    console.log("thermal printer connected:", isConnected);

    if (!isConnected) {
        console.log("print canteen ticket.. ", ticket);
    }
    
    return isConnected;

}

//let ticket= {user: '12.400.500', firstName:'Silvestre', lastName:'Montes Del Valle', company:'Acme S.A.'};
//printerConnected(ticket);

//const printerStatus = printerConnected(ticket);

module.exports = {
    printerConnected
}