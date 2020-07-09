function onDrillThrough(args) {
    args.actionInfo.ReportName = "personal-details";
    args.actionInfo.Parameters = [{ name: 'EmployeeID', value: ['3'] }];
}

$(function () {
    $("#viewer").boldReportViewer({
                    reportServiceUrl: "https://demos.boldreports.com/services/api/ReportViewer",
                    reportPath: '~/Resources/docs/sales-person-details.rdl',
                    drillThrough: onDrillThrough
                });
});