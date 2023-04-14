# Documentation

Yeah, tầm quan trọng của document cũng không cần phải tranh cãi 
- Miêu tả các tính năng, khả năng, chức năng, tiềm năng của phần mềm
- Đóng vai trò như sự giao tiếp trong team
- Là di sản để lại cho người đến sau =)) để maintain cũng như mở rộng
- Các framework / library nổi tiếng để có docs =)) 
- ...

## Code as documentation

Trưởng lão nói rằng: 

:::: quote
So the first step to clear code is to accept that code is documentation, and then put the effort in to make it be clear. 

::: right
from [Martin Fowler](https://martinfowler.com/bliki/CodeAsDocumentation.html)
:::
::::

Mình thì chưa trải qua cái dự án nào mà lý tưởng như vậy, thậm chí là nhỏ như mấy site worpdress cũng ko thể clear :)) Thế cho nên mình vẫn thích nhìn mấy cái sơ đồ hơn 

> A Picture is Worth a Thousand Words 

## UML Diagrams

Xưa đi học các cô các thầy cứ bảo là sử dụng UML Diagrams  :)) Nhưng lớn lên mới biết nó có cả chục cái sơ đồ sơ sài.  =)))

![UML Diagrams Types](@/images/uml-diagram-types.png)

Ở một vài cty mình làm thì mấy anh PM thường vẽ **Activity Diagrams**, Còn **Use Case** chỉ viết specs hoặc dẹp luôn cho khỏe =)) 

[Bài viết chi tiết hơn](https://creately.com/blog/diagrams/uml-diagram-types-examples/)


## C4 Model 

Đây là do 1 tuyệt phẩm từ 1 phượt thủ đi du lịch nhiều, nên thường xuyên mở bản đồ ra xem. Thế là anh đã đem ý tướng đó vào trong Lập trình. 

C4 là viết tắt của 4 chữ C
- **Context** 
- **Container**
- **Component**
- **Code**

Yeah, nghĩa là zoom in Context System sẽ là các Container, zoom in các Container sẽ là các Component, zoom in Component sẽ là Code Diagram 

Ở mức Code Diagram, ta có thể sử dụng UML Class Diagram để trình bày


![C4 overview](https://c4model.com/img/c4-overview.png)

[Trang chủ C4](https://c4model.com/)

## Markdown Tools 

2 Tools mềnh đã xài 

- [mkdocs](https://www.mkdocs.org/)
- [vuepress](https://vuepress.vuejs.org/)

Nhận xét thì mình thích Vuepress hơn =))) Vì răng?
- Nhìn sáng sủa hơn =))
- Vì là 1 đồ chơi của Vue 
    - Có thể tạo ra nhiều custom UI thú vị bằng Vue
    - Nhiều plugin hay ho tốt cho SEO, PWA

Web này cũng là từ Vuepress đây :)) 

## Document From Source Code 

Những dạng tool kiểu này sẽ scan sorce code dựa theo các comment của bạn rồi build ra 1 trang API document, chủ yếu là input / output của function / class. Một vài tool có tính năng hay ho như build Class Diagram, ...

- PHP thì ta có [phpDocumentor](https://www.phpdoc.org/)
- Javascript thì ta có [jsdoc](https://jsdoc.app/index.html)

## API Document

Dạo này được giao task tạo ra Document cho API, sau đây xin trích dẫn vài thứ ngon nghẻ :)))

### [OpenAPI](https://swagger.io/docs/specification/about/)

