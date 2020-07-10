function onReportError(args) {
    alert(args.errmsg);
    args.cancel = true;
}

$(function () {
    $("#viewer").boldReportViewer({
                    reportServiceUrl: "https://demos.boldreports.com/services/api/ReportViewer",
                    processingMode: ej.ReportViewer.ProcessingMode.Local,
					//reportPath: '~/Resources/docs/product-list.rdlc',
                    reportError: onReportError
                });
});