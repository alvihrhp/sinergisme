$(document).ready(function () {

    /*** FOR AUTO SCROLL */

    $('.nav-link').on('click', function (e) {
        if (this.hash != "") {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            })
        }
    })

    /*** FOR AUTO SCROLL */

    /*** HOVER SERVICES */

    $('#akutansi').hover(_ => {
        const children = $('#akutansi').children();
        const image = children[0];
        const text = children[1];
        $(image).attr('src', '/assets/images/service_icon_akuntansi_blue.svg');
        $(text).css('color', '#005E9C');
    }, _ => {
        const children = $('#akutansi').children();
        const image = children[0];
        const text = children[1];
        $(image).attr('src', '/assets/images/service_icon_akuntansi_white.svg');
        $(text).css('color', 'white');
    })

    $('#analisa-keuangan').hover(_ => {
        const children = $('#analisa-keuangan').children();
        const image = children[0];
        const text = children[1];
        $(image).attr('src', '/assets/images/service_icon_analisakeuangan_blue.svg');
        $(text).css('color', '#005E9C');
    }, _ => {
        const children = $('#analisa-keuangan').children();
        const image = children[0];
        const text = children[1];
        $(image).attr('src', '/assets/images/service_icon_analisakeuangan_white.svg');
        $(text).css('color', 'white');
    })

    $('#perencanaan-keuangan').hover(_ => {
        const children = $('#perencanaan-keuangan').children();
        const image = children[0];
        const text = children[1];
        $(image).attr('src', '/assets/images/service_icon_perencanaankeuangan_blue.svg');
        $(text).css('color', '#005E9C');
    }, _ => {
        const children = $('#perencanaan-keuangan').children();
        const image = children[0];
        const text = children[1];
        $(image).attr('src', '/assets/images/service_icon_perencanaankeuangan_white.svg');
        $(text).css('color', 'white');
    })

    $('#perpajakan').hover(_ => {
        const children = $('#perpajakan').children();
        const image = children[0];
        const text = children[1];
        $(image).attr('src', '/assets/images/service_icon_perpajakan_blue.svg');
        $(text).css('color', '#005E9C');
    }, _ => {
        const children = $('#perpajakan').children();
        const image = children[0];
        const text = children[1];
        $(image).attr('src', '/assets/images/service_icon_perpajakan_white.svg');
        $(text).css('color', 'white');
    })

    $('#pelatihan').hover(_ => {
        const children = $('#pelatihan').children();
        const image = children[0];
        const text = children[1];
        $(image).attr('src', '/assets/images/service_icon_pelatihan_blue.svg');
        $(text).css('color', '#005E9C');
    }, _ => {
        const children = $('#pelatihan').children();
        const image = children[0];
        const text = children[1];
        $(image).attr('src', '/assets/images/service_icon_pelatihan_white.svg');
        $(text).css('color', 'white');
    })

    $('#konsultasi').hover(_ => {
        const children = $('#konsultasi').children();
        const image = children[0];
        const text = children[1];
        $(image).attr('src', '/assets/images/service_icon_konsultasi_blue.svg');
        $(text).css('color', '#005E9C');
    }, _ => {
        const children = $('#konsultasi').children();
        const image = children[0];
        const text = children[1];
        $(image).attr('src', '/assets/images/service_icon_konsultasi_white.svg');
        $(text).css('color', 'white');
    })
    /*** HOVER SERVICES */

    /*** CUSTOM SELECT MODAL */

    let flagSelectAkutansi = false;
    let flagSelectAnalisaKeuangan = false;
    let flagSelectPerencaanKeuangan = false;
    let flagSelectPerpajakan = false;
    let flagSelectPelatihan = false;
    let flagSelectKonsultasi = false;

    $('#select-akutansi').on('click', function () {
        if (!flagSelectAkutansi) {
            $('#akutansi-select-content').show();
            flagSelectAkutansi = true;
        } else {
            $('#akutansi-select-content').hide();
            flagSelectAkutansi = false;
        }
    });

    $('#select-anakeu').on('click', function () {
        if (!flagSelectAnalisaKeuangan) {
            $('#anakeu-select-content').show();
            flagSelectAnalisaKeuangan = true;
        } else {
            $('#anakeu-select-content').hide();
            flagSelectAnalisaKeuangan = false;
        }
    });

    $('#select-perkeu').on('click', function () {
        if (!flagSelectPerencaanKeuangan) {
            $('#perkeu-select-content').show();
            flagSelectPerencaanKeuangan = true;
        } else {
            $('#perkeu-select-content').hide();
            flagSelectPerencaanKeuangan = false;
        }
    })

    $('#select-perpajakan').on('click', function () {
        if (!flagSelectPerpajakan) {
            $('#perpajakan-select-content').show();
            flagSelectPerpajakan = true;
        } else {
            $('#perpajakan-select-content').hide();
            flagSelectPerpajakan = false;
        }
    })

    $('#select-pelatihan').on('click', function () {
        if (!flagSelectPelatihan) {
            $('#pelatihan-select-content').show();
            flagSelectPelatihan = true;
        } else {
            $('#pelatihan-select-content').hide();
            flagSelectPelatihan = false;
        }
    })

    $('#select-konsultasi').on('click', function () {
        if (!flagSelectKonsultasi) {
            $('#konsultasi-select-content').show();
            flagSelectKonsultasi = true;
        } else {
            $('#konsultasi-select-content').hide();
            flagSelectKonsultasi = false;
        }
    })

    $('body').click(function (e) {
        const idClicked = e.target.id;
        let text = '';

        const idClickedSplit = idClicked.split('-');

        if (idClickedSplit[1] === 'akutansi' && Number(idClickedSplit[2])) {
            text = $(`#${idClicked}`).text();
            $('#select-akutansi-text').text(text);
            $('#akutansi-select-content').hide();
            flagSelectAkutansi = false;
        } else if (idClickedSplit[1] === 'anakeu' && Number(idClickedSplit[2])) {
            text = $(`#${idClicked}`).text();
            $('#select-anakeu-text').text(text);
            $('#anakeu-select-content').hide();
            flagSelectAnalisaKeuangan = false;
        } else if (idClickedSplit[1] === 'perkeu' && Number(idClickedSplit[2])) {
            text = $(`#${idClicked}`).text();
            $('#select-perkeu-text').text(text);
            $('#perkeu-select-content').hide();
            flagSelectPerencaanKeuangan = false;
        } else if (idClickedSplit[1] === 'perpajakan' && Number(idClickedSplit[2])) {
            text = $(`#${idClicked}`).text();
            $('#select-perpajakan-text').text(text);
            $('#perpajakan-select-content').hide();
            flagSelectPerpajakan = false;
        } else if (idClickedSplit[1] === 'pelatihan' && Number(idClickedSplit[2])) {
            text = $(`#${idClicked}`).text();
            $('#select-pelatihan-text').text(text);
            $('#pelatihan-select-content').hide();
            flagSelectPelatihan = false;
        } else if (idClickedSplit[1] === 'konsultasi' && Number(idClickedSplit[2])) {
            text = $(`#${idClicked}`).text();
            $('#select-konsultasi-text').text(text);
            $('#konsultasi-select-content').hide();
            flagSelectKonsultasi = false;
        }
    })

    /*** CUSTOM SELECT MODAL */

})