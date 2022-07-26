import download from "downloadjs"
import { degrees, PDFDocument, StandardFonts, rgb } from 'pdf-lib'



// instead of create use the modify and the problem will be solved motherfuker
export async function createPdf(name) {
    // Fetch an existing PDF document
    // const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
    const url = 'https://res.cloudinary.com/dyvgbw32i/image/upload/v1658863374/certificate_scnpm1.pdf'
    const existingPdfBytes = await fetch(url)
        .then(res => res.arrayBuffer())
    // const existingPdfBytes = await certificate.arrayBuffer()

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    // Embed the Helvetica font
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    // Get the first page of the document
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]

    // Get the width and height of the first page
    const { width, height } = firstPage.getSize()

    // Draw a string of text diagonally across the first page
    firstPage.drawText(name, {
        x: 200,
        y: height / 2,
        size: 30,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
    })

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()

    // Trigger the browser to download the PDF document
    download(pdfBytes, "pdf-lib_modification_example.pdf", "application/pdf");
}
