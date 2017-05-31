//Histórico de Doações
$(function () {
    $('a[title]').tooltip();
});

(function () {
    'use strict';
    var $ = jQuery;
    $.fn.extend({
        filterTable: function () {
            return this.each(function () {
                $(this).on('keyup', function (e) {
                    $('.filterTable_no_results').remove();
                    var $this = $(this),
                        search = $this.val().toLowerCase(),
                        target = $this.attr('data-filters'),
                        $target = $(target),
                        $rows = $target.find('tbody tr');

                    if (search == '') {
                        $rows.show();
                    } else {
                        $rows.each(function () {
                            var $this = $(this);
                            $this.text().toLowerCase().indexOf(search) === -1 ? $this.hide() : $this.show();
                        })
                        if ($target.find('tbody tr:visible').size() === 0) {
                            var col_count = $target.find('tr').first().find('td').size();
                            var no_results = $('<tr class="filterTable_no_results"><td colspan="' + col_count + '">Nenhum Resultado foi Encontrado</td></tr>')
                            $target.find('tbody').append(no_results);
                        }
                    }
                });
            });
        }
    });
    $('[data-action="filter"]').filterTable();
})(jQuery);

$(function () {
    // attach table filter plugin to inputs
    $('[data-action="filter"]').filterTable();

    $('.container').on('click', '.panel-heading span.filter', function () {
        var $this = $(this),
            $panel = $this.parents('.panel');

        $panel.find('.panel-body').slideToggle();
        if ($this.css('display') != 'none') {
            $panel.find('.panel-body input').focus();
        }
    });
    $('[data-toggle="tooltip"]').tooltip();
});

$(function () {
    $("#donaction").on("click", function () {
        var dados = JSON.parse(localStorage.getItem("userData"));
        var address = 'http://127.0.0.1:8080/historicoEmpresa';
        var formData = "cdEmpresa=" + dados.id;
        $.ajax({
            type: "POST",
            url: address,
            timeout: 5000,
            data: formData,
            success: function (data, textStatus, jqXHR) {
                var campanhas = JSON.parse(jqXHR.responseText);
                localStorage.setItem("campanhas", JSON.stringify(campanhas));
                gerarTabela();
            },
            error: function (err) {
                document.getElementById("campanhasTable").innerHTML = '<h3 style="text-align:center; padding:20px">Não foram encontradas campanhas :(</h3>';
            }
        });
    });
});

function gerarTabela() {
    var c = JSON.parse(localStorage.getItem("campanhas"));
    var tabela = ' <div class="panel panel-primary"> <table class="table table-hover" id="dev-table"> <thead> <tr> <th>#</th>'
        + '<th>Campanha</th>  <th>Início</th> <th>Final</th> </tr> </thead>';
    for (var i = 0; i < c.length; i++) {
        tabela += '<tr>' + '<td>' + i + '</td>' + '<td>' + c[i].nmCampanha + '</td>' + '<td>' + c[i].dtInicio + '</td>'
            + '<td>' + c[i].dtFim + '</td> </tr> </div>';
    }
    document.getElementById("campanhasTable").innerHTML = tabela;
}

$(function () {
    $("#disponiveis").on("click", function () {
        var dados = JSON.parse(localStorage.getItem("userData"));
        var address = 'http://127.0.0.1:8080/campanhasDisponiveis';
        var formData = "cidadeEmpresa=" + dados.cidade;
        $.ajax({
            type: "POST",
            url: address,
            timeout: 5000,
            data: formData,
            success: function (data, textStatus, jqXHR) {
                var campanhas = JSON.parse(jqXHR.responseText);
                gerarCampanhas(campanhas);
            },
            error: function (err) {
                document.getElementById("campanhasTable").innerHTML = '<h3 style="text-align:center; padding:20px">Não foram encontradas campanhas :(</h3>';
            }
        });
    });
});


function gerarCampanhas(campanhas) {
    var imagem = "";
    var modal = "";
    for (var i = 0; i < campanhas.length; i++) {
        imagem += '<img src="../images/campanhas/' + campanhas[i].imgPath + '.jpg" alt="campanha' + i + '" class="img-rounded"' +
            'width="140" height="140" href="#" data-toggle="modal"' +
            'data-target="#campanha-modal' + i + '">';
        modal += '<div class="container" xmlns="http://www.w3.org/1999/html">' +
            '<div class="modal fade" id="campanha-modal' + i + '" role="dialog">' +
            '<div class="modal-dialog modal-md-sm">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
            '<h4 class="modal-title">' + campanhas[i].nmCampanha + '</h4>' +
            '</div>' +
            '<div class="modal-body">' +
            '<p>' + campanhas[i].dsCampanha + '</p>' +
            '<img src="../images/campanhas/' + campanhas[i].imgPath + '.jpg" alt="campanha' + i + '" class="img-rounded col-md-12"' +
            'width="240" height="240">' +
            '<p>Deseja contribuir com ' + campanhas[i].qtdMinVoucher + '?</br>Sendo um investimento de ' + campanhas[i].vlrInvestimento + '</p>' +
            '</div>' +
            '<div class="modal-footer">' +
            '<button type="button" class="btn btn-success col-md-4" data-dismiss="modal">Claro!</button>' +
            '<button type="button" class="btn btn-default col-md-2" data-dismiss="modal">Depois</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    document.getElementById("modalsCampanhas").innerHTML = imagem;
    document.getElementById("painelModais").innerHTML = modal;
}