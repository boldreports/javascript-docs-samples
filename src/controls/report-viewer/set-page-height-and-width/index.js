$(function () {
    $("#viewer").boldReportViewer({
                    reportServiceUrl: "https://demos.boldreports.com/services/api/ReportViewer",
					reportPath: '~/Resources/docs/sales-order-detail.rdl',
                    printMode: true,
                    pageSettings: {
                        height: 11.69,
                        width: 8.27
                    }
                });
});