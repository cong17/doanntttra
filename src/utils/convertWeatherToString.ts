export function statusWeatherToString(status: number): string {
    let value: string = "";
    switch (status) {
        case 200:
            value = "giông bão có mưa nhẹ";
            break;
        case 300:
            value = "cường độ nhẹ mưa phùn";
            break;
        case 500:
            value = "mưa nhỏ";
            break;
        case 600:
            value = "tuyết nhẹ";
            break;
        case 701:
            value = "sương mù";
            break;
        case 800:
            value = "bầu trời quang đãng";
            break;
        case 801:
            value = "ít mây: 11-25%";
            break;
    }
    return value;
}