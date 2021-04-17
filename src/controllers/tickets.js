
const { printerTicketCanteen } = require('../services/printer');


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

        const ticket = {
            title: req.body.title,
            subtitle: req.body.subtitle,
            serviceName: req.body.serviceName,
            date: req.body.date,
            time: req.body.time,
            checksum: req.body.checksum,
            company: req.body.company,
            userId: req.body.userId,
            documentId: req.body.documentId,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }

        //const { firstName, lastName, rut, company } = req.body;
        //console.log(`usuario: ${firstName} ${lastName}, ${company}`);

        const bln = await printerTicketCanteen(ticket);

        if (bln) {
            res.status(200).json({ticket: bln})
        } else {
            res.status(204).json({ticket: bln})
        }

        /*
        res.json({
            ticket: bln
        })
        */

    } catch (error) {
        console.error(error);
        res.status(500).json({ticket: false})
    }

}

module.exports = {
    getPrinterStatus,
    printCanteenTicket
}