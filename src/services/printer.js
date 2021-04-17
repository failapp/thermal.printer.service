const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

async function printerTicketCanteen(ticket) {

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
    //console.log("thermal printer connected:", isConnected);

    if (!isConnected) {
        console.error("fail print canteen ticket.. is connected: ", isConnected);
        return false;
    }
    
    serviceName = ticket.serviceName;
    company = ticket.company;
    firstName = ticket.firstName;
    lastName = ticket.lastName;

    serviceName = serviceName.substring(0, 20);
    company = company.substring(0, 21);
    firstName = firstName.substring(0, 21);
    lastName = lastName.substring(0, 21);

    printer.clear();
    //printer.println("Test de impresión..");

    printer.setTextNormal();
    printer.println(ticket.title);
    printer.println(ticket.subtitle);

    printer.setTextSize(1,1);
    printer.println(serviceName);

    printer.setTextNormal();
    //printer.setTextDoubleHeight();

    dateEvent = ticket.date + ' ' + ticket.time;
    printer.setTextDoubleWidth();
    printer.println(dateEvent);

    printer.setTextNormal();
    printer.println("")
    printer.println("empresa:")

    printer.setTextDoubleWidth();
    printer.println(company);

    printer.setTextNormal();
    printer.println("")
    printer.println("funcionario:")

    printer.setTextDoubleWidth();
    printer.println(ticket.documentId);
    
    printer.println(firstName);
    printer.println(lastName);

    printer.setTextNormal();
    printer.println("")
    printer.println("checksum:")
   
    //printer.bold(true); 
    printer.println(ticket.checksum);

    printer.cut();

    try {
        let execute = printer.execute();
        //console.log('text -> ', text);
        console.log("Print done! userId:", ticket.userId);
    } catch (error) {
        console.error("Print failed:", error);
        return false;
    }

    return isConnected;

}


//printerConnected(ticket);
//const printerStatus = printerConnected(ticket);

module.exports = {
    printerTicketCanteen
}