function encrypt(str) {
    let result = []
    str.split("").forEach(x => {
        switch (x) {
            case "a":
                result.push("ai")
                break
            case "e":
                result.push("enter")
                break
            case "i":
                result.push("imes")
                break
            case "o":
                result.push("ober")
                break
            case "u":
                result.push("ufat")
                break
            default:
                result.push(x)
                break
        }
    })
    return result.join("")
}

function decrypt(str) {
    return str.replace(/(ai)/ig, "a").replace(/(imes)/ig, "i").replace(/(ufat)/ig, "u").replace(/(ober)/ig, "o").replace(/(enter)/ig, "e")
}

// -----------------------------------------------

$(document).ready(function () {
    $('#result').hide()
    $('#copy').hide()
    $('#btnEncrypt').click(function () {
        let data = $('#data').val()
        if (data === null || data.length === 0) {
            alert("El campo esta vacio no se puede encriptar")
        } else {
            $('#imageM').removeClass('d-lg-block')
            $('.noData').hide()
            $('#result').show()
            $('#copy').show()
            $('#result').val(encrypt(data))
        }
    })
    $('#btnDecrypt').click(function () {
        let data = $('#data').val()
        if (data === null || data.length === 0) {
            alert("El campo esta vacio no se puede desencriptar")
        } else {
            $('#imageM').removeClass('d-lg-block')
            $('.noData').hide()
            $('#result').show()
            $('#copy').show()
            $('#result').val(decrypt(data))
        }
    })
    $('#copy').click(function () {
        $('#result').select()
        document.execCommand('copy')
    })
})