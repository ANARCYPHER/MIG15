function validurl(e){try{new URL(e);return!0}catch(e){return!1}}function updatewallet(e,t=!1,o=null){var n=$("#exchange-from").val(),a=new XMLHttpRequest;a.open("GET","http://localhost/ExchangeWebsite/backend/tools.php?command=get_wallet_address&crypto="+n+"&providor="+e,!1),a.onload=function(){if(4===a.readyState){var e=a.responseText;if(e.length>3){var n=JSON.parse(e);n.status?($("#our-wallet-address").val(n.wallet),t||($(".top-menu-next-providor-walletbox-item").removeClass("top-menu-next-providor-walletbox-item-active"),$(o).toggleClass("top-menu-next-providor-walletbox-item-active"))):alert(n.error)}}},a.send()}document.addEventListener("DOMContentLoaded",function(){updatewallet("blockchain",!0),$(".bottom-menu-item").on("click",function(){$(".bottom-menu-item").removeClass("bottom-menu-item-active"),$(this).toggleClass("bottom-menu-item-active")}),$(".top-menu-next-providor-walletbox-item").on("click",function(){var e=$(this)[0].lastElementChild.innerHTML;updatewallet(e=e.toLowerCase(),!1,this)}),$(".review-info-pop-button-row-no").on("click",function(){$(".review-info-pop").css("display","none"),$(".body-darker").css("display","none")}),$(".review-info-pop-button-row-yes").on("click",function(){var e=$("#transaction-url").val(),t='{"wallet":"'+("true"===$("#have-wl").val()?$(".top-menu-exchange-wallet-row-item-rad-active")[0].lastElementChild.innerHTML:$("#wallet-url").val())+'","transaction_url":"'+e+'","bill_id":"'+$("#exchange-bill-id").val()+'"}',o=new XMLHttpRequest;o.onerror=function(){alert("Try again please")},o.ontimeout=function(){alert("Check your network and try again")},o.open("POST","http://localhost/ExchangeWebsite/backend/tools.php?command=submit_bill",!1),o.setRequestHeader("Content-Type","application/json"),o.onload=function(){if(4===o.readyState){var e=o.responseText;if(e.includes("status")){var t=JSON.parse(e);t.status?($(".review-info-pop").css("display","none"),$(".body-darker").css("display","unset"),$(".otp-box").css("display","flex")):alert(t.error)}}},o.send(t)}),$(".otp-input-item").on("input",function(e){if($(this).val().match(/\D/))$(this).val("");else{var t=$(this)[0].id;if(!t.includes("5")){var o=t.split("-")[2],n="otp-input-"+(parseInt(o)+1);$("#"+n).select()}}}),$(".otp-box-buttonrow-back").on("click",function(){$(".body-darker").css("display","none"),$(".otp-box").css("display","none")}),$(".otp-box-buttonrow-yes").on("click",function(){var e=$("#otp-input-1").val()+$("#otp-input-2").val()+$("#otp-input-3").val()+$("#otp-input-4").val()+$("#otp-input-5").val(),t=$("#exchange-bill-id").val();try{if(parseInt(e)>0&&5===e.toString().length){var o=new XMLHttpRequest;o.onerror=function(){alert("we got unexpected error, try agian")},o.ontimeout=function(){alert("please check your connection and try again")};var n='{"otp_code":"'+e+'","bill_id":"'+t+'"}';o.open("POST","http://localhost/ExchangeWebsite/backend/tools.php?command=submit_bill",!1),o.onload=function(){if(4===o.readyState){var e=o.responseText;if(e.includes("status")){var t=JSON.parse(e);t.status?window.location="http://localhost/ExchangeWebsite/backend/transactions.php":"invalid code"===t.error?alert("invalid otp code"):alert("we got unexpected error, try agian")}else alert("we got unexpected error, try agian")}},o.setRequestHeader("Content-Type","application/json"),o.send(n)}else alert("invalid code")}catch(e){alert("invalid code")}}),$(".top-menu-exchange-wallet-row-item").on("click",function(){$(".top-menu-exchange-wallet-row-item").removeClass("top-menu-exchange-wallet-row-item-rad-active"),$(this).toggleClass("top-menu-exchange-wallet-row-item-rad-active")}),$("#main-ex-two-submit").on("click",function(){var e=$("#transaction-url").val();validurl(e)?($("#reveiw-pop-from-amount").text($("#exchange-fromamount").val()),$("#reveiw-pop-to-amount").text($("#exchange-toamout").val()),$("#reveiw-pop-from-sign").text($("#exchange-from").val()),$("#reveiw-pop-to-sign").text($("#exchange-to").val()),$("#review-transaction-url").text(e),$(".review-info-pop").css("display","flex"),$(".body-darker").css("display","unset")):alert("transaction url is invalid")}),$(".copy").on("click",function(){$("#our-wallet-address").val();var e=document.getElementById("our-wallet-address");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")})});