$(function () {
    $("#viewer").boldReportViewer({
                    reportServiceUrl: "https://demos.boldreports.com/services/api/ReportViewer",
                    reportPath: '~/Resources/docs/sales-order-detail.rdl',
					printMode: true,
                    pageSettings: {
                        orientation: ej.ReportViewer.Orientation.Landscape,
                        paperSize: ej.ReportViewer.PaperSize.Letter
                    }
                });
});