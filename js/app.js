(function ($) {
    $(document).ready(function () {

        $('#bcm1codierung1').change(function () {

            if ($.trim($('#bcm1codierung1').val())) {
                generateFirstBcm1Table();
                lampenStatusZuTextarea();
            }
        });

        $('#bcm1codierung2').change(function () {

            if ($.trim($('#bcm1codierung2').val())) {
                generateSecondBcm1Dff();
            }
        });

        $("#vorabDaten").click(function () {
            $("#bcm1codierung1").html('40C16202212F80612002212F3BAA5A23FE4F33211300003F04212C04213600011500003F00003F00003F00003F0078').trigger('change');
        });

        $("#danachDaten").click(function () {
            $("#bcm1codierung2").html('40C16233A24480612033A24439AA5A29FE4F33AA4200003F04212C04213600011600003F00003F00003F00003F0078').trigger('change');
        });

    });

  function generateFirstBcm1Table() {
      $bcm1codierung1 = $.trim($('#bcm1codierung1').val());
      $bcm1codierung1 = $bcm1codierung1.match(/.{1,2}/g);


      for (var i = 0; i < $bcm1codierung1.length; i++) {
          $('#bcm1formatiert1').append($bcm1codierung1[i] + ' ');

          $('#ByteOutput1').append((i + 1) + '. Bit:' + ' ' + hex2bin($bcm1codierung1[i]) + ' ');

          if (((i + 1) % 3) === 0) {
              $('#ByteOutput1').append('<br>');
          }

          if (((i + 1) % 3) === 0) {
              $('#bcm1formatiert1').append('\n');
          }
      }

      var C47 = new Lampe($bcm1codierung1[0], $bcm1codierung1[1], $bcm1codierung1[2]);
      printLamp(C47, 'C47');

      var A6 = new Lampe($bcm1codierung1[3], $bcm1codierung1[4], $bcm1codierung1[5]);
      printLamp(A6, 'A6');

      var C28 = new Lampe($bcm1codierung1[6], $bcm1codierung1[7], $bcm1codierung1[8]);
      printLamp(C28, 'C28');

      var A28 = new Lampe($bcm1codierung1[9], $bcm1codierung1[10], $bcm1codierung1[11]);
      printLamp(A28, 'A28');

      var C4A26 = new Lampe($bcm1codierung1[12], $bcm1codierung1[13], $bcm1codierung1[14]);
      printLamp(C4A26, 'C4A26');

      var C3A27 = new Lampe($bcm1codierung1[15], $bcm1codierung1[16], $bcm1codierung1[17]);
      printLamp(C3A27, 'C3A27');

      var C26A44 = new Lampe($bcm1codierung1[18], $bcm1codierung1[19], $bcm1codierung1[20]);
      printLamp(C26A44, 'C26A44');

      var A7A8 = new Lampe($bcm1codierung1[21], $bcm1codierung1[22], $bcm1codierung1[23]);
      printLamp(A7A8, 'A7A8');

      var A10C50 = new Lampe($bcm1codierung1[24], $bcm1codierung1[25], $bcm1codierung1[26]);
      printLamp(A10C50, 'A10C50');

      var A9C51 = new Lampe($bcm1codierung1[27], $bcm1codierung1[28], $bcm1codierung1[29]);
      printLamp(A9C51, 'A9C51');

      var B50 = new Lampe($bcm1codierung1[30], $bcm1codierung1[31], $bcm1codierung1[32]);
      printLamp(B50, 'B50');

      var B47B48 = new Lampe($bcm1codierung1[33], $bcm1codierung1[34], $bcm1codierung1[35]);
      printLamp(B47B48, 'B47B48');

      var C48C49 = new Lampe($bcm1codierung1[36], $bcm1codierung1[37], $bcm1codierung1[38]);
      printLamp(C48C49, 'C48C49');

      var A4A3 = new Lampe($bcm1codierung1[39], $bcm1codierung1[40], $bcm1codierung1[41]);
      printLamp(A4A3, 'A4A3');

      var C43A2 = new Lampe($bcm1codierung1[42], $bcm1codierung1[43], $bcm1codierung1[44]);
      printLamp(C43A2, 'C43A2');

      var rest = new Lampe($bcm1codierung1[45], $bcm1codierung1[46]);
      printLamp(rest, 'rest');
  }

  function generateSecondBcm1Dff() {

      //------- Für Diff
      $bcm1codierung1 = $.trim($('#bcm1codierung1').val());
      $bcm1codierung1 = $bcm1codierung1.match(/.{1,2}/g);
      //-------/ Für Diff

      $bcm1codierung2 = $.trim($('#bcm1codierung2').val());
      $bcm1codierung2 = $bcm1codierung2.match(/.{1,2}/g);

      for (var i = 0; i < $bcm1codierung2.length; i++) {


          if($bcm1codierung1[i] == $bcm1codierung2[i]) {
              $('#bcm1formatiert2').append($bcm1codierung2[i] + ' ');
              $('#ByteOutput2').append((i + 1) + '. Bit:' + ' ' + hex2bin($bcm1codierung2[i]) + ' ');
          } else {
              $('#bcm1formatiert2').append('<span style="color: red;">' + $bcm1codierung2[i] + '</span> ');
              $('#ByteOutput2').append('<span style="color: red;">' + (i + 1) + '. Bit:' + ' ' + hex2bin($bcm1codierung2[i]) + '</span> ');
          }


          if (((i + 1) % 3) === 0) {
              $('#ByteOutput2').append('<br>');
          }

          if (((i + 1) % 3) === 0) {
              $('#bcm1formatiert2').append('\n');
          }
      }
  }

  function hex2bin(hex) {
    return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
  }

  function bin2hex(number) {
    var hexa = parseInt(number, 2).toString(16).toUpperCase();
    return (hexa < 10 ? '0' : '') + hexa;
  }

  /**
   * Liest die Option/Select jeder Lampe aus und gibt den Wert in die Textarea
   * unten aus
   */
  function lampenStatusZuTextarea() {
    var C47Byte1 = $('#lampe-C47-1-7').val() + $('#lampe-C47-1-6').val() +
        $('#lampe-C47-1-5').val() + $('#lampe-C47-1-4').val() + $('#lampe-C47-1-3').val() +
        $('#lampe-C47-1-2').val() + $('#lampe-C47-1-1').val() + $('#lampe-C47-1-0').val();
    $('#bcmchanges').text(bin2hex(C47Byte1));
  }

  function printLamp(Lamp, Text) {
    $('#' + Text + 'Original').text(Lamp.original);
    $('#' + Text + 'byte1').text(Lamp.Byte1);
    $('#' + Text + 'byte2').text(Lamp.Byte2);

    if (typeof Lamp.Byte3 !== 'undefined' || Lamp.Byte3 !== null) {
      $('#' + Text + 'byte3').text(Lamp.Byte3);
    }
  }

  function Lampe(byte1, byte2, byte3) {
    if (typeof byte3 !== 'undefined') {
      this.original = byte1 + ' ' + byte2 + ' ' + byte3;
    }
    else {
      this.original = byte1 + ' ' + byte2;
    }

    this.Byte1 = hex2bin(byte1);
    this.Byte2 = hex2bin(byte2);

    if (typeof byte3 !== 'undefined') {
      this.Byte3 = hex2bin(byte3);
    }
  }

  function Golf6() {
    return [
      {Byte: 1, Bytename: "Lampenconfig", Bit: 7, Bitname: "Coming/Leaving Home", value: 0},
      {Byte: 1, Bytename: "Lampenconfig", Bit: 6, Bitname: "Tagfahrlicht", value: 0},
      {Byte: 1, Bytename: "Lampenconfig", Bit: 5, Bitname: "Blinker Signal", value: 0},
      {Byte: 1, Bytename: "Lampenconfig", Bit: 4, Bitname: "Bremslicht", value: 0},
      {Byte: 1, Bytename: "Lampenconfig", Bit: 3, Bitname: "Standlicht", value: 0},
      {Byte: 1, Bytename: "Lampenconfig", Bit: 2, Bitname: "Parklicht", value: 0},
      {Byte: 1, Bytename: "Lampenconfig", Bit: 1, Bitname: "Nebelschlussleuchten", value: 0},
      {Byte: 1, Bytename: "Lampenconfig", Bit: 0, Bitname: "Licht Rückwärtsgang", value: 0},
      {Byte: 2, Bytename: "", Bit: 7, Bitname: "Kaltdiagnose deaktiviert", value: 0},
      {Byte: 2, Bytename: "", Bit: 6, Bitname: "Aus bei Heckklappe offen", value: 0},
      {Byte: 2, Bytename: "", Bit: 5, Bitname: "", value: 0},
      {Byte: 2, Bytename: "", Bit: 4, Bitname: "", value: 0},
      {Byte: 2, Bytename: "", Bit: 3, Bitname: "Dimmung", value: 0},
      {Byte: 2, Bytename: "", Bit: 2, Bitname: "Dimmung", value: 0},
      {Byte: 2, Bytename: "", Bit: 1, Bitname: "Dimmung", value: 0},
      {Byte: 2, Bytename: "", Bit: 0, Bitname: "Dimmung", value: 0},
      {Byte: 3, Bytename: "3F -> Kanal deaktiviert", Bit: 7, Bitname: "", value: 0},
      {Byte: 3, Bytename: "3F -> Kanal deaktiviert", Bit: 6, Bitname: "Warmdiagnose disablen", value: 0},
      {Byte: 3, Bytename: "3F -> Kanal deaktiviert", Bit: 5, Bitname: "", value: 0},
      {Byte: 3, Bytename: "3F -> Kanal deaktiviert", Bit: 4, Bitname: "", value: 0},
      {Byte: 3, Bytename: "3F -> Kanal deaktiviert", Bit: 3, Bitname: "", value: 0},
      {Byte: 3, Bytename: "3F -> Kanal deaktiviert", Bit: 2, Bitname: "", value: 0},
      {Byte: 3, Bytename: "3F -> Kanal deaktiviert", Bit: 1, Bitname: "", value: 0},
      {Byte: 3, Bytename: "3F -> Kanal deaktiviert", Bit: 0, Bitname: "", value: 0}
    ]
  }
})(jQuery);