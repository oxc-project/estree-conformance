__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "abc",
              "cooked": "abc"
            },
            "tail": false,
            "start": 8,
            "end": 14
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "abc",
              "cooked": "abc"
            },
            "tail": true,
            "start": 15,
            "end": 20
          }
        ],
        "expressions": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 14,
            "end": 15
          }
        ],
        "start": 8,
        "end": 20
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 33,
                "end": 38
              }
            ],
            "expressions": [],
            "start": 33,
            "end": 38
          },
          "consequent": [],
          "start": 28,
          "end": 39
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "123",
                  "cooked": "123"
                },
                "tail": true,
                "start": 49,
                "end": 54
              }
            ],
            "expressions": [],
            "start": 49,
            "end": 54
          },
          "consequent": [],
          "start": 44,
          "end": 55
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 65,
                "end": 71
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 72,
                "end": 77
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 71,
                "end": 72
              }
            ],
            "start": 65,
            "end": 77
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": false,
                    "start": 87,
                    "end": 93
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": true,
                    "start": 94,
                    "end": 99
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 93,
                    "end": 94
                  }
                ],
                "start": 87,
                "end": 99
              },
              "directive": null,
              "start": 87,
              "end": 100
            }
          ],
          "start": 60,
          "end": 100
        }
      ],
      "start": 0,
      "end": 102
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 102
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "switch",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7,
    "end": 8
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 8,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 14,
    "end": 15
  },
  {
    "type": "Template",
    "value": "}abc`",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 28,
    "end": 32
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 44,
    "end": 48
  },
  {
    "type": "Template",
    "value": "`123`",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 60,
    "end": 64
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 65,
    "end": 71
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 71,
    "end": 72
  },
  {
    "type": "Template",
    "value": "}abc`",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Template",
    "value": "`def${",
    "start": 87,
    "end": 93
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 93,
    "end": 94
  },
  {
    "type": "Template",
    "value": "}def`",
    "start": 94,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  }
]
```
