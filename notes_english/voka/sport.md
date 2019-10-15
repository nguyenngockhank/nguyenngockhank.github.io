# Từ vựng về Thể thao

## Bóng đá

| Từ        | Phiên âm |  Nghĩa      |
|:--------- |:-------- | :---------- |
| Stadium | */ˈsteɪdiəm/* | sân vận động |
| Pitch | */pɪtʃ/* | sân bóng đá |
| Scoreboard | */ˈskɔːbɔːd/* | bảng điểm |
| Goal | */ɡəʊl/* | khung thành |
| Striker | */ˈstraɪkər/* | tiền đạo |
| Defender | */di'fendə/* | hậu vệ |
| Goalkeeper | */ˈɡoʊlkiːpər/* | thủ môn |
| Referee | */ˌrefərˈiː/* | trọng tài |
| Assistant referee | ** | trọng tài biên |
| Coach | */kəʊtʃ/* | huấn luyện viên |
| Penalty kick | ** | cú đá phạt đền |
| Corner kick | ** | cú đá phạt góc |
| Red card | ** | thẻ đỏ |
| Yellow card | ** | thẻ vàng |
| Whistle | */ˈwɪsl/* | còi |
| Captain's armband | ** | băng đội trưởng |
| Trophy | */ˈtroʊfi/* | cúp |
| dive | */daɪv/* | giả vờ ngã để ăn vạ (trong thể thao) |
| book | */bʊk/* | phạt thẻ |
| equalizer | */ˈiːkwəlaɪzər/* | bàn gỡ hòa |
| net | */net/* | ghi bàn |
| cross | */krɒs/* | chuyền bóng, tạt bóng |
| clean sheet | ** | giữ sạch lưới |
| woodwork | ** | khung thành |
| take the lead | ** | dẫn bàn |
| offside | */ˌɔːfˈsaɪd/* | việt vị |
| Stadium | */ˈsteɪdiəm/* | sân vận động |
| Pitch | */pɪtʃ/* | sân bóng đá |
| Scoreboard | */ˈskɔːbɔːd/* | bảng điểm |
| Goal | */ɡəʊl/* | khung thành |
| Striker | */ˈstraɪkər/* | tiền đạo |
| Defender | */di'fendə/* | hậu vệ |
| Goalkeeper | */ˈɡoʊlkiːpər/* | thủ môn |
| Referee | */ˌrefərˈiː/* | trọng tài |
| Assistant referee |  | trọng tài biên |
| Coach | */kəʊtʃ/* | huấn luyện viên |
| Penalty kick |  | cú đá phạt đền |
| Corner kick |  | cú đá phạt góc |
| Red card |  | thẻ đỏ |
| Yellow card |  | thẻ vàng |
| Whistle | */ˈwɪsl/* | còi |
| Captain's armband |  | băng đội trưởng |
| Trophy | */ˈtroʊfi/* | cúp |
| dive | */daɪv/* | giả vờ ngã để ăn vạ (trong thể thao) |
| book | */bʊk/* | phạt thẻ |
| equalizer | */ˈiːkwəlaɪzər/* | bàn gỡ hòa |
| net | */net/* | ghi bàn |
| cross | */krɒs/* | chuyền bóng, tạt bóng |
| clean sheet |  | giữ sạch lưới |
| woodwork |  | khung thành |
| take the lead |  | dẫn bàn |
| offside | */ˌɔːfˈsaɪd/* | việt vị |

## References 

[Link](https://leerit.com/tu-vung-tieng-anh-theo-chu-de/tu-vung-tieng-anh-ve-bong-da-football/?r=related)

```js
var words = [];
$('.translations .vocab-group1 .col').each((index, el) => {
	var word = $(el).find('.vocab').text().trim();
	var pron = $(el).find('.ipa').length > 0 ?  $(el).find('.ipa').text().trim() : '' ;
	var meaning =  $(el).find('.meaning') .text().trim() ;
	words.push({
		word,
		pron, 
		meaning
	})
})

var str = ''; 
words.forEach(( { word, meaning, pron }  = place) => { 
    str += `| ${word} | ${pron.trim() ? '*' + pron + '*' : ''} | ${meaning} |\n`;
})
```