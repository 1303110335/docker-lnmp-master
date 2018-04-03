define({ "api": [
  {
    "type": "get",
    "url": "/test",
    "title": "测试路由",
    "name": "TestRoute",
    "group": "Test____",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Body",
            "description": "<p>message. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "*     [\n *       \"api 项目运行成功\"\n  *     ]\n   *",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>404 Not Found. *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "*     {\n *       \"error\": \"404 Not Found\"\n  *     }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/test.js",
    "groupTitle": "Test____"
  }
] });
