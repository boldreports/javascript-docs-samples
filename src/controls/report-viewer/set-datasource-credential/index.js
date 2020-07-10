$(function () {
    $("#viewer").boldReportViewer({
                    reportServiceUrl: "https://demos.boldreports.com/services/api/SSRSDataSourceCredentials",
                    reportPath: "/SSRSSamples/Territory Sales",
                    reportServerUrl: "http://<servername>/reportserver$instanceName"
                });
});