![Logo](https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg) 
- Là 1 bộ quy tắc viết document cho API, gồm nhiều tool hay ho giúp chuyên nghiệp hóa hẳn lên =)) 
- Chỉ cần 1 file config (json / yaml) sẽ tạo ra trang document. [Demo UI](https://editor.swagger.io/)
- [Swagger UI](https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/) - tool build ra HTML cho riêng bạn. [Simple Repo](https://github.com/swagger-api/swagger-ui/tree/master/docs/samples/webpack-getting-started) 
- Xài [redocly](https://redocly.github.io/redoc/?url=https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml) nếu cảm thấy Swagger UI thật chán ngắt
- Đọc thêm: [specification](https://swagger.io/docs/specification/about/)

### [swagger-php](https://github.com/zircote/swagger-php)

Đây là tool tạo ra OpenAPI config (json/yaml) từ các tag Annotation trong comment source code

Ví dụ

```php
/**
* @OA\Post(
*      path="/core/api/token",
*      tags={"Authentication"},
*      summary="Fetch AccessToken by Credentials",
*      description="Fetch AccessTokens by credentials (Email & Password)",
*      @OA\RequestBody(
*          @OA\MediaType(
*              mediaType="application/json",
*              @OA\Schema(
*                  @OA\Property(
*                      property="email",
*                      type="string",
*                      format="email",
*                      example="abc@example.com",
*                   ),
*                   @OA\Property(
*                      property="password",
*                      type="string",
*                      format="password",
*                      example="password",
*                  ),
*              )
*          ),
*     ),  
*     @OA\Response(
*          response="200",
*          description="Success",
*          @OA\JsonContent(
*              @OA\Property(property="status", type="string", enum={"success"}),
*              @OA\Property(property="data", 
*                  type="object",
*                  @OA\Property( property="access_token", 
*                      ref="#/components/schemas/JWT"
*                  ),
*                  @OA\Property( property="refresh_token",
*                      ref="#/components/schemas/JWT",
*                      description="refresh_token is used for receiving new access_token and can only be used once."
*                  )
*              ),
*          )
*      ),
*      @OA\Response(response="403", description="Login Failed"),
*      @OA\Response(response="400", description="Bad Request"),
*      @OA\ExternalDocumentation(
*          description="Find more info about JWT",
*          url="https://jwt.io/"
*      )
*  )
*/
function token_post()
{
    $email = $this->input->post('email');
    $password = $this->input->post('password');

    try {
        $result = $this->_authService->logIn($email, $password);
        $response_data = [
            "status" => SUCCESS,
            "data" => $result ,
        ];
        $this->response($response_data);
    } catch (\Exception $ex) {
        $this->handleException($ex);
    }
}
```

Thấy ghê hong, comment dài hơn cả code =))) Để mà biết đường viết comment cho đúng thì nhớ đọc [OpenAPI specification](https://swagger.io/docs/specification/about/)

Nếu dự án lớn quá, scan quá lâu thì có thể custom lại cái tool chỉ scan folder nào mình cần thôi

```php
require("./vendor/autoload.php");
$outputPath = __DIR__ . '/swagger.json';

// project path 
$rootPath =  __DIR__ . '/path_to_project//';

$scanPaths = [
    $rootPath . 'controllers',
    $rootPath . 'modules/core/controllers',
];

$swagger = \OpenApi\scan($scanPaths);
$swagger->saveAs($outputPath);
```

### [@nestjs/swagger](https://www.npmjs.com/package/@nestjs/swagger)

Một tool khác liên quan swagger cũng dài ko kém 

```ts
  @Get("/users/:userIdOrVanityName")
  @ApiOperation({
    summary: "Get detail of target user",
    description:
      "The request will be called to receive all data of target user",
  })
  @ApiOkResponse({
    description: "The target user data has been retrieve successfully",
    type: PrivateUserResponseDto,
  })
  @UseGuards(UseNewErrorFormatGuard)
  @ApiParam(userIdOrVanityNameParameter)
  @ApiQuery({
    name: "metaTags",
    example: false,
    type: Boolean,
    description: "The meta tags option",
    required: false,
  })
  @ApiQuery({
    name: "leaderboard",
    example: false,
    type: Boolean,
    description: "The leaderboard option",
    required: false,
  })
  @ApiQuery({
    name: "owner",
    example: false,
    type: Boolean,
    description: "The owner option",
    required: false,
  })
  @ApiQuery({
    name: "collecting",
    example: false,
    type: Boolean,
    description: "The collecting option",
    required: false,
  })
  @ApiQuery({
    name: "code",
    example: "code",
    type: Boolean,
    description: "The code option",
    required: false,
  })
  @ApiQuery({
    name: "channel",
    example: "channel",
    type: Boolean,
    description: "The channel option",
    required: false,
  })
  @ApiNotFoundResponse({
    description:
      "The User with the identity (id or vanityName) cannot be found in the system",
    type: NotFoundErrorApiProperties,
  })
  @ApiInternalServerErrorResponse({
    description:
      "The server encountered an unexpected condition that prevented it from fulfilling the request",
    type: InternalServerErrorApiProperties,
  })
  async getUser(...) {
    this.controller.getUser(
  }
```

## UI Component

[**Storybook**](https://storybook.js.org/) is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free.