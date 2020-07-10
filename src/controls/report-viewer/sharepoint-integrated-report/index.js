$(function () {
    $("#viewer").boldReportViewer({
                    reportServiceUrl: "https://demos.boldreports.com/services/api/SharePointReports",
					reportPath: "http://<servername>/reportserver$instanceName/SSRSSamples/Territory Sales.rdl",
                    reportServerUrl: "http://<servername>/reportserver$instanceName"
                });
});