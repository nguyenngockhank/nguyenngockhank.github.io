# Review Code - API Doc

## Prequisites

Install AWS CLI: [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

## Export & Upload Swagger File to S3

From the root of your project (e.g. earthtoday-dataportal), run the following command:

```
export AWS_ACCESS_KEY_ID=<secret> && export AWS_SECRET_ACCESS_KEY=<secret>

aws s3 cp ./openapis.json s3://swagger-review/$USER/swagger.json --acl public-read
```

`$USER` will be replaced with the username on your machine e.g. `johndoe`

## Include in Code Review

Include the url to your uploaded API documentation in your code review request on Slack `https://redocly.github.io/redoc/?url=https://swagger-review.s3.eu-central-1.amazonaws.com/johndoe/swagger.json#tag/Public-Collect-Code/operation/PublicCollectCodeController_createPublicCollectCode` where:

* `johndoe`: is replaced with your username on your machine
* `#tag/Public-Collect-Code/operation/PublicCollectCodeController_createPublicCollectCode`: is replaced with the actual #anchor to your endpoint.

Your code review message on Slack would look like this:

```
please sir @Jane Doe
PR: https://gitlab.urbn8.io/earthtoday/earthtoday-dataportal/-/merge_requests/2877
Us: https://earth.tpondemand.com/entity/26495-update-image-response-v1usersearthidorvanitynamedecksfollowing
Doc: https://redocly.github.io/redoc/?url=https://swagger-review.s3.eu-central-1.amazonaws.com/johndoe/swagger.json#tag/Public-Collect-Code/operation/PublicCollectCodeController_createPublicCollectCode
```


<mark style="background-color:yellow;">re-export & upload swagger file to S3 again whenever there are new changes to your api documentation.</mark>
