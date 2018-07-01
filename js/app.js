(function ($) {
  $(document).ready(function () {
    if ($.trim($('#bcm1codierung1').val()) && $.trim($('#bcm1codierung2').val())) {

      $bcm1codierung1 = $.trim($('#bcm1codierung1').val());
      $bcm1codierung2 = $.trim($('#bcm1codierung2').val());
      $bcm1codierung1 = $bcm1codierung1.match(/.{1,2}/g);
      $bcm1codierung2 = $bcm1codierung2.match(/.{1,2}/g);

      for (var i = 0; i < $bcm1codierung1.length; i++) {
        $('#bcm1formatiert1').append($bcm1codierung1[i] + ' ');
        $('#bcm1formatiert2').append($bcm1codierung2[i] + ' ');


        $('#ByteOutput1').append((i+1) + '. Bit:' + ' ' + hex2bin($bcm1codierung1[i]) + ' ');
        $('#ByteOutput2').append((i+1) + '. Bit:' + ' ' + hex2bin($bcm1codierung2[i]) + ' ');
        if(((i+1) % 3) === 0) {
          $('#ByteOutput1').append('<br>');
          $('#ByteOutput2').append('<br>');

        }

        if(((i+1) % 3) === 0) {
          $('#bcm1formatiert1').append('\n');
          $('#bcm1formatiert2').append('\n');
        }
      }
    }

    const C47 = {
      original: $bcm1codierung1[0] + ' ' + $bcm1codierung1[1] + ' ' + $bcm1codierung1[2],
      Byte1: hex2bin($bcm1codierung1[0]),
      Byte2: hex2bin($bcm1codierung1[1]),
      Byte3: hex2bin($bcm1codierung1[2])
    };
    printLamp(C47, 'C47');

    const A6 = {
      original: $bcm1codierung1[3] + ' ' + $bcm1codierung1[4] + ' ' + $bcm1codierung1[5],
      Byte1: hex2bin($bcm1codierung1[3]),
      Byte2: hex2bin($bcm1codierung1[4]),
      Byte3: hex2bin($bcm1codierung1[5])
    };
    printLamp(A6, 'A6');

    const C28 = {
      original: $bcm1codierung1[6] + ' ' + $bcm1codierung1[7] + ' ' + $bcm1codierung1[8],
      Byte1: hex2bin($bcm1codierung1[6]),
      Byte2: hex2bin($bcm1codierung1[7]),
      Byte3: hex2bin($bcm1codierung1[8])
    };
    printLamp(C28, 'C28');

    const A28 = {
      original: $bcm1codierung1[9] + ' ' + $bcm1codierung1[10] + ' ' + $bcm1codierung1[11],
      Byte1: hex2bin($bcm1codierung1[9]),
      Byte2: hex2bin($bcm1codierung1[10]),
      Byte3: hex2bin($bcm1codierung1[11])
    };
    printLamp(A28, 'A28');

    const C4A26 = {
      original: $bcm1codierung1[12] + ' ' + $bcm1codierung1[13] + ' ' + $bcm1codierung1[14],
      Byte1: hex2bin($bcm1codierung1[12]),
      Byte2: hex2bin($bcm1codierung1[13]),
      Byte3: hex2bin($bcm1codierung1[14])
    };
    printLamp(C4A26, 'C4A26');

    const C3A27 = {
      original: $bcm1codierung1[15] + ' ' + $bcm1codierung1[16] + ' ' + $bcm1codierung1[17],
      Byte1: hex2bin($bcm1codierung1[15]),
      Byte2: hex2bin($bcm1codierung1[16]),
      Byte3: hex2bin($bcm1codierung1[17])
    };
    printLamp(C3A27, 'C3A27');

    const C26A44 = {
      original: $bcm1codierung1[18] + ' ' + $bcm1codierung1[19] + ' ' + $bcm1codierung1[20],
      Byte1: hex2bin($bcm1codierung1[18]),
      Byte2: hex2bin($bcm1codierung1[19]),
      Byte3: hex2bin($bcm1codierung1[20])
    };
    printLamp(C26A44, 'C26A44');

    const A7A8 = {
      original: $bcm1codierung1[21] + ' ' + $bcm1codierung1[22] + ' ' + $bcm1codierung1[23],
      Byte1: hex2bin($bcm1codierung1[21]),
      Byte2: hex2bin($bcm1codierung1[22]),
      Byte3: hex2bin($bcm1codierung1[23])
    };
    printLamp(A7A8, 'A7A8');

    const A10C50 = {
      original: $bcm1codierung1[24] + ' ' + $bcm1codierung1[25] + ' ' + $bcm1codierung1[26],
      Byte1: hex2bin($bcm1codierung1[24]),
      Byte2: hex2bin($bcm1codierung1[25]),
      Byte3: hex2bin($bcm1codierung1[26])
    };
    printLamp(A10C50, 'A10C50');

    const A9C51 = {
      original: $bcm1codierung1[27] + ' ' + $bcm1codierung1[28] + ' ' + $bcm1codierung1[29],
      Byte1: hex2bin($bcm1codierung1[27]),
      Byte2: hex2bin($bcm1codierung1[28]),
      Byte3: hex2bin($bcm1codierung1[29])
    };
    printLamp(A9C51, 'A9C51');

    const B50 = {
      original: $bcm1codierung1[30] + ' ' + $bcm1codierung1[31] + ' ' + $bcm1codierung1[32],
      Byte1: hex2bin($bcm1codierung1[30]),
      Byte2: hex2bin($bcm1codierung1[31]),
      Byte3: hex2bin($bcm1codierung1[32])
    };
    printLamp(B50, 'B50');

    const B47B48 = {
      original: $bcm1codierung1[33] + ' ' + $bcm1codierung1[34] + ' ' + $bcm1codierung1[35],
      Byte1: hex2bin($bcm1codierung1[33]),
      Byte2: hex2bin($bcm1codierung1[34]),
      Byte3: hex2bin($bcm1codierung1[35])
    };
    printLamp(B47B48, 'B47B48');

    const C48C49 = {
      original: $bcm1codierung1[36] + ' ' + $bcm1codierung1[37] + ' ' + $bcm1codierung1[38],
      Byte1: hex2bin($bcm1codierung1[36]),
      Byte2: hex2bin($bcm1codierung1[37]),
      Byte3: hex2bin($bcm1codierung1[38])
    };
    printLamp(C48C49, 'C48C49');

    const A4A3 = {
      original: $bcm1codierung1[39] + ' ' + $bcm1codierung1[40] + ' ' + $bcm1codierung1[41],
      Byte1: hex2bin($bcm1codierung1[39]),
      Byte2: hex2bin($bcm1codierung1[40]),
      Byte3: hex2bin($bcm1codierung1[41])
    };
    printLamp(A4A3, 'A4A3');

    const C43A2 = {
      original: $bcm1codierung1[42] + ' ' + $bcm1codierung1[43] + ' ' + $bcm1codierung1[44],
      Byte1: hex2bin($bcm1codierung1[42]),
      Byte2: hex2bin($bcm1codierung1[43]),
      Byte3: hex2bin($bcm1codierung1[44])
    };
    printLamp(C43A2, 'C43A2');

    const rest = {
      original: $bcm1codierung1[45] + ' ' + $bcm1codierung1[46],
      Byte1: hex2bin($bcm1codierung1[45]),
      Byte2: hex2bin($bcm1codierung1[46])
    };
    printLamp(rest, 'rest');
  });

  function hex2bin(hex){
    return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
  }

  function printLamp(Lamp, Text) {
    $('#' + Text + 'Original').text(Lamp.original);
    $('#' + Text + 'byte1').text(Lamp.Byte1);
    $('#' + Text + 'byte2').text(Lamp.Byte2);
    $('#' + Text + 'byte3').text(Lamp.Byte3);
  }
})(jQuery);