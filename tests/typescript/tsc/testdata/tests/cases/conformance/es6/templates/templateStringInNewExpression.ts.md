__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false,
              "start": 4,
              "end": 10
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": true,
              "start": 11,
              "end": 16
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 10,
              "end": 11
            }
          ],
          "start": 4,
          "end": 16
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "hello ",
                  "cooked": "hello "
                },
                "tail": false,
                "start": 17,
                "end": 26
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": " world",
                  "cooked": " world"
                },
                "tail": true,
                "start": 27,
                "end": 35
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 26,
                "end": 27
              }
            ],
            "start": 17,
            "end": 35
          },
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "   ",
                  "cooked": "   "
                },
                "tail": true,
                "start": 37,
                "end": 42
              }
            ],
            "expressions": [],
            "start": 37,
            "end": 42
          },
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "1",
                  "cooked": "1"
                },
                "tail": false,
                "start": 44,
                "end": 48
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "3",
                  "cooked": "3"
                },
                "tail": true,
                "start": 49,
                "end": 52
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 48,
                "end": 49
              }
            ],
            "start": 44,
            "end": 52
          }
        ],
        "start": 0,
        "end": 53
      },
      "directive": null,
      "start": 0,
      "end": 54
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 54
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "new",
    "start": 0,
    "end": 3
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 4,
    "end": 10
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 10,
    "end": 11
  },
  {
    "type": "Template",
    "value": "}abc`",
    "start": 11,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 16,
    "end": 17
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 17,
    "end": 26
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 26,
    "end": 27
  },
  {
    "type": "Template",
    "value": "} world`",
    "start": 27,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Template",
    "value": "`   `",
    "start": 37,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43
  },
  {
    "type": "Template",
    "value": "`1${",
    "start": 44,
    "end": 48
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 48,
    "end": 49
  },
  {
    "type": "Template",
    "value": "}3`",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  }
]
```
