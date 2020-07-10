$(function () {
    $("#viewer").boldReportViewer({
                    reportServiceUrl: "https://demos.boldreports.com/services/api/ReportViewer",
                    reportPath: '~/Resources/docs/sales-order-detail.rdl',
					exportSettings: { exportOptions: ej.ReportViewer.ExportOptions.All & ~ej.ReportViewer.ExportOptions.Html & ~ej.ReportViewer.ExportOptions.Word }
                });
});