$(function () {
                var dataValue = "";
                var apiRequest = new Object({
                    password: "demo",
                    userid: "guest@boldreports.com"
                    });

                $.ajax({
                    type: "POST",
                    url: "https://on-premise-demo.boldreports.com/reporting/api/site/site1/get-user-key",
                    data: apiRequest,
                    success: function (data) {
                        dataValue = data.Token;
                        var token = JSON.parse(dataValue);

                        $("#viewer").boldReportViewer(
                            {
                                reportServiceUrl: "https://on-premise-demo.boldreports.com/reporting/reportservice/api/Viewer",
                                serviceAuthorizationToken: token.token_type + " " + token.access_token,
                                reportPath: '/Sample Reports/Company Sales',
                                ajaxBeforeLoad: "onAjaxRequest"
                            });
                    }
                });
            });
            function onAjaxRequest(args) {
                args.headers.push({
                    Key: 'serverurl', Value: 'https://on-premise-demo.boldreports.com/reporting/api/site/site1'
                });
            }