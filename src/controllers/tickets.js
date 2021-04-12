
const { printerConnected } = require('../services/printer');


const getPrinterStatus = (req, res) => {

    let printerInterface = process.env.PRINTER_INTERFACE || '/dev/usb/lp0';

    res.json({
        ok: true,
        status:'',
        model:'',
        interface: printerInterface
    })
}

const printCanteenTicket = async (req, res) => {

    try {

        //console.log(req.body.rut);
        //console.log(req.body.firstName);

        const { firstName, lastName, rut, company } = req.body;
        
        console.log(`usuario: ${firstName} ${lastName}, ${company}`);

        const bln = await printerConnected(req.body);

        res.json({
            ok: true,
            ticket: bln
        })

    } catch (error) {
        console.error(error);
    }

}

module.exports = {
    getPrinterStatus,
    printCanteenTicket
}