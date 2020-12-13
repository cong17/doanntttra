export function statusWeatherToString(status: number): string {
    let value: string = "";
    switch (status) {
        case 200:
            value = "giông bão có mưa nhẹ";
            break;
        case 300:
            value = "cường độ nhẹ mưa phùn";
            break;
        case 301:
            value = "mưa phùn";
            break;
        case 302:
            value = "cường độ nặng mưa phùn";
            break;
        case 310:
            value = "cường độ nhẹ mưa phùn";
            break;
        case 311:
            value = "mưa phùn";
            break;
        case 312:
            value = "mưa phùn cường độ lớn";
            break;
        case 313:
            value = "mưa rào và mưa phùn";
            break;
        case 314:
            value = "mưa rào và mưa phùn";
            break;
        case 321:
            value = "mưa phùn tắm";
            break;

        case 500:
            value = "mưa nhỏ";
            break;
        case 501:
            value = "mưa vừa";
            break;
        case 502:
            value = "mưa lớn";
            break;
        case 503:
        case 504:
        case 511:
        case 520:
        case 521:
            value = "mưa nhiều";
            break;
        case 600:
            value = "tuyết nhẹ";
            break;

        case 701:
        case 721:
        case 711:
        case 731:
        case 741:
        case 751:
        case 761:
            value = "sương mù";
            break;
        case 800:
            value = "bầu trời quang đãng";
            break;
        case 801:
            value = "ít mây: 11-25%";
            break;
        case 802:
            value = "mây rải rác: 25-50%";
            break;
        case 803:
            value = "mây gãy: 51-84%";
            break;
        case 804:
            value = "mây u ám: 85-100%";
            break;
    }

    return value;
}