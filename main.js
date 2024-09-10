var i = 4;
      function addForm() {
        var div_data = document.createElement("div");
        div_data.className = "textbox";
        div_data.id = "text-parent" + i;
        var divparent = document.getElementById("container");
        divparent.appendChild(div_data);

        var input_data = document.createElement("input");
        input_data.type = "text";
        input_data.id = "textbox" + i;
        input_data.placeholder = "テキスト" + i;

        var button_data = document.createElement("button");

        // IIFE を使用して `i` の値を固定
        (function (currentI) {
          button_data.onclick = function () {
            copyText("textbox" + currentI);
          };
        })(i);

        button_data.textContent = "コピー" + i;

        div_data.appendChild(input_data);
        div_data.appendChild(button_data);
        i++;
      }

      function copyText(textboxId) {
        // テキストボックスの要素を取得
        var textbox = document.getElementById(textboxId);

        // テキストボックスの内容をクリップボードにコピー
        navigator.clipboard
          .writeText(textbox.value)
          .then(function () {
            // コピー完了のメッセージを表示
            alert("コピーしました: " + textbox.value);
          })
          .catch(function (error) {
            console.error("コピーに失敗しました: ", error);
          });
      }
