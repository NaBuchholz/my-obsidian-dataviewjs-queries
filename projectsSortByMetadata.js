const pages = dv.pages('"MOCs"').where(p => p.project === "true");

if (pages && pages.length > 0) {

}
else {
    dv.paragraph("Nenhuma nota aonde projects == true")
}