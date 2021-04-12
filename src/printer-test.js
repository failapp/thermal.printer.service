const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

/*
const printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: '/dev/usb/lp0',
    characterSet: 'SLOVENIA',
    options:{
        timeout: 5000
    }
});
*/

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}


async function printerConnected(ticket) {

    let printer = new ThermalPrinter({
        type: PrinterTypes.EPSON,
        interface: '/dev/usb/lp0',
        characterSet: 'SLOVENIA',
        options:{
            timeout: 5000
        }
    });
    let isConnected = await printer.isPrinterConnected();
    console.log("thermal printer connected:", isConnected);

    if (!isConnected) return;

    console.log("print canteen ticket.. ", ticket);

}

let ticket= {user: '12.400.500', firstName:'Silvestre', lastName:'Montes Del Valle', company:'Acme S.A.'};

printerConnected(ticket);


/*
let items = [1, 2, 3, 4, 5, 7, 8, 9, 0];
let bln = false;
runLoop = async () => {
    for (const item of items) {
        await printer.isPrinterConnected().then( x => {
            bln = x;
            console.log('x ->', x);
            console.log('bln ->', bln);
        });
        //await sleep(1000);
        //console.log('item ->', item);
    }
}
runLoop();
console.log("thermal printer isConnected -> ", bln);
*/

/*
let conn = false;
printerConnected = async () => {
    await printer.isPrinterConnected().then( x => {
        conn = x;
        console.log('function async.. conn ->', conn);
    });    
}
//isConnected = printerConnected();
printerConnected().then( x => {
    conn = x;
});
console.log("thermal printer isConnected -> ", conn);
*/


/*
try {
    
    //let isConnected = await printer.isPrinterConnected();
    
    let isConnected = false; 
    printerConnected().then(x => {
        isConnected = x;
    });
    
    console.log('thermal printer connected -> ', isConnected);

} catch (error) {
    console.log("thermal print failed:", error);
}
*/


/*
//printer.alignCenter();
printer.clear();
printer.println("Test de impresión..");
//printer.println("otra linea..");
//printer.beep(); sewoo SLK-TS400 not found ..
printer.cut();
//let text = printer.getText();

try {
  let execute = printer.execute();
  //console.log('text -> ', text);
  console.error("Print done!");
} catch (error) {
  console.log("Print failed:", error);
}
*/



